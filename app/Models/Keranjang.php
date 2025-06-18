<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProdukModel as Produk;
use App\Models\PelangganModel as Pelanggan;

class Keranjang extends Model
{
    protected $table = 'keranjang';
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
        'produk_id',
        'pelanggan_id',
        'quantity'
    ];

    /**
     * Set the keys for a save update query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function setKeysForSaveQuery($query)
    {
        return $query->where('produk_id', '=', $this->getAttribute('produk_id'))
                    ->where('pelanggan_id', '=', $this->getAttribute('pelanggan_id'));
    }

    public function produk()
    {
        return $this->belongsTo(Produk::class, 'produk_id', 'ID_Produk');
    }

    public function pelanggan()
    {
        return $this->belongsTo(Pelanggan::class, 'pelanggan_id', 'id');
    }
}
