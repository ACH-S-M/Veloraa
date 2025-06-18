<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class KeranjangController extends Controller
{
    public function addToCart($id)
    {
        try {
            $pelanggan_id = Auth::id();

            // Check if product already exists in cart
            $existingCart = Keranjang::where([
                'produk_id' => $id,
                'pelanggan_id' => $pelanggan_id
            ])->first();

            if ($existingCart) {
                // If product exists, increment quantity
                $existingCart->quantity += 1;
                $existingCart->save();

                return response()->json([
                    'message' => 'Jumlah produk berhasil ditambahkan'
                ]);
            }

            // Add to cart with quantity 1
            Keranjang::create([
                'produk_id' => $id,
                'pelanggan_id' => $pelanggan_id,
                'quantity' => 1
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
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $pelanggan_id = Auth::id();
        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $pelanggan_id)
            ->get();

        return Inertia::render('Keranjang/Index', [
            'cartItems' => $cartItems
        ]);
    }

    public function updateQuantity(Request $request, $produk_id)
    {
        try {
            if (!Auth::check()) {
                return response()->json([
                    'message' => 'Silakan login terlebih dahulu'
                ], 401);
            }

            $pelanggan_id = Auth::id();
            $quantity = $request->input('quantity');

            if ($quantity < 1) {
                return response()->json([
                    'message' => 'Jumlah minimal adalah 1'
                ], 422);
            }

            $cartItem = Keranjang::where([
                'produk_id' => $produk_id,
                'pelanggan_id' => $pelanggan_id
            ])->first();

            if (!$cartItem) {
                return response()->json([
                    'message' => 'Produk tidak ditemukan di keranjang'
                ], 404);
            }

            $cartItem->quantity = $quantity;
            $cartItem->save();

            return response()->json([
                'message' => 'Jumlah produk berhasil diupdate',
                'quantity' => $quantity
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan saat mengupdate jumlah produk'
            ], 500);
        }
    }

    public function removeFromCart($produk_id)
    {
        try {
            if (!Auth::check()) {
                return response()->json([
                    'message' => 'Silakan login terlebih dahulu'
                ], 401);
            }

            $pelanggan_id = Auth::id();

            Keranjang::where([
                'produk_id' => $produk_id,
                'pelanggan_id' => $pelanggan_id
            ])->delete();

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
