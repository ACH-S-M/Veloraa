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

            // cek dulu apa di keranjang ada atau tidak
            $existingCart = Keranjang::where([
                'produk_id' => $id,
                'pelanggan_id' => $pelanggan_id
            ])->first();

            if ($existingCart) {
                // If prouk di keranjang udah ada , kuantitasnya jadi nambah +1
                $existingCart->quantity += 1;
                $existingCart->save();

                return response()->json([
                    'message' => 'Jumlah produk berhasil ditambahkan'
                ]);
            }

            // Add to cart with quantity 1
            Keranjang::create([
                'produk_id' => $id,
                'pelanggan_id' => $pelanggan_id, //kalo misal gaada barang, nanti nmmbah insert data di db, bakal direturn ke card ama inertia
                'quantity' => 1
            ]);


        } catch (\Exception $e) { //pengecualian kalo gagal
            return response()->json([
                'message' => $e->getMessage() //lempar json pesan dari $e /error/ pengecualian
            ], 500);
        }
    }

    public function index()
    {
        if (!Auth::check()) {
            return redirect()->route('login'); //kalo blm login dia bakal lempar ke /login
        }

        $pelanggan_id = Auth::id();
        $cartItems = Keranjang::with('produk')
            ->where('pelanggan_id', $pelanggan_id)
            ->get(); //ambil forein key produk di keranjang

        return Inertia::render('Keranjang/Index', [
            'cartItems' => $cartItems //mengembalikan page keranjang
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
