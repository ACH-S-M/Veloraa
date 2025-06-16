<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class KeranjangController extends Controller
{
    public function addToCart($id)
    {
        try {
            $pelanggan_id = Auth::id();
            // Check if product already exists in cart
            $existingCart = Keranjang::where('produk_id', $id)
                ->where('pelanggan_id', $pelanggan_id)
                ->first();

            if ($existingCart) {
                return response()->json([
                    'message' => 'Produk sudah ada di keranjang'
                ], 422);
            }

            // Add to cart
            Keranjang::create([
                'produk_id' => $id,
                'pelanggan_id' => $pelanggan_id
            ]);

            return response()->json([
                'message' => 'Produk berhasil ditambahkan ke keranjang'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function index()
    {
        $pelanggan_id = Auth::id(); // default pakai guard 'web
        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $pelanggan_id)
            ->get();

        return Inertia::render('Keranjang/Index', [
            'cartItems' => $cartItems
        ]);
    }

    public function removeFromCart($produk_id)
    {
        try {
            $pelanggan_id = Auth::guard('pelanggan')->id();

            Keranjang::where('produk_id', $produk_id)
                ->where('pelanggan_id', $pelanggan_id)
                ->delete();

            return response()->json([
                'message' => 'Produk berhasil dihapus dari keranjang'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan saat menghapus produk dari keranjang'
            ], 500);
        }
    }
}
