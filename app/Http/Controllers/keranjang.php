<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Users;
class keranjang extends Controller
{
   function getKeranjang(){
    $user = Users::with('Pelanggan')->get();
    return Inertia::render('user/keranjang',['user' => $user]

);
   }
}
