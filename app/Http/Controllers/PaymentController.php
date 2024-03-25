<?php

namespace App\Http\Controllers;
use App\Models\Payment;
use App\Models\Reservation;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('uploads', 'public');
    
        }
        
        $stands = $request->input('stands');
        $reservationId = $request->input('reservationId');

        $reservation = Reservation::find($reservationId);
    
        $payment = new Payment;
    
        $payment->date = now();
        $payment->total = $reservation->total;
        $payment->file = $path ?? null;
        $payment->reservation_id = $reservationId;
    
        $payment->save();
        return response()->json([
            'mensaje' => "pagado con exito",201
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
