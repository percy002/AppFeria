<?php

namespace App\Http\Controllers;
use App\Models\Payment;
use App\Models\Reservation;
use App\Models\PaymentStatus;
use Illuminate\Support\Facades\DB;

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
            'mensaje' => "pagado con éxito"
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
    public function update(Request $request)
    {
        try{
            DB::beginTransaction();
                if ($request->hasFile('file')) {
                    $file = $request->file('file');
                    $path = $file->store('uploads', 'public');    
                }
                
                $reservationId = $request->input('reservationId');        
                $reservation = Reservation::with('payment')->find($reservationId);
                $payment = Payment::find($reservation->payment->id);
        
                if (!$payment) {
                    return response()->json(['message' => 'Pago no encontrado'], 404);
                }
        
                $payment->file = $request->file('file')->store('uploads', 'public');
        
                $payment->save();
                
                //crear un nuevo estado de pago
                $paymentStatus = new PaymentStatus;
                $paymentStatus->payment_id = $payment->id;
                $paymentStatus->status = "corregido";
                $paymentStatus->date = now();

                $paymentStatus->user_id = auth()->user()->id;    
                $paymentStatus->save();
            DB::commit();


                return response()->json(['message' => 'Pago actualizado con éxito','file' => $payment->file], 200);

            
        }catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['error' => 'Hubo un error al actualizar el pago y el estado del pago: ' . $e->getMessage()], 500);
        }

    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function validar(Request $request){
        // return response()->json(['message' => ['payment' => $request->input('payment_id')]], 200);

        $validatedData = $request->validate([
            'payment_id' => 'required|integer|exists:payments,id',
        ]);
    
        // Crea un nuevo PaymentStatus
        $paymentStatus = new PaymentStatus;
        $paymentStatus->payment_id = $validatedData['payment_id'];
        $paymentStatus->user_id = auth()->user()->id;
        $paymentStatus->date = now();
        $paymentStatus->status = "aceptado";


    
        if ($paymentStatus->save()) {
            return response()->json(['message' => 'aceptado'], 200);
        } else {
            return response()->json(['error' => 'Error al crear el estado del pago'], 500);
        }
    }

    public function observar(Request $request){
        $validatedData = $request->validate([
            'payment_id' => 'required|integer|exists:payments,id',
            'observaciones' => 'required',
            // 'detalleObservaciones' => 'string'
        ]);
    
        // return response()->json(['m' => $request])
        // Crea un nuevo PaymentStatus
        $paymentStatus = new PaymentStatus;
        $paymentStatus->payment_id = $validatedData['payment_id'];
        $paymentStatus->observations = $validatedData['observaciones'];
        $paymentStatus->observations_detail = $request->input('detalleObservaciones');
        $paymentStatus->status = "observado";
        $paymentStatus->date = now();
        $paymentStatus->user_id = auth()->user()->id;
    
        if ($paymentStatus->save()) {
            return response()->json(['message' => 'Estado del pago observado creado con éxito'], 200);
        } else {
            return response()->json(['error' => 'Error al crear el estado observado del pago'], 500);
        }
    }
}
