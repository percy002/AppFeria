<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth; // Agrega esta línea
use Inertia\Inertia; 
use App\Models\Stand;
use App\Models\Payment;
use App\Models\ReservedStand;
use App\Models\Reservation;
use App\Models\Cliente;
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

        $reservations = Reservation::where('cliente_id', $clientId)->with(['stands.category','payment.PaymentStatus'])
        ->orderBy('id', 'desc')
        ->get();

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
        if (!$request->idCliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        $findCliente = Cliente::with(['reservation' => function ($query) {
            $query->where('enable', true); 
        }])->where('id', $request->idCliente)->first();

        if (isset($findCliente) && isset($findCliente->Reservation[count($findCliente->Reservation) -1]) && $findCliente->Reservation[count($findCliente->Reservation) - 1]->enable == 1) {

            return response()->json(['message' => 'Ya tienes una reservación activa'], 409);
        }
        $stands = $request->stands;

        if (count($stands)>=5) {
            return response()->json(['message' => 'Puedes reservar 5 locales como máximo'], 409);
        }



        DB::beginTransaction();
        try {
            $total = 0;
            foreach ($stands as $stand) {
                // Buscar si el stand ya tiene una reserva activa
                
                $standToReserve = Stand::lockForUpdate()->find($stand["id"]);

                // Buscar si el stand ya tiene una reserva activa
                $standWithActiveReservation = Stand::whereHas('reservations', function ($query) {
                    $query->where('enable', true);
                })->where('id', $standToReserve->id)->first();
        
                // Si el stand ya tiene una reserva activa, retornar un error
                if ($standWithActiveReservation) {
                    return response()->json(['message' => 'El stand ' . $standToReserve->name . ' ya tiene una reserva activa'], 409);
                }
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

            return response()->json(['message' => 'Reservación creada satisfactoriamente'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Error al crear la reservación'.$e], 500);
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
    public function destroy(Request $request)
    {
        //
        
        $reservation = Reservation::find($request->id);
        // return response()->json(['message' => $reservation]);
        if ($reservation) {
            
            $reservation->enable = false;
            $reservation->save();
            return response()->json(['message' => 'Reservación eliminada satisfactoriamente']);

        }
        return response()->json(['error' => 'Reservación no encontrada'], 404);


    }
}
