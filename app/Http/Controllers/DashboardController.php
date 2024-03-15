<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth; // Agrega esta línea
use Inertia\Inertia; 
use Illuminate\Http\Request;
use App\Models\Cliente; 
use App\Models\Stand; 
class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        $userRoles = $user->roles->pluck('name')->toArray();

        $clientes = [];

        // Verificar si el usuario tiene el rol "cliente"
        if (!in_array('client', $userRoles)) {
            // Obtener todos los clientes si el usuario no tiene el rol "cliente"
            $clientes = Cliente::with('category')->get();
        }
        $standsBloques = [];
        if (in_array('client', $userRoles)) {

            $stands = Stand::where('category_id',$user->client->category_id)->get();
            $standsBloqueA = $stands->where('block','A')->values()->all();
            $standsBloqueB = $stands->where('block','B')->values()->all();
            $standsBloqueC = $stands->where('block','C')->values()->all();
            $standsBloqueD = $stands->where('block','D')->values()->all();
            $standsBloqueE = $stands->where('block','E')->values()->all();
            $standsBloqueF = $stands->where('block','F')->values()->all();
            // dd($standsBloqueA);
            $standsBloques = [
                'A' => $standsBloqueA,
                'B' => $standsBloqueB,
                'C' => $standsBloqueC,
                'D' => $standsBloqueD,
                'E' => $standsBloqueE,
                'F' => $standsBloqueF,
            ];
        }        
        return Inertia::render('Dashboard', ['userRoles' => $userRoles,'clientes' => $clientes,'standsBloques' => $standsBloques,
    ]);
    }
}
