<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProdukModel as Produk;

class pencarianController extends Controller
{

    public function index(Request $request)
    {
        $query = (string) $request->get('q', '');

    
        $results = [];
        if ($query !== '') {
            $results = Produk::where('nama_produk', 'like', "%{$query}%")
                ->orWhere('deskripsi_produk', 'like', "%{$query}%")
                ->limit(50)
                ->get();
        }

        return Inertia::render('Search/Index', [
            'query' => $query,
            'results' => $results,
        ]);
    }
}


