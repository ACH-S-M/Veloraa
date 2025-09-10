<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProdukModel as Produk;

class ProductApi extends Controller {

    function getProduct(){
        $product = Produk::all();
        dd($product);
        return response()->json(
            [
                "succes" => true,
                "message" => "Data berhasil terkirim",
                "data" => $product
            ]
        );
    }
}
?>
