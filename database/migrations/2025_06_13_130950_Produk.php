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
        Schema::create('Produk', function (Blueprint $table) {
            $table->unsignedBigInteger('ID_Produk')->primary()->autoIncrement();
            $table->unsignedBigInteger('ID_kategori');
            $table->string("nama_produk");
            $table->integer('harga_produk');
            $table->integer('stok');
            $table->string('gambar_produk');
            $table->text("deskripsi_produk");
            $table->integer('barang_terjual');
            $table->foreign('ID_KATEGORI')->references('ID_kategori')->on('kategori')->onDelete('cascade');
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
