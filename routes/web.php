<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\UserController;
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
// Route::get('/dashboard', [DashboardController::class, 'index'])
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');

Route::get('/dashboard/{any?}', [DashboardController::class, 'index'])
->where('any', '.*')    
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

    Route::get('clientes', [ClienteController::class,'all'])->name('clientes');
    
    Route::post('registro', [ClienteController::class, 'store'])->name('client.register');
    
    Route::put('/{cliente}/aprobar', [ClienteController::class, 'aprobar'])->name('clientes.aprobar');
    
    Route::put('/{cliente}/evaluar', [ClienteController::class, 'evaluar'])->name('clientes.evaluar');

    Route::get('registeredClients', [ClienteController::class,'registeredClients'])->name('clientes.registrados');
    Route::get('evaluatedClients', [ClienteController::class,'evaluatedClients'])->name('clientes.evaluados');
    Route::get('approvedClients', [ClienteController::class,'approvedClients'])->name('clientes.aprobados');
})->middleware(['auth', 'verified'])
;

Route::group(['prefix' => 'stands'], function(){
    Route::get('getStands', [StandController::class, 'allStands'])->name('stands.all');
})->middleware(['auth', 'verified'])
;

Route::group(['prefix' => 'reservaciones'], function(){
    Route::get('/{id}', [ReservationController::class, 'index'])->name('reservaciones.index');
    Route::post('/reservar', [ReservationController::class, 'store'])->name('reservaciones.crear');
    Route::delete('/eliminar', [ReservationController::class, 'destroy'])->name('reservaciones.eliminar');
})->middleware(['auth', 'verified'])
;

Route::group(['prefix' => 'categorias'], function(){
    Route::get('/getCategories', [CategoryController::class, 'getCategories'])->name('categorias.all');
})->middleware(['auth', 'verified'])
;

Route::group(['prefix' => 'pagos'],function(){
    Route::post('/pagar',[PaymentController::class, 'store'])->name("pagar");
    Route::post('/update',[PaymentController::class, 'update'])->name("payment.update");
    Route::post('/validar',[PaymentController::class, 'validar'])->name("validarPago");
    Route::post('/observar',[PaymentController::class, 'observar'])->name("observarPago");
    Route::post('/culqui',[PaymentController::class, 'culqui'])->name("culqui");

})->middleware(['auth', 'verified']);

Route::get('invoicePDF', [PdfController::class, 'invoicePDF'])->name('generateInvoicePDF');
Route::get('fotoCheckPDF/{clientId}', [PdfController::class, 'fotocheckPDF'])->name('generateFotoCheckPDF');
Route::get('contractPDF/{clientId}', [PdfController::class, 'contractPDF'])->name('generateContractPDF');

Route::group(['prefix' => 'usuarios'],function(){
    Route::get('/',[UserController::class, 'listUsers'])->name("users.listUsers");
    Route::post('create',[UserController::class, 'store'])->name("user.create");
    Route::post('update',[UserController::class, 'update'])->name("user.update");

});

require __DIR__.'/auth.php';
