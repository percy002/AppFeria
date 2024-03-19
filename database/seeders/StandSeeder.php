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

        //CREAR STANDS DE ZONA DE GOBIERNOS LOCALES
        $this->createMultipleStands(15,1,'A',110);
        $this->createMultipleStands(13,1,'B',110);
        $this->createMultipleStands(13,1,'C',110);
        $this->createMultipleStands(13,1,'D',110);
        $this->createMultipleStands(13,1,'E',110);
        $this->createMultipleStands(13,1,'F',110);
        $this->createMultipleStands(13,1,'G',110);
        $this->createMultipleStands(13,1,'H',110);
        $this->createMultipleStands(15,1,'I',110);
        $this->createMultipleStands(15,1,'J',110);
        $this->createMultipleStands(15,1,'K',110);
        $this->createMultipleStands(15,1,'L',110);
        $this->createMultipleStands(15,1,'M',110);
        $this->createMultipleStands(15,1,'N',110);
        $this->createMultipleStands(15,1,'O',110);
        $this->createMultipleStands(15,1,'P',110);
        $this->createMultipleStands(15,1,'Q',110);
        $this->createMultipleStands(15,1,'R',110);
        $this->createMultipleStands(15,1,'S',110);
        $this->createMultipleStands(15,1,'T',110);
        $this->createMultipleStands(15,1,'U',110);

        //CREAR STANDS DE ZONA DE MYPES
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
