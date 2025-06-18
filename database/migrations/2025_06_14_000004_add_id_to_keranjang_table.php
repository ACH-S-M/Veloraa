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
        Schema::table('keranjang', function (Blueprint $table) {
            // Drop the existing primary key
            $table->dropPrimary(['produk_id', 'pelanggan_id']);

            // Add new id column as primary key
            $table->id()->first();

            // Add unique constraint to maintain data integrity
            $table->unique(['produk_id', 'pelanggan_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('keranjang', function (Blueprint $table) {
            // Drop the unique constraint
            $table->dropUnique(['produk_id', 'pelanggan_id']);

            // Drop the id column
            $table->dropColumn('id');

            // Recreate the original primary key
            $table->primary(['produk_id', 'pelanggan_id']);
        });
    }
};
