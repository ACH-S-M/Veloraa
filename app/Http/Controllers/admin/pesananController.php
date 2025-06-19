<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pesanan;

class pesananController extends Controller{
    function Index(){
        $Pesanan = Pesanan::all();
        return Inertia::render('admin/pesanan',['Produkdipesan' => $Pesanan]);
    }
 
}
