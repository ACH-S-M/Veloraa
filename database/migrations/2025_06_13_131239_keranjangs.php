<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('keranjang',function (Blueprint $table){
            $table->unsignedBigInteger('produk_id');
            $table->unsignedBigInteger('pelanggan_id');
            $table->primary(['produk_id', 'pelanggan_id']);
            $table->foreign('produk_id')->references('ID_Produk')->on('produk')->onDelete('cascade');
            $table->foreign('pelanggan_id')->references('id')->on('pelanggan')->onDelete('cascade');


        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
