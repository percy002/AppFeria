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
        // $this->createMultipleStands(13,1,'C',110);
        // $this->createMultipleStands(2,1,'C',8000);
        
        // $this->createStand('Nombre del local','categoría','Bloque','precio','sub categoría');
        $this->createStandsGobiernosLocalesBloque1('C',8);
        $this->createStandsGobiernosLocalesBloque1('D',7);
        $this->createStandsGobiernosLocalesBloque1('E',6);
        $this->createStandsGobiernosLocalesBloque1('F',5);
        $this->createStandsGobiernosLocalesBloque1('G',4);
        $this->createStandsGobiernosLocalesBloque1('H',1);
        $this->createStandsGobiernosLocalesBloque1('I',2);
        $this->createStand('I-14',1,'I',800,2);

        // $this->createStand('C-1',1,'C',800,8);
        // $this->createStand('C-2',1,'C',800,8);
        // $this->createStand('C-3',1,'C',600,8);
        // $this->createStand('C-4',1,'C',600,8);
        // $this->createStand('C-5',1,'C',600,8);
        // $this->createStand('C-6',1,'C',600,8);
        // $this->createStand('C-7',1,'C',800,8);
        // $this->createStand('C-8',1,'C',800,8);
        // $this->createStand('C-9',1,'C',800,8);
        // $this->createStand('C-10',1,'C',600,8);
        // $this->createStand('C-11',1,'C',600,8);
        // $this->createStand('C-12',1,'C',800,8);
        // $this->createStand('C-13',1,'C',800,8);

        // $this->createMultipleStands(13,1,'D',110);
        // $this->createMultipleStands(13,1,'E',110);
        // $this->createMultipleStands(13,1,'F',110);
        // $this->createMultipleStands(13,1,'G',110);
        // $this->createMultipleStands(13,1,'H',110);
        // $this->createMultipleStands(14,1,'I',110);
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
        $this->createMultipleStands(13,6,'A',50);
        $this->createMultipleStands(13,6,'B',50);
    }

    private function createStand($name,$category,$block,$price, $subcategory = null)
    {
        $stand = Stand::create([
            'name' => $name,
            'category_id' => $category,
            'subcategory_id' =>  $subcategory,
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

    private function createStandsGobiernosLocalesBloque1($block,$provincia){
        $this->createStand($block.'-1',1,$block,800,$provincia);
        $this->createStand($block.'-2',1,$block,800,$provincia);
        $this->createStand($block.'-3',1,$block,600,$provincia);
        $this->createStand($block.'-4',1,$block,600,$provincia);
        $this->createStand($block.'-5',1,$block,600,$provincia);
        $this->createStand($block.'-6',1,$block,600,$provincia);
        $this->createStand($block.'-7',1,$block,800,$provincia);
        $this->createStand($block.'-8',1,$block,800,$provincia);
        $this->createStand($block.'-9',1,$block,800,$provincia);
        $this->createStand($block.'-10',1,$block,600,$provincia);
        $this->createStand($block.'-11',1,$block,600,$provincia);
        $this->createStand($block.'-12',1,$block,800,$provincia);
        $this->createStand($block.'-13',1,$block,800,$provincia);
        
    }
}
