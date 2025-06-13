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
        Schema::create('pesanan',function (Blueprint $table){
            $table->id('No_pesanan');
            $table->unsignedBigInteger('Id_user');
            $table->timestamp('tanggal_pemesanan');

            $table->integer('total_harga');
            $table->foreign('Id_user')->references('id')->on('pelanggan')->onDelete('cascade');
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
