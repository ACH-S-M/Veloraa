<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Pelanggan extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'pelanggan';

    protected $fillable = [
        'id',
        'alamat',
        'no_telp'
    ];

    /**
     * Get the user that owns the pelanggan.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id');
    }
}
