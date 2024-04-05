<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Cliente;
use App\Models\Reservation;

use Illuminate\Http\Request;
Use PDF;

class PdfController extends Controller
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

    public function invoicePDF(Request $request)
    {
        $clientId = $request->input('clientId');
        $reservationId = $request->input('reservationId');

        $cliente = Cliente::find($clientId);
        $reservation = Reservation::with(['payment.paymentStatus','stands.category'])->find($reservationId);  
        // $reservation = Reservation::find($reservationId);

        // $acepted = $reservation->payment->paymentStatus;
        
        $acepted = $reservation->payment->paymentStatus()->where('status', 'aceptado')->get();

        // dd($reservation);
        if ($acepted) {
            
        }
        // dd($reservation->stands);
        return Inertia::render('Pdf/InvoicePDF',['client' => $cliente, 'stands' => $reservation->stands , 'payment' => $reservation->payment ]);
    }

    public function fotocheckPDF($clientId)
    {
        $cliente = Cliente::find($clientId);
        return Inertia::render('Pdf/FotocheckPDF',['client' => $cliente]);
    }
    public function contractPDF($clientId)
    {
        $cliente = Cliente::find($clientId);

        return Inertia::render('Pdf/ContractPDF',['client' => $cliente]);
    }
}
