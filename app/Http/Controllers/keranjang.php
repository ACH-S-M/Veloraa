<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class keranjang extends Controller
{
   function getKeranjang(){
    return Inertia::render('keranjang');
   }
}
