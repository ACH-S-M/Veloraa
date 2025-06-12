<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\BarangModel ;
use Inertia\Inertia;

class barangController extends Controller
{
   function getBarang(){
        $barang = BarangModel::select('nama_produk','harga')->get();
        return Inertia::render('dashboard',[
            'Barang' => $barang
        ]);

   }
}
