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
        $this->createMultipleStands(14,1,'I',110);
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
        $this->createMultipleStands(15,3,'X',75);
        $this->createMultipleStands(17,3,'Y',75);
        $this->createMultipleStands(13,3,'W',75);

        //CREAR STANDS DE ARTESANIA
        $this->createMultipleStands(16,3,'Z',75);

        //CREAR STANDS DE ZONA DE MYPES MISCELANEAS
        $this->createMultipleStands(35,3,'a',75);
        $this->createMultipleStands(10,3,'e',75);
        $this->createMultipleStands(14,3,'f',75);
        $this->createMultipleStands(14,3,'g',75);
        $this->createMultipleStands(13,3,'h',75);

        //CREAR STANDS DE ZONA DE GASTRONOMIA
        $this->createMultipleStands(32,4,'CV',15);
        $this->createMultipleStands(20,4,'b',15);
        $this->createMultipleStands(25,4,'d',15);
        $this->createMultipleStands(38,4,'CR',15);

        //CREAR STANDS DE GOBIERNO REGIONAL
        $this->createMultipleStands(7,5,'aa',7);
        $this->createMultipleStands(7,5,'bb',7);
        $this->createMultipleStands(7,5,'cc',7);
        $this->createMultipleStands(14,5,'dd',7);
        $this->createMultipleStands(7,5,'ee',7);
        $this->createMultipleStands(7,5,'ff',7);
        $this->createMultipleStands(7,5,'gg',7);
        $this->createMultipleStands(7,5,'hh',7);
        $this->createMultipleStands(6,5,'ii',7);
        $this->createMultipleStands(6,5,'jj',7);
        $this->createMultipleStands(6,5,'ll',7);
        $this->createMultipleStands(6,5,'mm',7);
        $this->createMultipleStands(6,5,'nn',7);
        $this->createMultipleStands(12,5,'oo',7);

        //CREAR STANDS CATEGORIA OTROS
        $this->createMultipleStands(12,6,'A',13);
        $this->createMultipleStands(12,6,'B',13);




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
