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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('ruc', 11)->unique()->nullable(); 
            $table->string('company_name')->unique()->nullable(); 
            $table->string('dni', 8)->unique(); 
            $table->string('name');
            $table->string('last_name');
            $table->string('position')->nullable();
            $table->string('email')->unique();
            $table->string('phone_number', 9)->unique();
            $table->boolean('approved')->default(false);
            $table->boolean('evaluated')->default(false);
            $table->unsignedBigInteger('category_id');
 
            $table->foreign('category_id')->references('id')->on('categories');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
