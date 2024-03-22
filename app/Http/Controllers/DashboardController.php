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

            $stands = Stand::where('category_id',$user->client->category_id)->with('reservations')
            ->get();

            $standsBloques = $this->getStandsGobiernosLocales($stands,$user->client->category_id);

        }        
        return Inertia::render('Dashboard', ['userRoles' => $userRoles,'clientes' => $clientes,'standsBloques' => $standsBloques,
    ]);
    }

    private function getStandsGobiernosLocales($stands,$category_id){
        $standsBloques = [];
        $blocks=[];
        if($category_id == 1){
            $blocks = range('A', 'U');
        }
        if($category_id == 2){
            $blocks = range('A', 'F');
        }
        if($category_id == 3){
            $blocks = range('W', 'Z');
            $blocks[] = 'a';
            $blocks[] = 'e';
            $blocks[] = 'f';
            $blocks[] = 'g';
            $blocks[] = 'h';

        }
        if($category_id == 4){
            $blocks[] = 'b';
            $blocks[] = 'd';
            $blocks[] = 'CR';
            $blocks[] = 'CV';
        

        }
        foreach ($blocks as $block) {
            $standsBloques[$block] = $stands->where('block', $block)->values()->all();
        }
        return $standsBloques;
    }
}
