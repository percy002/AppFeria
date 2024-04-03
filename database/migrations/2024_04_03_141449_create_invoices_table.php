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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('number_invoice')->unique();
            $table->float('total');
            $table->timestamp('date');
            $table->unsignedBigInteger('cliente_id');

            $table->timestamps();

            $table->foreign('cliente_id')->references('id')->on('clientes');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
