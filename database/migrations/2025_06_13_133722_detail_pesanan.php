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
        Schema::create('detail_pesanan',function (Blueprint $table){
            $table->unsignedBigInteger('No_pesanan');
            $table->unsignedBigInteger('ID_produk');
            $table->integer('total_barang');
            $table->foreign('No_pesanan')->references('No_pesanan')->on('pesanan')->onDelete('cascade');
            $table->foreign('ID_produk')->references('ID_produk')->on('produk')->onDelete('cascade');
            $table->primary(['no_pesanan', 'id_produk']);
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
