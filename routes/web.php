<?php


use App\Http\Controllers\admin\tambahProduk;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KeranjangController;
use App\Http\Controllers\keranjangNotLogin;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\detailController;
use App\Http\Controllers\admin\laporanProduk;

Route::get('/', [ProdukController::class,'getBarang'])->name('home'); // ini home nyaa
 Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/admin',[AdminController::class,'index'])->name('admin.dashboard');
    Route::get('/admin/produk',[laporanProduk::class,'index']);
    Route::post('admin/produk', [ProdukController::class, 'store'])->name('produk.store');
 });

Route::middleware(['keranjang','auth'])->group(function(){
    Route::get('/keranjang',[KeranjangController::class,'Index'])->Name('keranjang');
    Route::post('/keranjang/add/{id}', [KeranjangController::class, 'addToCart'])->name('keranjang.add');
    Route::delete('/keranjang/{produk_id}', [KeranjangController::class, 'removeFromCart'])->name('keranjang.remove');
});
Route::get('/detail/{id}',[detailController::class,'index']);
Route::get('/keranjang-guest',[keranjangNotLogin::class,'index'])->name('keranjangNotlogin');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
