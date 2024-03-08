<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'registrar']);
        Permission::create(['name' => 'editar']);
        Permission::create(['name' => 'eliminar']);
        Permission::create(['name' => 'reservar']);
        Permission::create(['name' => 'comprar']);
        Permission::create(['name' => 'aprovar']);

        // create roles and assign created permissions

        // this can be done as separate statements
        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo(Permission::all());

        // or may be done by chaining
        $role = Role::create(['name' => 'user'])
            ->givePermissionTo(['registrar','aprovar']);

        $role = Role::create(['name' => 'client']);
        $role->givePermissionTo(['reservar','comprar']);
    }
}
