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
        $alamat = Pelanggan::where('id',$user->id)->value('alamat');
        return Inertia::render('Checkout/Index', [
            'cartItems' => $cartItems,
            'alamat' => $alamat,

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
                $detail->pesanan_id = $pesanan->No_pesanan;
                $detail->produk_id = $item->produk_id;
                $detail->jumlah = $item->quantity;
                $detail->harga = $item->produk->harga_produk;
                $detail->save();
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
}
