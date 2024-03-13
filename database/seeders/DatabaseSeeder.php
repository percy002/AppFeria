<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
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
        $this->createClientes();
        $this->createCategories();
        $this->call(StandSeeder::class);
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
        // Crear 5 clientes
        // factory(User::class, 5)->create()->each(function ($user) {
        //     $user->assignRole('cliente');
        // });
    }

    
    private function createCategories()
    {
        $categories = [
            ['name' => 'Municipios'],
            ['name' => 'Gastronomia'],
            ['name' => 'Ganaderia'],
            ['name' => 'Textil'],
            ['name' => 'Agro'],
            ['name' => 'Apicultura'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
    
}
