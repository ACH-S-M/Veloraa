<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProdukModel as Produk;
use App\Models\PelangganModel as Pelanggan;
class Keranjang extends Model
{
    protected $table = 'keranjang';
    public $timestamps = false;
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'produk_id',
        'pelanggan_id'
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
