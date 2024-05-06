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
      $clientType = $request->selectedType;
    //   dd($request->selectedType);
      $rules = [
        'dni' => 'required|string|size:8|unique:clientes',
        'name' => 'required|string|max:255',
        'last_name' => 'required|string|max:255',
        'phone_number' => 'required|string|max:9|unique:clientes',
        'email' => 'required|string|email|max:255|unique:clientes',
        'password' => 'required|string|max:255',
        'category_id' => 'required|exists:categories,id',
    ];
    if($clientType == 'personaJuridica'){
        $rules['ruc'] = 'required|string|max:11|unique:clientes';
        $rules['company_name'] = 'required|string|max:255|unique:clientes';
        $rules['position'] = 'required|string|max:255';
    }

    $messages = [
        'dni.required' => 'El campo DNI es obligatorio.',
        'dni.string' => 'El campo DNI debe ser una cadena de texto.',
        'dni.size' => 'El campo DNI debe tener 8 dígitos.',
        'dni.unique' => 'El DNI ingresado ya está registrado.',
        'name.required' => 'El campo nombre es obligatorio.',
        'name.string' => 'El campo nombre debe ser una cadena de texto.',
        'name.max' => 'El campo nombre no debe tener más de 255 caracteres.',
        'last_name.required' => 'El campo apellido es obligatorio.',
        'last_name.string' => 'El campo apellido debe ser una cadena de texto.',
        'last_name.max' => 'El campo apellido no debe tener más de 255 caracteres.',
        'phone_number.required' => 'El campo número de teléfono es obligatorio.',
        'phone_number.string' => 'El campo número de teléfono debe ser una cadena de texto.',
        'phone_number.max' => 'El campo número de teléfono no debe tener más de 9 dígitos.',
        'phone_number.unique' => 'El número ingresado ya está registrado.',
        'email.required' => 'El campo email es obligatorio.',
        'email.string' => 'El campo email debe ser una cadena de texto.',
        'email.email' => 'El campo email debe ser una dirección de correo electrónico válida.',
        'email.max' => 'El campo email no debe tener más de 255 caracteres.',
        'email.unique' => 'El email ingresado ya está registrado.',
        'password.required' => 'El campo contraseña es obligatorio.',
        'password.string' => 'El campo contraseña debe ser una cadena de texto.',
        'password.max' => 'El campo contraseña no debe tener más de 255 caracteres.',
        'category_id.required' => 'El campo categoría es obligatorio.',
        'category_id.exists' => 'La categoría seleccionada no existe.',
    ];
    if($clientType == 'personaJuridica'){
        $messages['ruc.required'] = 'El campo RUC es obligatorio.';
        $messages['ruc.string'] = 'El campo RUC debe ser una cadena de texto.';
        $messages['ruc.max'] = 'El campo RUC no debe tener más de 11 dígitos.';
        $messages['ruc.unique'] = 'El RUC ingresado ya está registrado.';
        $messages['company_name.required'] = 'El campo nombre de la empresa es obligatorio.';
        $messages['company_name.string'] = 'El campo nombre de la empresa debe ser una cadena de texto.';
        $messages['company_name.max'] = 'El campo nombre de la empresa no debe tener más de 255 caracteres.';
        $messages['company_name.unique'] = 'El nombre de la empresa ya está en uso.';
        $messages['position.required'] = 'El campo cargo es obligatorio.';
        $messages['position.string'] = 'El campo cargo debe ser una cadena de texto.';
        $messages['position.max'] = 'El campo cargo no debe tener más de 255 caracteres.';
    }
    $validatedData = $request->validate($rules, $messages);

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
    // return response()->json(['message' => 'Registro exitoso']);
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

        // $clientesPagos = Cliente::with(['category','reservation.payment.PaymentStatus','reservation.stands'])->where('approved', 1)->whereHas('reservation.payment')->get();


        $clientesPagos = Cliente::with(['category','reservation' => function ($query) {
            $query->whereHas('payment');
        },'reservation.payment.PaymentStatus','reservation.stands'])
            ->where('approved', 1)->whereHas('reservation.payment')
            ->get();
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
