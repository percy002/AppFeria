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

            $stands = Stand::where('category_id',$user->client->category_id)->with(['reservations','category'])
            ->get();

            $standsBloques = $this->getStandsGobiernosLocales($stands,$user->client->category_id);

        }        
        // dd($standsBloques);
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
            $blocks[] = 'b';
            $blocks[] = 'e';
            $blocks[] = 'f';
            $blocks[] = 'g';
            $blocks[] = 'h';

        }
        if($category_id == 4){
            $blocks[] = 'CR';
            $blocks[] = 'CV';       

        }
        if($category_id == 5){
            $letters = range('a', 'r');
            for ($i = 0; $i < count($letters); $i ++) {
                if ($letters[$i] != "kk") {
                    $blocks[] = $letters[$i] . $letters[$i];
                }
            }             

        }
        if($category_id == 6){
            $blocks[] = 'A';       
            $blocks[] = 'B';       
            $blocks[] = 'C';       

        }
        if($category_id == 7){
            $blocks[] = 'A';       
            $blocks[] = 'B';       

        }
        if($category_id == 8){

            $blocks[] = 'a';   
            $blocks[] = 'c';   

        }
        if($category_id == 9){

            $blocks[] = 'A';   
            $blocks[] = 'B';   

        }

        foreach ($blocks as $block) {
            $standsBloques[$block] = $stands->where('block', $block)->values()->all();
        }
        return $standsBloques;
    }
}
