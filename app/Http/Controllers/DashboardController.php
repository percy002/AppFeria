<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth; // Agrega esta línea
use Inertia\Inertia; 
use Illuminate\Http\Request;
use App\Models\Cliente; 
class DashboardController extends Controller
{
    public function index()
    {
        $userRoles = Auth::user()->roles->pluck('name')->toArray();

        $clientes = [];

        // Verificar si el usuario tiene el rol "cliente"
        if (!in_array('cliente', $userRoles)) {
            // Obtener todos los clientes si el usuario no tiene el rol "cliente"
            $clientes = Cliente::all();
        }

        return Inertia::render('Dashboard', ['userRoles' => $userRoles,'clientes' => $clientes]);
    }
}
