<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    protected $table = 'pesanan';
    protected $primaryKey = 'No_pesanan';
    public $timestamps = false;

    protected $fillable = [
        'pelanggan_id',
        'total_harga',
        'status',
        'alamat_pengiriman',
        'kota',
        'kode_pos',
        'nomor_telepon',
        'tanggal_pemesanan'
    ];

    public function pelanggan()
    {
        return $this->belongsTo(User::class, 'pelanggan_id');
    }

    public function details()
    {
        return $this->hasMany(DetailPesanan::class, 'No_pesanan', 'No_pesanan');
    }
}
