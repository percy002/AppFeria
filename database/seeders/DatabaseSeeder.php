<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Cliente;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RolesAndPermissionsSeeder::class);
        $this->createAdmin();
        $this->createCategories();
        $this->call(StandSeeder::class);
        $this->createClientes();
    }

    private function createAdmin()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('12345678'),
        ]);

        $admin->assignRole('admin');
    }
    
    private function createClientes()
    {
        $Cliente = Cliente::create([
            'ruc' => '12345678901',
            'company_name' => 'Mi Empresa',
            'dni' => '12345678',
            'name' => 'Juan',
            'last_name' => 'Perez',
            'position' => 'Gerente',
            'email' => 'juan.perez@miempresa.com',
            'approved' => false,
            'evaluated' => false,
            'category_id' => 1, // Asegúrate de que esta categoría exista en tu tabla de categorías
        ]);

        $user1 = User::create([
            'name' => 'Mi Empresa',
            'email' => 'juan.perez@miempresa.com',
            'cliente_id' => $Cliente->id,
            'password' => bcrypt('12345678'),
        ]);

        $user1->assignRole('client');

        $cliente2 = Cliente::create([
            'ruc' => '98765432109',
            'company_name' => 'Otra Empresa',
            'dni' => '87654321',
            'name' => 'Maria',
            'last_name' => 'Lopez',
            'position' => 'Gerente',
            'email' => 'maria.lopez@otraempresa.com',
            'approved' => false,
            'evaluated' => false,
            'category_id' => 2, // Make sure this category exists in your categories table
        ]);

        $user2 = User::create([
            'name' => 'Otra Empresa',
            'email' => 'maria.lopez@otraempresa.com',
            'cliente_id' => $cliente2->id,
            'password' => bcrypt('12345678'),
        ]);

        $user2->assignRole('client');
    }

    
    private function createCategories()
    {
        $categories = [
            ['name' => 'Gobiernos Locales'],
            ['name' => 'Ganaderia'],
            ['name' => 'Mypes o Artesania'],
            ['name' => 'Gastronomia'],
            ['name' => 'Agricultura'],
            ['name' => 'Textil'],
            ['name' => 'Apicultura'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
    
}
