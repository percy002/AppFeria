<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente; 
use App\Models\User; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;


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
        'numberId' => 'required|string|max:11',
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:clientes',
        'password' => 'required|string|max:255'
        // Agrega más reglas de validación según tus necesidades
    ]);
    // dd(Cliente::all());

    // Crear un nuevo cliente
    $cliente = Cliente::create([
        'numberId' => $validatedData['numberId'],
        'name' => $validatedData['name'],
        'email' => $validatedData['email'],
        'password' => bcrypt($validatedData['password']),
    ]);
    
    $cliente->save();

    $user = User::create([
        'name' => $validatedData['name'],
        'email' => $validatedData['email'],
        'password' => Hash::make($validatedData['password']),
    ]);

    $user->assignRole('client');

    event(new Registered($user));

    // Auth::login($user);

    // return redirect(RouteServiceProvider::HOME);

    // Redirigir o devolver una respuesta según sea necesario
    return redirect()->route('client.login');
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
        dd($cliente);
        // Alternar el estado de aprobación del cliente
        $cliente->update(['approved' => !$cliente->approved]);

        // Devolver el estado actualizado del cliente
        return response()->json(['approved' => $cliente->approved]);
    }
}
