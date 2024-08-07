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
        $this->createMultipleStands(12,2,'A',800);
        $this->createMultipleStands(6,2,'B',800);
        $this->createMultipleStands(6,2,'C',800);
        $this->createMultipleStands(12,2,'D',800);
        $this->createMultipleStands(56,2,'E',800);
        $this->createMultipleStands(11,2,'F',800);

        //CREAR STANAS PARA LAS EMPRESAS CONSTRUCTORAS Y ESPONSORS 
        $this->createMultipleStands(15,6,'A',2000);
        $this->createMultipleStands(13,6,'B',2000);
        $this->createMultipleStands(13,6,'C',2000);
        
        //CREAR STANDS DE ZONA DE GOBIERNOS LOCALES
        // $this->createStand('Nombre del local','categoría','Bloque','precio','sub categoría');
        $this->createStandsGobiernosLocalesBloque1('D',1);//ACOMAYO
        $this->createStandsGobiernosLocalesBloque1('E',2);//ANTA
        $this->createStandsGobiernosLocalesBloque1('F',3);//CUSCO
        $this->createStandsGobiernosLocalesBloque1('G',4);//CANCHIS
        $this->createStandsGobiernosLocalesBloque1('H',5);//CHUMBIVILCAS
        $this->createStandsGobiernosLocalesBloque1('I',6);//CANAS
        $this->createStand('I-4',1,'I',800,6);//CANAS

        //BLOQUE 2 GOBIERNOS GLOBALES
        $this->createStandsGobiernosLocalesBloque2('J',7);//LA CONVENCION
        $this->createStandsGobiernosLocalesBloque2('K',7);//LA CONVENCION
        $this->createStandsGobiernosLocalesBloque2('L',7);//LA CONVENCION
        $this->createStandsGobiernosLocalesBloque2('M',7);//LA CONVENCION
        $this->createStandsGobiernosLocalesBloque2('N',7);//LA CONVENCION
        $this->createStandsGobiernosLocalesBloque2('O',8);//CALCA
        $this->createStandsGobiernosLocalesBloque2('P',9);//URUBAMBA
        $this->createStandsGobiernosLocalesBloque2('Q',10);//QUISPICANCHIS
        $this->createStandsGobiernosLocalesBloque2('R',11);//PAUCARTAMBO
        $this->createStandsGobiernosLocalesBloque2('S',12);//PARURO
        $this->createStandsGobiernosLocalesBloque2('T',13);//ESPINAR
        // $this->createStandsGobiernosLocalesBloque2('U',14);//REGIONES INVITADAS
        
        //REGIONES INVITADAS
        for ($i=0; $i < 20; $i++) { 
            $this->createStand('U-'.$i ,9,'U',2000);
            
        }

        //GERCETUR
        $this->createMultipleStands(13,7,'A',800);
        $this->createMultipleStands(13,7,'B',800);

        //MYPES
        $this->createMultipleStands(15,3,'X',800);
        $this->createMultipleStands(13,3,'W',800);
        $this->createMultipleStands(17,3,'Y',800);
        $this->createMultipleStands(16,3,'Z',800);

        //CREAR STANDS DE ZONA DE MYPES MISCELANEAS
        $this->createMultipleStands(3,3,'8',800);
        $this->createMultipleStands(32,3,'b',800);
        $this->createMultipleStands(10,3,'e',800);
        $this->createMultipleStands(13,3,'f',800);
        $this->createMultipleStands(13,3,'g',800);
        $this->createMultipleStands(13,3,'h',800);
        
        //PROCOMPITE
        $this->createMultipleStands(3,8,'a',800);
        $this->createMultipleStands(25,8,'c',800);

        //CREAR STANDS DE ZONA DE GASTRONOMIA
        $this->createMultipleStands(32,4,'CV',3000);
        $this->createMultipleStands(38,4,'CR',2000);

        //CREAR STANDS DE GOBIERNO REGIONAL
        $this->createMultipleStands(7,5,'aa',1000,14);//COPESCO
        $this->createMultipleStands(7,5,'bb',1000,15);//MERISS
        $this->createMultipleStands(7,5,'cc',1000,16);//IMA
        $this->createMultipleStands(7,5,'dd',1000,17);//TRANSPORTES
        $this->createMultipleStands(7,5,'ee',1000,18);//RECURSOS NATURALES
        $this->createMultipleStands(7,5,'ff',1000,19);//GRGII
        $this->createMultipleStands(3,5,'gg',1000,21);//MINAS
        $this->createMultipleStands(4,5,'gg',1000,20);//SGPI 
        $this->createMultipleStands(7,5,'hh',1000,22);//GERAGRI

        $this->createStand('ii-1',5,'ii',1000,22);//GERAGRI
        $this->createStand('ii-3',5,'ii',1000,22);//GERAGRI
        $this->createStand('ii-5',5,'ii',1000,22);//GERAGRI
        $this->createStand('ii-2',5,'ii',1000,23);//GERAGRI
        $this->createStand('ii-4',5,'ii',1000,23);//GERAGRI
        $this->createStand('ii-6',5,'ii',1000,23);//GERAGRI
        // $this->createMultipleStands(3,5,'ii',1000,23);//VIVIENDA Y CONSTRUCCION
        $this->createMultipleStands(6,5,'jj',1000,24);//DESARROLLO SOCIAL
        $this->createMultipleStands(6,5,'ll',1000,25);//PRODUCCION
        $this->createMultipleStands(6,5,'mm',1000,25);//PRODUCCION
        $this->createMultipleStands(6,5,'nn',1000,26);//DESARROLLO ECONOMICO
        $this->createMultipleStands(5,5,'oo',1000,27);//TRABAJO
        $this->createMultipleStands(7,5,'pp',1000,28);//EDUCACION
        $this->createMultipleStands(3,5,'qq',1000,29);//SEGURIDAD
        $this->createMultipleStands(3,5,'rr',1000,30);//SALUD

        //CREAR STANDS CATEGORIA OTROS
        
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

    private function createMultipleStands($number,$category,$block,$price, $subcategory = null){
        for ($i=1; $i <= $number; $i++) { 
            $name = $block.'-'.$i;
            $this->createStand($name,$category,$block,$price,$subcategory);
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
    private function createStandsGobiernosLocalesBloque2($block,$provincia){
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
        $this->createStand($block.'-12',1,$block,600,$provincia);
        $this->createStand($block.'-13',1,$block,600,$provincia);
        $this->createStand($block.'-14',1,$block,800,$provincia);
        $this->createStand($block.'-15',1,$block,800,$provincia);
        
    }
}
