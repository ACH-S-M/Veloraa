<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProdukModel as Produk;
use App\Models\PelangganModel as Pelanggan;
class Keranjang extends Model
{
    protected $table = 'keranjang';
    public $timestamps = false;
    protected $primaryKey = ['produk_id', 'id'];
    public $incrementing = false;

    protected $fillable = [
        'produk_id',
        'id'
    ];

    public function produk()
    {
        return $this->belongsTo(Produk::class, 'produk_id', 'ID_Produk');
    }

    public function pelanggan()
    {
        return $this->belongsTo(Pelanggan::class, 'pelanggan_id', 'id');
    }
}
