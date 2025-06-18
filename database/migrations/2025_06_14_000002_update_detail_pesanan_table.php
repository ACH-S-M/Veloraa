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
        Schema::table('detail_pesanan', function (Blueprint $table) {
            // Add new columns
            $table->decimal('harga', 10, 2)->after('total_barang');
            $table->timestamps();

            // Rename columns
            $table->renameColumn('total_barang', 'jumlah');
            $table->renameColumn('No_pesanan', 'pesanan_id');
            $table->renameColumn('ID_produk', 'produk_id');

            // Drop and recreate foreign keys with new column names
            $table->dropForeign(['No_pesanan']);
            $table->dropForeign(['ID_produk']);

            $table->foreign('pesanan_id')->references('No_pesanan')->on('pesanan')->onDelete('cascade');
            $table->foreign('produk_id')->references('ID_Produk')->on('produk')->onDelete('cascade');

            // Drop and recreate primary key with new column names
            $table->dropPrimary();
            $table->primary(['pesanan_id', 'produk_id']);
        });
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
