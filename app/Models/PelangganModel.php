<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Users;

class PelangganModel extends Model
{
    protected $table = 'pelanggans';
    public function Users(){
        return $this->belongsTo(Users::class,'id_user','id_user');
    }
}
