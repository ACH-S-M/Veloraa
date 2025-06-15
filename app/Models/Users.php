<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\PelangganModel;
class Users extends Model
{
    protected $table = 'users';
    function Pelanggan(){
        return $this->hasOne(PelangganModel::class,'id','id');
    }

}
