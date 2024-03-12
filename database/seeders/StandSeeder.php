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
        //
        $this->createMultipleStands(5,'A',100);
        $this->createMultipleStands(10,'B',50);
    }

    private function createStand($name,$block,$price)
    {
        $stand = Stand::create([
            'name' => $name,
            'block' => $block,
            'price' => $price,
        ]);

    }

    private function createMultipleStands($amount,$block,$price){
        for ($i=1; $i <= $amount; $i++) { 
            $name = $block.'-'.$i;
            $this->createStand($name,$block,$price);
        }
    }
}
