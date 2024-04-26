<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente; 
use App\Models\User; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia; 



class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      // Validar los datos del formulario
      
      $validatedData = $request->validate([
        'dni' => 'required|string|max:8|unique:clientes',
        'name' => 'required|string|max:255',
        'last_name' => 'required|string|max:255',
        'phone_number' => 'required|string|max:9',
        'email' => 'required|string|email|max:255|unique:clientes',
        'password' => 'required|string|max:255',
        'category_id' => 'required|exists:categories,id',
        // Agrega más reglas de validación según tus necesidades
    ]);

    // if ($request->selectedType == "personaNatural") {
    //     $validatedData = $request->validate([
    //         'ruc' => 'max:11|unique:clientes',
    //         'company_name' => 'string|max:255',
    //         'dni' => 'required|string|max:8|unique:clientes',
    //         'name' => 'required|string|max:255',
    //         'last_name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:clientes',
    //         'password' => 'required|string|max:255'
    //     ]);
    //   }
    // dd($validatedData);

    // Crear un nuevo cliente
    $cliente = Cliente::create([
        'ruc' => $request->ruc,
        'company_name' => $request->company_name,
        'dni' => $validatedData['dni'],
        'name' => $validatedData['name'],
        'last_name' => $validatedData['last_name'],
        'position' => $request->position,
        'phone_number' => $validatedData['phone_number'],
        'email' => $validatedData['email'],
        'category_id' => $validatedData['category_id'],
    ]);
    
    $cliente->save();

    $user = User::create([
        'name' => $validatedData['name'],
        'last_name' => $validatedData['last_name'],
        'dni' => $validatedData['dni'],
        'phone_number' => $validatedData['phone_number'],
        'email' => $validatedData['email'],
        'password' => Hash::make($validatedData['password']),
        'cliente_id' => $cliente->id
    ]);

    $user->assignRole('client');

    event(new Registered($user));

    // Auth::login($user);

    // return redirect(RouteServiceProvider::HOME);

    // Redirigir o devolver una respuesta según sea necesario
    // return redirect()->route('login');
    return response()->json(['message' => 'Registro exitoso']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function edit(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cliente $cliente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cliente $cliente)
    {
        //
    }

    public function aprobar($id)
    {
        $cliente = Cliente::find($id);
        // Alternar el estado de aprobación del cliente
        $cliente->update(['approved' => !$cliente->approved]);

        $clientes = Cliente::all();
        return response()->json(['approved' => $cliente->approved]);
    }

    public function evaluar($id)
    {
        $cliente = Cliente::find($id);
        // Alternar el estado de aprobación del cliente
        $cliente->update(['evaluated' => !$cliente->evaluated]);

        $clientes = Cliente::all();
        return response()->json(['approved' => $cliente->evaluated]);
    }

    public function all(){
        $clientes = Cliente::with('category')->get();

        $clientesPagos = Cliente::with(['category','reservation.payment.PaymentStatus','reservation.stands'])->where('approved', 1)->whereHas('reservation.payment')->get();

        // dd($clientesPagos);
        return Inertia::render('Clients', ['clientes' => $clientes,'clientesPagos' => $clientesPagos]);
    }

    public function evaluatedClients(){
        $clientes = Cliente::with('category')->get();

        $evaluatedClients = Cliente::with(['category'])->where('evaluated', 1)->where('approved',0)->get();

        // dd($evaluatedClient);
        // return response()->json(['evaluatedClients' => ["nada"]]);

        
        return response()->json(['evaluatedClients' => $evaluatedClients]);
    }
    public function registeredClients(){
        $clientes = Cliente::with('category')->get();

        $registeredClients = Cliente::with(['category'])->where('evaluated', 0)->where('approved',0)->get();

        // dd($evaluatedClient);
        // return response()->json(['registeredClients' => ["nada"]]);

        
        return response()->json(['registeredClients' => $registeredClients]);
    }
    public function approvedClients(){
        $clientes = Cliente::with('category')->get();

        $approvedClients = Cliente::with(['category'])->where('evaluated', 1)->where('approved',1)->get();

        // dd($evaluatedClient);
        // return response()->json(['approvedClients' => ["nada"]]);

        
        return response()->json(['approvedClients' => $approvedClients]);
    }
}
