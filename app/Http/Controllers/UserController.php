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
            'dni' => 'required|string|max:8|unique:users',
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:9',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|max:255',
            'rol' => 'required|string'
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

        if ($user->save()) {
            # code...
            return response()->json(["message"=> "usuario registrado correctamente","user" => $user]);
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
