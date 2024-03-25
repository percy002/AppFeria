<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Stand;
use App\Models\Payment;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'date' , 'total' , 'cliente_id'];

    public function client()
    {
        return $this->belongsTo(Cliente::class,'cliente_id');
    }

    public function stands()
    {
        return $this->belongsToMany(Stand::class,'reserved_stand');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }


}
