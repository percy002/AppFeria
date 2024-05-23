<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Cliente;
use App\Models\Category;
use App\Models\Subcategory;

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
        $this->createSubCategories();
        $this->call(StandSeeder::class);
        $this->createClientes();
        $this->createUsers('percy','percy@gmail.com','11522252','151515155');
        $this->createUsers('elvis','elvis@gmail.com','1233333','151515151');
    }

    private function createAdmin()
    {
        $admin = User::create([
            'name' => 'Admin',
            'last_name' => 'admin',
            'dni' => '11111111',
            'phone_number' => '123456789',
            'email' => 'admin@example.com',
            'password' => bcrypt('12345678'),
        ]);

        $admin->assignRole('admin');
    }

    private function createUsers($name, $email, $dni, $phoneNumber){
        $user = User::create([
            'name' => $name,
            'last_name' => 'admin',
            'dni' => $dni,
            'phone_number' => $phoneNumber,
            'email' => $email,
            'password' => bcrypt('12345678'),
        ]);
        $user->assignRole('user');        
    }
    
    private function createClientes()
    {
        $Cliente = Cliente::create([
            'ruc' => '12345678901',
            'company_name' => 'Mi Empresa S.A.C',
            'trade_name' => 'Mi Empresa',
            'address' => 'Av. Los Incas 123',
            'dni' => '12345678',
            'name' => 'Juan',
            'last_name' => 'Perez',
            'position' => 'Gerente',
            'phone_number' => '958565897',
            'email' => 'juan.perez@miempresa.com',
            'approved' => false,
            'evaluated' => false,
            'category_id' => 1,
            'subcategory_id' => 8,
        ]);

        $user1 = User::create([
            'name' => 'Mi Empresa',
            'last_name' => 'admin',
            'dni' => '11111113',
            'phone_number' => '123456786',
            'email' => 'juan.perez@miempresa.com',
            'cliente_id' => $Cliente->id,
            'password' => bcrypt('12345678'),
        ]);

        $user1->assignRole('client');

        $cliente2 = Cliente::create([
            'ruc' => '98765432109',
            'company_name' => 'Otra Empresa',
            'trade_name' => 'Mi Empresa',
            'address' => 'Av. Los Incas 123',
            'dni' => '87654321',
            'name' => 'Maria',
            'last_name' => 'Lopez',
            'position' => 'Gerente',
            'phone_number' => '958565894',
            'email' => 'maria.lopez@otraempresa.com',
            'approved' => false,
            'evaluated' => false,
            'category_id' => 1, // Make sure this category exists in your categories table
            'subcategory_id' => 8,

        ]);

        $user2 = User::create([
            'name' => 'Otra Empresa',
            'last_name' => 'admin',
            'dni' => '11111114',
            'phone_number' => '123456783',
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
            ['name' => 'Mypes'],
            ['name' => 'Gastronomia'],
            ['name' => 'Gobierno Regional'],
            ['name' => 'Empresas'],
            ['name' => 'GERCETUR'],
            ['name' => 'Procompite'],
            ['name' => 'Otros'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }

    private function createSubCategories(){
        $subcategories = [
            ['name' => 'Acomayo', 'category_id' => 1],
            ['name' => 'Anta', 'category_id' => 1],
            ['name' => 'Cusco', 'category_id' => 1],
            ['name' => 'Canchis', 'category_id' => 1],
            ['name' => 'Chumbivilcas', 'category_id' => 1],
            ['name' => 'Canas', 'category_id' => 1],
            ['name' => 'La Convencion', 'category_id' => 1],
            ['name' => 'Calca', 'category_id' => 1],
            ['name' => 'Urubamba', 'category_id' => 1],
            ['name' => 'Quispicanchis', 'category_id' => 1],
            ['name' => 'Paucartambo', 'category_id' => 1],
            ['name' => 'Paruro', 'category_id' => 1],
            ['name' => 'Espinar', 'category_id' => 1],
            //GOBIERNO REGIONAL
            ['name' => 'COPESCO', 'category_id' => 5],
            ['name' => 'MERIS', 'category_id' => 5],
            ['name' => 'IMA', 'category_id' => 5],
            ['name' => 'TRANSPORTES', 'category_id' => 5],
            ['name' => 'RECURSOS NATURALES', 'category_id' => 5],
            ['name' => 'DESARROLLO SOCIAL', 'category_id' => 5],
            ['name' => 'PROYECTOS', 'category_id' => 5],
            ['name' => 'INFRAESTRUCTURA', 'category_id' => 5],
            ['name' => 'TRABAJO', 'category_id' => 5],
            ['name' => 'VIVIENDA Y CONSTRUCCION', 'category_id' => 5],
            ['name' => 'GERCETUR', 'category_id' => 5],
            ['name' => 'GERAGRI', 'category_id' => 5],
            ['name' => 'ECONOMICO', 'category_id' => 5],
            ['name' => 'PRODUCCION', 'category_id' => 5],
            ['name' => 'EDUCACION', 'category_id' => 5],
            ['name' => 'SEGURIDAD', 'category_id' => 5],
            ['name' => 'SALUD', 'category_id' => 5],
        ];

        foreach ($subcategories as $subcategory) {
            Subcategory::create($subcategory);
        }
    }
    
}
