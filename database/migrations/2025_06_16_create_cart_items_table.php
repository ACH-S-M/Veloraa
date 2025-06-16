<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('cart_items', function (Blueprint $table) {
            
            $table->foreignId('cart_id')->constrained()->onDelete('cascade');
            $table->unsignedBigInteger('ID_Produk');
            $table->foreign('ID_Produk')->references('ID_Produk')->on('Produk')->onDelete('cascade');
            $table->integer('jumlah')->default(1);
            $table->decimal('total_harga', 10, 2);
        });
    }

    public function down()
    {
        Schema::dropIfExists('cart_items');
    }
};
