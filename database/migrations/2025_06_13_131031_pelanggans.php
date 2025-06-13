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

        Schema::create('pelanggan', function (Blueprint $table) {
            $table->id();
            $table->string('kota');
            $table->string('provinsi');   //ini kesambung one to one ke users
            $table->string('kecamatan');
            $table->string('kelurahan');
            $table->string('no_hp');
            $table->foreign('id')->references('id')->on('users')->onDelete('cascade');
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
