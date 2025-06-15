<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
class tambahProdukController extends Controller
{
    function index(){
        return Inertia::render('admin/tambahBarang');
    }
}
