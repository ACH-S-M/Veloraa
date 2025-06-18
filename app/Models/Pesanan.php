<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    protected $table = 'pesanan';
    protected $primaryKey ='No_pesanan';
    protected $fillable = [
        'pelanggan_id',
        'total_harga',
        'status',
        'alamat_pengiriman',
        'kota',
        'kode_pos',
        'nomor_telepon'
    ];

    public function pelanggan()
    {
        return $this->belongsTo(User::class, 'pelanggan_id');
    }

    public function detailPesanan()
    {
        return $this->hasMany(DetailPesanan::class, 'pesanan_id');
    }
}
