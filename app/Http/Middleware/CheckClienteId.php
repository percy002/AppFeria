<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckClienteId
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $user = Auth::user();
            \Log::info('Usuario autenticado', ['user' => $user]);


            // Verifica si la propiedad cliente_id existe y no es null
            if (isset($user->cliente_id)) {
                return $next($request);
            } else {
                // Manejo en caso de que cliente_id no esté definido
                return redirect()->route('login')->with('error', 'Necesitas estar autenticado para acceder a esta página.');
            }
        } else {
            // Redirigir a la página de login si el usuario no está autenticado
            return redirect()->route('login')->with('error', 'Necesitas estar autenticado para acceder a esta página.');
        }    
    }
}
