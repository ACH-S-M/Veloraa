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
        Schema::create('barang', function (Blueprint $table) {
            $table->id('ID_BARANG');
            $table->string("nama_produk");
            $table->text("deskripsi");
            $table->integer('harga');
            $table->timestamps();
            $table->integer('ID_KATEGORI');
            $table->foreign('ID_KATEGORI')->references('ID_KATEGORI')->on('kategoris');
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
