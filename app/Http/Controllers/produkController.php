<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ProdukModel as Produk;
use Inertia\Inertia;


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

        //Bikin file dengan nama acak
        $filename = time() . '_' . uniqid() . '.' . $request->file('gambar')->getClientOriginalExtension();

        // buat pindahin file ke public/img/produk
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

    public function update(Request $request, $id){
        $request->validate([
            'nama' => 'sometimes|required|string|max:255',
            'harga' => 'required|numeric',
            'stok' => 'required|numeric|min:0',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $produk = Produk::findOrFail($id);

        $updateData = [
            'nama_produk' => $request->nama,
            'harga_produk' => $request->harga,
            'stok' => $request->stok,
            'deskripsi_produk' => $request->deskripsi ?? '',
        ];

        // kalo punya gambar
        if ($request->hasFile('gambar')) {
            // hapus gambar yg lama
            if ($produk->gambar_produk && file_exists(public_path('img/produk/' . $produk->gambar_produk))) {
                unlink(public_path('img/produk/' . $produk->gambar_produk));
            }

            // Generate unique filename
            $filename = time() . '_' . uniqid() . '.' . $request->file('gambar')->getClientOriginalExtension();

            // Move the file to public/img/produk
            $request->file('gambar')->move(public_path('img/produk'), $filename);

            $updateData['gambar_produk'] = $filename;
        }

        $produk->update($updateData);

        return redirect()->back()->with('success', 'Produk berhasil diperbarui!');
    }

    public function destroy($id){
        $produk = Produk::findOrFail($id);

        // Delete image file if exists
        if ($produk->gambar_produk && file_exists(public_path('img/produk/' . $produk->gambar_produk))) {
            unlink(public_path('img/produk/' . $produk->gambar_produk));
        }

        $produk->delete();

        return redirect()->back()->with('success', 'Produk berhasil dihapus!');
    }

}
