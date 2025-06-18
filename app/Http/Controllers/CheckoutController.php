<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use App\Models\Pesanan;
use App\Models\DetailPesanan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        // Get cart items for the authenticated user
        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $user->id)
            ->get();

        return Inertia::render('Checkout/Index', [
            'cartItems' => $cartItems,
            'user' => $user
        ]);
    }

    public function process(Request $request)
    {
        $user = Auth::user();
        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $user->id)
            ->get();

        // Calculate total
        $total = $cartItems->sum(function ($item) {
            return $item->produk->harga_produk * $item->quantity;
        });

        DB::beginTransaction();
        try {
            // Create order
            $pesanan = Pesanan::create([
                'pelanggan_id' => $user->id,
                'total_harga' => $total,
                'status' => 'pending',
                'alamat_pengiriman' => $request->alamat,
                'kota' => $request->kota,
                'kode_pos' => $request->kode_pos,
                'nomor_telepon' => $request->nomor_telepon,
            ]);

            // Create order details
            foreach ($cartItems as $item) {
                DetailPesanan::create([
                    'pesanan_id' => $pesanan->id,
                    'produk_id' => $item->produk_id,
                    'jumlah' => $item->quantity,
                    'harga' => $item->produk->harga_produk
                ]);
            }

            // Clear cart
            Keranjang::where('pelanggan_id', $user->id)->delete();

            DB::commit();
            return redirect()->route('dashboard')->with('success', 'Pesanan berhasil dibuat!');

        } catch (\Exception $e) {
            DB::rollback();
            return back()->with('error', 'Terjadi kesalahan saat membuat pesanan.');
        }
    }
}
