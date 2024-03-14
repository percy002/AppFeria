<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\User; 
use App\Models\Cliente; 

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        // $uuser = User::find($request->user()->id);

 
        if ($request->user()) {
            # code...
            $user = User::with('client')->find($request->user()->id);
        }

        // dd($user->client);
        // $cliente = $user->client;

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'cliente' => $user->client ?? ''
            ],
            'reservedStands' => function () {
                // Aquí puedes retornar los datos que deseas compartir.
                return [];
            },
        ];
    }
}
