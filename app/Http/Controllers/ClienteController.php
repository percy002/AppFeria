<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente; 

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
    // Asignar otros campos según sea necesario
    $cliente->save();

    // Redirigir o devolver una respuesta según sea necesario
    return redirect()->route('/');
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
}
