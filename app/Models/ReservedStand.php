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

    // Ejemplo de relación con el modelo Stand
    public function stand()
    {
        return $this->belongsTo(Stand::class);
    }

    // Ejemplo de relación con el modelo Event
    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }
}
