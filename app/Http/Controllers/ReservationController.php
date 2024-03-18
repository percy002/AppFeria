<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth; // Agrega esta línea
use Inertia\Inertia; 
use App\Models\Stand;
use App\Models\ReservedStand;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($clientId)
    {
        //
        $autenticado = Auth::user()->cliente_id == $clientId;

        if (!$autenticado) {
            return redirect('error');
        }
        $stands = Stand::whereHas('reservations', function ($query) use ($clientId) {
            $query->where('cliente_id', $clientId);
        })->get();

        $reservations = Reservation::where('cliente_id', $clientId)->with('stands')->get();


        // dd($reservations);
        return Inertia::render('Reservations/Reservation', [
            'reservations' => $reservations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($standId)
    {
        //
        $stand = Stand::find($standId);
        return Inertia::render('Reservar', [
            'status' => session('status'),
            'stand' => $stand
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $stands = $request->stands;
        DB::beginTransaction();
        try {
            $total = 0;
            foreach ($stands as $stand) {
                $total += $stand["price"];
            }
            $reservation = new Reservation();
            $reservation->date = date('Y-m-d H:i:s');
            $reservation->total = $total;
            $reservation->cliente_id = $request->idCliente;
            $reservation->save();

            foreach ($stands as $stand) {
                $reservationDetail = new ReservedStand();
                $reservationDetail->stand_id = $stand["id"];
                $reservationDetail->reservation_id = $reservation->id;
                $reservationDetail->price = $stand["price"];
                $reservationDetail->save();
            }

            DB::commit();

            return response()->json(['message' => 'Reservacion creada satisfactoriamente'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Error al crear la reservacion'.$e], 500);
        }

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
