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

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('detail_pesanan', function (Blueprint $table) {
            $table->dropColumn(['harga', 'created_at', 'updated_at']);

            // Drop foreign keys
            $table->dropForeign(['pesanan_id']);
            $table->dropForeign(['produk_id']);

            // Rename columns back
            $table->renameColumn('jumlah', 'total_barang');
            $table->renameColumn('pesanan_id', 'No_pesanan');
            $table->renameColumn('produk_id', 'ID_produk');

            // Recreate original foreign keys
            $table->foreign('No_pesanan')->references('No_pesanan')->on('pesanan')->onDelete('cascade');
            $table->foreign('ID_produk')->references('ID_Produk')->on('produk')->onDelete('cascade');

            // Drop and recreate primary key with original column names
            $table->dropPrimary();
            $table->primary(['No_pesanan', 'ID_produk']);
        });
    }
};
