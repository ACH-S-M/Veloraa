<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailPesanan extends Model
{
    protected $table = 'detail_pesanan';
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
        'No_pesanan',
        'ID_produk',
        'total_barang'
    ];

    protected $primaryKey = null;

    public function pesanan()
    {
        return $this->belongsTo(Pesanan::class, 'No_pesanan', 'No_pesanan');
    }

    public function produk()
    {
        return $this->belongsTo(ProdukModel::class, 'ID_produk', 'ID_Produk');
    }
}
