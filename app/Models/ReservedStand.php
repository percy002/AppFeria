<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Reservation;
use App\Models\Stand;

class ReservedStand extends Model
{
    use HasFactory;

    protected $table = 'reserved_stand';
    protected $fillable = [
        'reservation_id',
        'stand_id',
    ];
}
