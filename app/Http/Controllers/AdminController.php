<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pesanan;
use App\Models\ProdukModel as Produk;
class AdminController extends Controller
{
   function index(){
    $Penjualan = Pesanan::count();
    $UangPenjualan = Pesanan::sum('total_harga');
    $stok = Produk::sum('stok');
    return inertia::render('admin/admin',
    ['Penjualan' => $Penjualan,
           'UangPenjualan' => $UangPenjualan,
         'stok' => $stok]); //dia bakal ngarahin ke admin
   }

}
