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
        Schema::table('pesanan', function (Blueprint $table) {
            $table->string('status')->default('pending')->after('total_harga');
            $table->string('alamat_pengiriman')->after('status');
            $table->string('kota')->after('alamat_pengiriman');
            $table->string('kode_pos')->after('kota');
            $table->string('nomor_telepon')->after('kode_pos');
            $table->timestamps();

            // Rename Id_user to pelanggan_id for consistency
            $table->renameColumn('Id_user', 'pelanggan_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pesanan', function (Blueprint $table) {
            $table->dropColumn(['status', 'alamat_pengiriman', 'kota', 'kode_pos', 'nomor_telepon', 'created_at', 'updated_at']);
            $table->renameColumn('pelanggan_id', 'Id_user');
        });
    }
};
