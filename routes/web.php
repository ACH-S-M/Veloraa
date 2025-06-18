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
use App\Http\Controllers\CheckoutController;

Route::get('/', [ProdukController::class,'getBarang'])->name('home'); // ini home nyaa
 Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/admin',[AdminController::class,'index'])->name('admin.dashboard');
    Route::get('/admin/produk',[laporanProduk::class,'index']);
    Route::post('admin/produk', [ProdukController::class, 'store'])->name('produk.store');
 });

Route::middleware(['keranjang','auth'])->group(function(){
    Route::get('/keranjang',[KeranjangController::class,'Index'])->Name('keranjang');
    Route::post('/keranjang/{id}', [KeranjangController::class, 'addToCart'])->name('keranjang.add');
    Route::delete('/keranjang/{id}', [KeranjangController::class, 'removeFromCart'])->name('keranjang.remove');
    Route::patch('/keranjang/{id}/quantity', [KeranjangController::class, 'updateQuantity'])->name('keranjang.updateQuantity');
});
Route::get('/detail/{id}',[detailController::class,'index']);
Route::get('/keranjang-guest',[keranjangNotLogin::class,'index'])->name('keranjangNotlogin');

Route::middleware(['auth'])->group(function () {
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');
    Route::post('/checkout/process', [CheckoutController::class, 'process'])->name('checkout.process');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
