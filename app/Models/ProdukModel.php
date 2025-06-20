<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProdukModel extends Model
{
    protected $table = 'produk';
    protected $primaryKey = 'ID_Produk';
    protected $fillable = [
         'nama_produk',
         'harga_produk',
         'stok',
         'deskripsi_produk',
         'gambar_produk',
         'barang_terjual'
    ];
}
