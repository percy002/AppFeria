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
use App\Http\Controllers\ClientApprovalController;
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
    return Inertia::render('Index');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/dashboard/{any?}', [DashboardController::class, 'index'])
->where('any', '.*')    
->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('cliente/registro', function () {
    return Inertia::render('Client/ClientRegister');
})->name('client.register');

Route::post('cliente/registro', [ClienteController::class, 'store'])->name('client.register');

Route::prefix('cliente')->middleware(['auth', 'role:admin'])->group(function () {
    Route::get('clientes', [ClienteController::class,'all'])->name('clientes');    
    
    Route::put('/{cliente}/aprobar', [ClienteController::class, 'aprobar'])->name('clientes.aprobar');
    
    Route::put('/{cliente}/evaluar', [ClientApprovalController::class, 'approveClient'])->name('clientes.evaluar');

    Route::get('registeredClients', [ClienteController::class,'registeredClients'])->name('clientes.registrados');
    Route::get('evaluatedClients', [ClienteController::class,'evaluatedClients'])->name('clientes.evaluados');
    Route::get('approvedClients', [ClienteController::class,'approvedClients'])->name('clientes.aprobados');
});

Route::prefix('stands')->middleware(['auth'])->group(function () {
    Route::get('getStands', [StandController::class, 'allStands'])->name('stands.all');
});

Route::prefix('reservaciones')->middleware(['auth'])->group(function () {
    Route::get('/{id}', [ReservationController::class, 'index'])->name('reservaciones.index');
    Route::post('/reservar', [ReservationController::class, 'store'])->name('reservaciones.crear');
    Route::delete('/eliminar', [ReservationController::class, 'destroy'])->name('reservaciones.eliminar');
});

Route::get('/getCategories', [CategoryController::class, 'getCategories'])->name('categorias.all');
Route::get('/getSubCategories', [CategoryController::class, 'getSubCategories'])->name('categorias.subCategories');


Route::prefix('pagos')->middleware(['auth'])->group(function () {
    Route::post('/pagar',[PaymentController::class, 'store'])->name("pagar");
    Route::post('/update',[PaymentController::class, 'update'])->name("payment.update");
    Route::post('/validar',[PaymentController::class, 'validar'])->name("validarPago");
    Route::post('/observar',[PaymentController::class, 'observar'])->name("observarPago");
    Route::post('/culqui',[PaymentController::class, 'culqui'])->name("culqui");

});

Route::prefix('usuarios')->middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/',[UserController::class, 'listUsers'])->name("users.listUsers");
    Route::post('create',[UserController::class, 'store'])->name("user.create");
    Route::post('update',[UserController::class, 'update'])->name("user.update");

});

Route::middleware('auth')->group(function () {
    Route::post('/clients/{clientId}/approve', [ClientApprovalController::class, 'approveClient']);
    Route::get('invoicePDF', [PdfController::class, 'invoicePDF'])->name('generateInvoicePDF');
    Route::get('fotoCheckPDF/{clientId}', [PdfController::class, 'fotocheckPDF'])->name('generateFotoCheckPDF');
    Route::get('contractPDF/{clientId}', [PdfController::class, 'contractPDF'])->name('generateContractPDF');
});

Route::get('/informacion_general', function () {
    return Inertia::render('InfoGeneral');
});

require __DIR__.'/auth.php';
