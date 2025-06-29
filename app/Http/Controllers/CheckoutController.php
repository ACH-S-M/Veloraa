<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use App\Models\Pesanan;
use App\Models\DetailPesanan;
use App\Models\Pelanggan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckoutController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Ambil keranjang dari Pelanggan yang udah authentikasi
        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $user->id)
            ->get();

        // Ambil data alamat dan no_telp dari tabel pelanggan
        $pelanggan = Pelanggan::where('id', $user->id)->first();
        $alamat = $pelanggan ? $pelanggan->alamat : '';
        $no_telp = $pelanggan ? $pelanggan->no_telp : '';
        $kota = $pelanggan ? $pelanggan->kota : '';
        $kode_pos = $pelanggan ? $pelanggan->kode_pos : '';

        return Inertia::render('Checkout/Index', [
            'cartItems' => $cartItems,
            'alamat' => $alamat,
            'no_telp' => $no_telp,
            'kota' => $kota,
            'kode_pos' => $kode_pos
        ]);
    }

    public function process(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'alamat' => 'required|string',
            'kota' => 'required|string',
            'kode_pos' => 'required|string',
            'nomor_telepon' => 'required|string',
        ]);

        $user = Auth::user();

        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $user->id)
            ->get();

        if ($cartItems->isEmpty()) {
            return back()->with('error', 'Keranjang belanja kosong.');
        }

        // Calculate total
        $total = $cartItems->sum(function ($item) {
            return $item->produk->harga_produk * $item->quantity;
        });

        DB::beginTransaction();
        try {
            // Create order
            $pesanan = new Pesanan();
            $pesanan->pelanggan_id = $user->id;
            $pesanan->total_harga = $total;
            $pesanan->status = 'pending';
            $pesanan->alamat_pengiriman = $validated['alamat'];
            $pesanan->kota = $validated['kota'];
            $pesanan->kode_pos = $validated['kode_pos'];
            $pesanan->nomor_telepon = $validated['nomor_telepon'];
            $pesanan->tanggal_pemesanan = now();
            $pesanan->save();

            // Create order details
            foreach ($cartItems as $item) {
                $detail = new DetailPesanan();
                $detail->No_pesanan = $pesanan->No_pesanan;
                $detail->ID_produk = $item->produk_id;
                $detail->total_barang = $item->quantity;
                $detail->save();

                // Update stok dan barang_terjual produk
                $produk = \App\Models\ProdukModel::find($item->produk_id);
                if ($produk) {
                    $produk->stok = max(0, $produk->stok - $item->quantity); // pastikan stok tidak minus
                    $produk->barang_terjual = ($produk->barang_terjual ?? 0) + $item->quantity;
                    $produk->save();
                }
            }

            // Clear cart
            Keranjang::where('pelanggan_id', $user->id)->delete();

            DB::commit();
            return redirect()->route('home')->with('success', 'Pesanan berhasil dibuat!');

        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Checkout process failed', [
                'error' => $e->getMessage(),
                'user_id' => $user->id
            ]);
            return back()->with('error', 'Terjadi kesalahan saat membuat pesanan: ' . $e->getMessage());
        }
    }

    public function laporanPembelian()
    {
        $user = Auth::user();
        $pesanan = \App\Models\Pesanan::where('pelanggan_id', $user->id)
            ->orderByDesc('tanggal_pemesanan')
            ->with(['details.produk'])
            ->first();

        if ($pesanan) {
            $details = $pesanan->details->map(function ($detail) {
                return [
                    'produk' => [
                        'nama_produk' => $detail->produk->nama_produk,
                        'harga_produk' => $detail->produk->harga_produk,
                        'gambar_produk' => $detail->produk->gambar_produk,
                    ],
                    'jumlah' => $detail->total_barang,
                    'harga' => $detail->produk->harga_produk,
                ];
            });
            $pesananData = [
                'No_pesanan' => $pesanan->No_pesanan,
                'tanggal_pemesanan' => $pesanan->tanggal_pemesanan,
                'total_harga' => $pesanan->total_harga,
                'status' => $pesanan->status,
                'alamat_pengiriman' => $pesanan->alamat_pengiriman,
                'kota' => $pesanan->kota,
                'kode_pos' => $pesanan->kode_pos,
                'nomor_telepon' => $pesanan->nomor_telepon,
                'details' => $details,
            ];
        } else {
            $pesananData = null;
        }

        return Inertia::render('user/laporanPembelian', [
            'pesanan' => $pesananData
        ]);
    }
}
