<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category; 
class Cliente extends Model
{
    use HasFactory;


    protected $fillable = ['ruc', 'company_name', 'dni', 'name', 'last_name', 'position', 'email', 'category_id', 'approved', 'evaluated'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}