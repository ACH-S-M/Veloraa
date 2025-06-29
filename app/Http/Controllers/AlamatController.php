<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Pelanggan;

class AlamatController extends Controller
{
    function Index(){
        return Inertia::render('settings/AlamatPelanggan');
    }

    public function update(Request $request)
    {
        $request->validate([
            'alamat' => 'required|string|max:255',
            'kota' => 'required|string|max:100',
            'kode_pos' => 'required|string|max:10',
        ]);

        $user = Auth::user();

        // Update or create pelanggan record
        Pelanggan::updateOrCreate(
            ['id' => $user->id],
            [
                'alamat' => $request->alamat,
                'kota' => $request->kota,
                'kode_pos' => $request->kode_pos,
            ]
        );

        return back()->with('success', 'Address updated successfully!');
    }
}
