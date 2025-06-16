<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\ProdukModel as Produk;
class laporanProduk extends Controller
{
    function index(){
        $produk = Produk::all();
        return Inertia::render('admin/LaporanPenjualan',[
            'Produk' => $produk
        ]);
    }
}
