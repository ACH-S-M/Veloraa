<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Users;

class PelangganModel extends Model
{
    protected $table = 'pelanggan';
    public function Users(){
        return $this->belongsTo(Users::class,'id','id');
    }
}
