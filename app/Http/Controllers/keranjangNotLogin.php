<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class keranjangNotLogin extends Controller
{
    public function index(){
        return Inertia::render('user/keranjangnotLogin');
    }
}
