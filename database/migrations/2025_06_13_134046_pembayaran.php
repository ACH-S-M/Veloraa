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
        Schema::create('pembayaran',function (Blueprint $table){
            $table->id('no_pembayaran');
            $table->unsignedBigInteger('no_pesanan')->unique(); // <- one to one
            $table->string('metode_pembayaran')->nullable();
            $table->enum('status', ['belum bayar', 'lunas'])->default('belum bayar');
            $table->timestamp('tanggal_pembayaran')->nullable();
            $table->foreign('no_pesanan')->references('no_pesanan')->on('pesanan')->onDelete('cascade');
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
