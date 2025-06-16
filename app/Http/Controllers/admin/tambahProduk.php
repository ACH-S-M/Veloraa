<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class tambahProduk extends Controller
{
    function tambahProduk(){
        return Inertia::render('admin/tambahBarang');
    }
}
