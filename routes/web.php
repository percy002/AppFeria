<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StandController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', function () {
    return Inertia::render('Auth/Login');
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['prefix' => 'cliente'], function () {
    Route::get('/', function () {
        return Inertia::render('Client/ClientLogin');
    })->name('client.login');

    Route::post('login', function () {
        // Lógica para manejar el inicio de sesión del cliente
    });

    Route::get('registro', function () {
        return Inertia::render('Client/ClientRegister');
    })->name('client.register');

    Route::post('registro', [ClienteController::class, 'store']);

    Route::put('/{cliente}/aprobar', [ClienteController::class, 'aprobar'])->name('clientes.aprobar');
    
    Route::put('/{cliente}/evaluar', [ClienteController::class, 'evaluar'])->name('clientes.evaluar');
});

Route::group(['prefix' => 'stands'], function(){
    Route::get('getStands', [StandController::class, 'allStands'])->name('stands.all');
});

Route::group(['prefix' => 'reservaciones'], function(){
    Route::get('/reservar/{clienteId}', [StandController::class, 'create'])->name('reservaciones.crear');
});


require __DIR__.'/auth.php';
