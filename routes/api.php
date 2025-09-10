<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\productApi;

Route::get('/tes',[ProductApi::class,'getProduct'])->name('tes');




?>
