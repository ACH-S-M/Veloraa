<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ProdukModel as Produk;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProdukController extends Controller
{
    function getBarang(){
        $produkPopuler = Produk::orderByDesc("barang_terjual")->limit(3)->get();
        $kategori = Produk::all();
        return Inertia::render('user/dashboard',[
            'Produk' => $produkPopuler,
            'IKategori' => $kategori
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'stok' => 'required|numeric|min:0',
            'gambar' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // Generate unique filename
        $filename = time() . '_' . uniqid() . '.' . $request->file('gambar')->getClientOriginalExtension();

        // Move the file to public/img/produk
        $request->file('gambar')->move(public_path('img/produk'), $filename);

        // Simpan data produk ke database
        Produk::create([
            'nama_produk' => $request->nama,
            'harga_produk' => $request->harga,
            'gambar_produk' => $filename,
            'stok' => $request->stok,
            'barang_terjual' => 0, // Default barang terjual
            'deskripsi_produk' => $request->deskripsi ?? '', // Optional deskripsi
        ]);

        return redirect()->back()->with('success', 'Produk berhasil ditambahkan!');
    }
}
