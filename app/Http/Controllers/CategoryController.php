<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category; 
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getCategories(){
        $categorias = Category::all();
        return response()->json(['categorias' => $categorias]);

    }
    public function getSubCategories(Request $request){
        $category = Category::find($request->category_id);

        if ($category === null) {
            return response()->json(['error' => 'No se encontró la categoría','category' => $request->category_id], 404);
        }

        $subcategorias = $category->subcategories;
        return response()->json(['subcategorias' => $subcategorias]);
    }
}
