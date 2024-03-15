<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Stand;

class StandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // CREAR STANDS DE ZONA DE ANIMALES
        $this->createMultipleStands(12,2,'A',100);
        $this->createMultipleStands(6,2,'B',100);
        $this->createMultipleStands(6,2,'C',100);
        $this->createMultipleStands(12,2,'D',100);
        $this->createMultipleStands(56,2,'E',50);
        $this->createMultipleStands(11,2,'F',50);
    }

    private function createStand($name,$category,$block,$price)
    {
        $stand = Stand::create([
            'name' => $name,
            'category_id' => $category,
            'block' => $block,
            'price' => $price,
        ]);

    }

    private function createMultipleStands($number,$category,$block,$price){
        for ($i=1; $i <= $number; $i++) { 
            $name = $block.'-'.$i;
            $this->createStand($name,$category,$block,$price);
        }
    }
}
