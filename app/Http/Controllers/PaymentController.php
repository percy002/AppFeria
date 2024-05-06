<?php

namespace App\Http\Controllers;
use App\Models\Payment;
use App\Models\Reservation;
use App\Models\PaymentStatus;
use App\Models\Invoice;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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
        if ($request->hasFile('contractFile')) {
            $file = $request->file('contractFile');
            $pathContractFile = $file->store('contractFiles', 'public');
        }
        
        $stands = $request->input('stands');
        $reservationId = $request->input('reservationId');

        $reservation = Reservation::find($reservationId);
    
        $payment = new Payment;
    
        $payment->date = now();
        $payment->total = $reservation->total;
        $payment->file = $path ?? null;
        $payment->contractFile = $pathContractFile ?? null;
        $payment->reservation_id = $reservationId;
        $payment->payment_method = 'bank_transfer';
    
        if ($payment->save()) {
            return response()->json([
                'mensaje' => "Pago registrado con éxito"
            ]);
        }else{
            return response()->json([
                'mensaje' => "ha ocurrido un error con el pago, inténtelo nuevamente"
            ]);
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

        DB::beginTransaction();
        try{

            $validatedData = $request->validate([
                'payment_id' => 'required|integer|exists:payments,id',
            ]);
        
            // Crea un nuevo PaymentStatus
            $paymentStatus = new PaymentStatus;
            $paymentStatus->payment_id = $validatedData['payment_id'];
            $paymentStatus->user_id = auth()->user()->id;
            $paymentStatus->date = now();
            $paymentStatus->status = "aceptado";
            $paymentStatus->save();

            $payment = Payment::find($validatedData['payment_id']);
            //crea una nueva factura

            $lastInvoiceNumber = Invoice::max('number_invoice');
            
            // Si no hay ninguna boleta registrada, el último número será null
            // En ese caso, comenzamos desde 'INT-0001'
            if ($lastInvoiceNumber === null) {
                $lastInvoiceNumber = 'INT-0000';
            }

            $prefix = 'INT-'; // Prefijo para la boleta
            $newInvoiceNumber = $prefix . sprintf('%04d', substr($lastInvoiceNumber, 4) + 1);

            while (Invoice::where('number_invoice', $newInvoiceNumber)->exists()) {
                $newInvoiceNumber = $prefix . sprintf('%04d', substr($newInvoiceNumber, 4) + 1); // Incrementar el número de boleta hasta que se encuentre uno único
            }


            $invoice = new Invoice;
            $invoice->number_invoice = $newInvoiceNumber;
            $invoice->total = $payment->total;
            $invoice->date = now();
            $invoice->cliente_id = $request->input('client_id');
            $invoice->save();

            DB::commit();        
            return response()->json(['message' => 'aceptado'], 200);
             
        }catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Error al validar el pago: ' . $e->getMessage()], 500);
        }
    }

    public function observar(Request $request){
        $validatedData = $request->validate([
            'payment_id' => 'required|integer|exists:payments,id',
            'observaciones' => 'required',
        ]);
    
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
    public function culqui(Request $request){
        $token = $request->input('token');
        $amount = $request->input('amount');
        $email = $request->input('email');

        $currentUser = auth()->user();
        $currentClient = $currentUser->client;

        $stands = $request->input('stands');
        $reservationId = $request->input('reservationId');

        $reservation = Reservation::with('payment')->find($reservationId);
        // return response()->json(['message' => $reservation->payment, 'token' => $token]);

        if ($reservation &&  !$reservation->payment) {
            try {
                $response = Http::withHeaders([
                    'Authorization' => 'Bearer sk_test_d9f597165cfcd825',
                    'Content-Type' => 'application/json',
                ])->post('https://api.culqi.com/v2/charges', [
                    "amount" => $amount,
                    "currency_code" => "PEN",
                    "email" => $email,
                    "source_id" => $token,
                    "capture" => false,
                    "description" => "Prueba",
                    "installments" => 1,
                    "metadata" => ["dni" => $currentClient->dni],
                    "antifraud_details" => [
                        "first_name" => $currentClient->name,
                        "last_name" => $currentClient->last_name,
                        "phone_number" => $currentClient->phone_number,
                    ],
                ]);
                $body = $response->json();

                $transformBody = json_decode(json_encode($body));

                // var_dump($transformBody);
            
                if ($transformBody->object !== 'error') {
                    if (isset($body->data->message->object)) {
                        $error = $body->data->message->object;
                    } else {
                        $payment = new Payment;
            
                        $payment->date = now();
                        $payment->total = $reservation->total;
                        $payment->reservation_id = $reservationId;
                        $payment->payment_method = 'culqi';
                    
                        if ($payment->save()) {
                            $paymentStatus = new PaymentStatus;
                            $paymentStatus->payment_id = $payment->id;
                            $paymentStatus->status = "aceptado";
                            $paymentStatus->date = now();
            
                            $paymentStatus->user_id = $currentClient->id;    
                            $paymentStatus->save();
            
                        } 
                    }
                    return response()->json(['message' => $body, 'token' => $token]);

                }else{
                    return response()->json(['message' => $body, 'token' => $token , 'tok' => "nada"]);
                }
                // dd($body);
                // return response()->json(['message' => $body, 'token' => $token]);
                
            
                
            } catch (\Throwable $th) {
                return response()->json(['message' => 'Pago ', 'error' => $th->getMessage()], 500);  
            }
        }
    }
}
