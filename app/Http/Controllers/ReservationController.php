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
    public function index()
    {
        //
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
        //
        $stands = $request->stands;
        // dd($stands);
        DB::beginTransaction();

        try {
            // dd($request['clientId']);
            $reservation = new Reservation();
            $reservation->date = date('Y-m-d H:i:s');
            $reservation->total = 0;
            $reservation->cliente_id = $request['clientId'];
            $reservation->save();

            foreach ($stands as $stand) {
                $reservationDetail = new ReservedStand();
                $reservationDetail->stand_id = $stand->id;
                $reservationDetail->reservation_id = $reservation->id;
                $reservationDetail->price = $stand->price;
                $reservationDetail->save();
            }

            // $reservationDetail = new ReservedStand();
            // $reservationDetail->stand_id = $request['stand']['id'];
            // $reservationDetail->reservation_id = $reservation->id;
            // $reservationDetail->price = $request['stand']['price'];
            // $reservationDetail->save();

            DB::commit();

            return response()->json(['message' => 'Reservacion creada satisfactoriamente'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Error al crear la reservacion'.$e], 500);
        }


        // dd($request->stand);
        // $reservation = new Reservation();
        // $reservation->date = date('Y-m-d H:i:s');
        // $reservation->total = 0;
        // $reservation->cliente_id = $request->cliente_id;
        // $reservation->save();
        
        // $reservationDetail = new ReservationDetail();
        // $reservationDetail->stand_id = $request->stand->id;
        // $reservationDetail->reservation_id = $reservation->id;
        // $reservationDetail->precio = $request->stand->precio;


        return response()->json(['message' => 'Reservacion creada satisfactoriamente'], 201);
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
