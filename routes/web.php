<?php



use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KeranjangController;
use App\Http\Controllers\keranjangNotLogin;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\detailController;
use App\Http\Controllers\admin\laporanProduk;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\admin\pesananController;
use App\Http\Controllers\Api\ProductApi;

Route::get('/', [ProdukController::class,'getBarang'])->name('home'); // ini home nyaa
 Route::middleware(['auth', 'isAdmin'])->group(function () { //khusus role Admin
    Route::get('/admin',[AdminController::class,'index'])->name('admin.dashboard'); //role admin bakal ke dashboard
    Route::get('/admin/produk',[laporanProduk::class,'index']); // ambil laporan produk (tbel produk)
    Route::post('admin/produk', [ProdukController::class, 'store'])->name('produk.store'); //kalo mau nambah disini ake store, data dikirim dari frontend/modal ke backend
    Route::put('admin/produk/{id}', [ProdukController::class, 'update'])->name('produk.update'); //kalo mau update bakal manggilfungsi update di controller
    Route::delete('admin/produk/{id}', [ProdukController::class, 'destroy'])->name('produk.destroy'); //kalo mau delete
    Route::get('/admin/pesanan',[pesananController::class,'Index'])->name('admin.pesanan'); //tabel view pesanan doang
 });


Route::middleware(['keranjang','auth'])->group(function(){ //kalo dia udah login baru bisa akses keranjang
    Route::get('/keranjang',[KeranjangController::class,'Index'])->Name('keranjang'); //tampilin keranjng sesuai dengan milik masing masing di db
    Route::post('/keranjang/{id}', [KeranjangController::class, 'addToCart'])->name('keranjang.add'); //tambahin ke keranjang
    Route::delete('/keranjang/{id}', [KeranjangController::class, 'removeFromCart'])->name('keranjang.remove');
    Route::patch('/keranjang/{id}/quantity', [KeranjangController::class, 'updateQuantity'])->name('keranjang.updateQuantity');
});
Route::get('/detail/{id}',[detailController::class,'index']);
Route::get('/keranjang-guest',[keranjangNotLogin::class,'index'])->name('keranjangNotlogin');

Route::middleware(['auth'])->group(function () {
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');
    Route::post('/checkout/process', [CheckoutController::class, 'process'])->name('checkout.process');
    Route::get('/user/laporan-pembelian', [CheckoutController::class, 'laporanPembelian'])->name('user.laporanPembelian');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
