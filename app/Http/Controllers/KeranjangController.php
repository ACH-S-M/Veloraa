<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class KeranjangController extends Controller
{
    public function addToCart(Request $request)
    {
        $request->validate([
            'produk_id' => 'required|exists:produk,ID_Produk'
        ]);

        $pelanggan_id = Auth::id();

        // Check if product already exists in cart
        $existingCart = Keranjang::where('produk_id', $request->produk_id)
            ->where('pelanggan_id', $pelanggan_id)
            ->first();

        if ($existingCart) {
            return back()->with('error', 'Produk sudah ada di keranjang');
        }

        // Add to cart
        Keranjang::create([
            'produk_id' => $request->produk_id,
            'pelanggan_id' => $pelanggan_id
        ]);

        return back()->with('success', 'Produk berhasil ditambahkan ke keranjang');
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
        $pelanggan_id = Auth::guard('pelanggan')->id();

        Keranjang::where('produk_id', $produk_id)
            ->where('pelanggan_id', $pelanggan_id)
            ->delete();

        return back()->with('success', 'Produk berhasil dihapus dari keranjang');
    }
}
