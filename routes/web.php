<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;


Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('home'); // ini home nyaa
Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/admin',[AdminController::class,'index'])->name('admin.dashboard');
 });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
