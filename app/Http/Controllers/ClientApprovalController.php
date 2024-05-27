<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\ClientApproval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class ClientApprovalController extends Controller
{
    //
    public function approveClient(Request $request, $clientId)
    {
        $client = Cliente::findOrFail($clientId);
        $status = $request->input('status');
        $remarks = $request->input('remarks', '');

        // dd($status, $remarks, $client);
        // Create a new approval record
        $approval = new ClientApproval();
        $approval->client_id = $client->id;
        $approval->user_id = Auth::id();
        $approval->status = $status;
        $approval->remarks = $remarks;
        $approval->approved_at = now();
        $approval->save();

        // Update client status
        $client->status = $status;
        $client->save();

        return response()->json(['message' => 'Estado del cliente actualizado con éxito']);
    }
}
