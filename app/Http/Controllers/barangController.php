<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ProdukModel as Produk ;
use Inertia\Inertia;

class barangController extends Controller
{
   function getBarang(){
        $barangPopuler = Produk::orderByDesc("barang_terjual")->limit(3)->get();

        $kategori = Produk::all();
        return Inertia::render('dashboard',[
            'Barang' => $barangPopuler,
            'IKategori' => $kategori
        ]);

   }
}
