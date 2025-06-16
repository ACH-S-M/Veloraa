<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProdukModel as Produk;

class detailController extends Controller
{
    function index($ID_Produk){
        $produk = Produk::findOrFail($ID_Produk);
        return Inertia::render('user/detailProduk',[
            'nama_produk' => $produk->nama_produk,
            'harga_produk' => $produk->harga_produk,
            'gambar_produk' => $produk->gambar_produk,
            'deskripsi_produk' => $produk->deskripsi_produk,
            'stok' => $produk->stok,
            'barang_terjual' => $produk->barang_terjual,
        ]);
    }
}
