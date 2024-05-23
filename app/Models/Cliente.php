<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category; 
class Cliente extends Model
{
    use HasFactory;


    protected $fillable = ['ruc', 'company_name', 'trade_name', 'address', 'ficha_ruc', 'dni', 'name', 'last_name', 'position', 'phone_number', 'email', 'category_id', 'subcategory_id', 'approved', 'evaluated'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reservation()
    {
        return $this->hasMany(Reservation::class);
    }
}
