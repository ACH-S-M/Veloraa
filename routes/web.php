<?php

use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\keranjang;
use App\Http\Controllers\keranjangNotLogin;

Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('home'); // ini home nyaa
 Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/admin',[AdminController::class,'index'])->name('admin.dashboard');
 });
Route::middleware(['keranjang'])->group(function(){
    Route::get('/keranjang',[keranjang::class,'getKeranjang'])->Name('keranjang');
});
Route::get('/keranjang-guest',[keranjangNotLogin::class,'index'])->name('keranjangNotlogin');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
