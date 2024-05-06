<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
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
        $validatedData = $request->validate([
            'dni' => 'required|string|size:8|unique:users',
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:9',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|max:255',
            'rol' => 'required|string'
        ], [
            'dni.required' => 'El DNI es requerido',
            'dni.string' => 'El DNI debe ser una cadena de texto',
            'dni.size' => 'El campo DNI debe tener 8 dígitos.',
            'dni.unique' => 'El DNI ya está en uso',
            'name.required' => 'El nombre es requerido',
            'name.string' => 'El nombre debe ser una cadena de texto',
            'name.max' => 'El nombre no debe tener más de 255 caracteres',
            'last_name.required' => 'El apellido es requerido',
            'last_name.string' => 'El apellido debe ser una cadena de texto',
            'last_name.max' => 'El apellido no debe tener más de 255 caracteres',
            'phone_number.required' => 'El número de celular es requerido',
            'phone_number.string' => 'El número de celular debe ser una cadena de texto',
            'phone_number.max' => 'El número de celular no debe tener más de 9 caracteres',
            'email.required' => 'El correo electrónico es requerido',
            'email.string' => 'El correo electrónico debe ser una cadena de texto',
            'email.email' => 'El correo electrónico debe ser una dirección de correo electrónico válida',
            'email.max' => 'El correo electrónico no debe tener más de 255 caracteres',
            'email.unique' => 'El correo electrónico ya está en uso',
            'password.required' => 'La contraseña es requerida',
            'password.string' => 'La contraseña debe ser una cadena de texto',
            'password.max' => 'La contraseña no debe tener más de 255 caracteres',
            'rol.required' => 'El rol es requerido',
            'rol.string' => 'El rol debe ser una cadena de texto',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'last_name' => $validatedData['last_name'],
            'dni' => $validatedData['dni'],
            'phone_number' => $validatedData['phone_number'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);
    
        $user->assignRole($request['rol']);

        $user->save();
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
        //
        $validatedData = $request->validate([
            'dni' => 'required|string|max:8',
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:9',
            'email' => 'required|string|email|max:255',
            'rol' => 'required|string'
        ]);

        $user = User::findOrFail($request->input('userId'));

        $user->update([
            'name' => $validatedData['name'],
            'last_name' => $validatedData['last_name'],
            'dni' => $validatedData['dni'],
            'phone_number' => $validatedData['phone_number'],
            'email' => $validatedData['email'],
            'password' => $request->input('password'),
        ]);
        
        if ($request->filled('password')) {
            $user->password = Hash::make($validatedData['password']);
        }
    
        $user->syncRoles($request['rol']);

        if ($user->save()) {
            return response()->json(["message"=> "usuario actualizado correctamente","user" => $user]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function listUsers(){
        $currentUserId = auth()->user()->id;

        $users = User::where('cliente_id', null)->where('id', '!=', $currentUserId)->get();
        foreach ($users as $user) {
            $user->rol = $user->getRoleNames()->first(); // Retorna una colección
        }
        return response()->json(['users' => $users],200);
    }
}
