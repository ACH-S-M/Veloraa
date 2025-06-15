<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class AdminController extends Controller
{
   function index(){
    return inertia::render('admin/admin'); //dia bakal ngarahin ke admin
   }
}
