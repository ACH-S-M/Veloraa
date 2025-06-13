<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\BarangModel ;
use Inertia\Inertia;

class barangController extends Controller
{
   function getBarang(){
        $barangPopuler = BarangModel::orderByDesc("barang_terjual")->limit(3)->get();

        $kategori = BarangModel::all();
        return Inertia::render('dashboard',[
            'Barang' => $barangPopuler,
            'IKategori' => $kategori
        ]);

   }
}
