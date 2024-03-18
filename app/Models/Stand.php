<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ReservedStand;
use App\Models\Reservation;
class Stand extends Model
{
    use HasFactory;

    protected $fillable = ['name','block','price', 'category_id'];

    public function reservations()
    {
        return $this->belongsToMany(Reservation::class, 'reserved_stand');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}
