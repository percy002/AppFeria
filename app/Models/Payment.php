<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Reservation;
use App\Models\PaymentStatus; 


class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        "total",
        "date",
        "file",
        "contractFile",
        "reservation_id"
    ];

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function PaymentStatus()
    {
        return $this->hasMany(PaymentStatus::class);
    }
    
}
