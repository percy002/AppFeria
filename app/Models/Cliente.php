<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;


    protected $fillable = ['ruc', 'company_name', 'dni', 'name', 'last_name', 'position', 'email', 'approved', 'evaluated'];
}
