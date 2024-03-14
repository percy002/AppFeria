import { Table, Button, Card } from "flowbite-react";
import { HiTrash, HiShoppingCart } from "react-icons/hi";

export default function ReservedStands({ stands }) {
    console.log(stands);
    const handleDelete = (index) => {
        console.log(index);
    };
    return (
        <div className="flex flex-col">
            {stands.length > 0 &&
                stands.map((stand, index) => (
                    <Card className="m-1 card_padding" key={index}>
                        <div className="p-1" key={index}>
                            <div className="flex justify-between">
                                <p>Stand : {stand}</p>

                                <p>Bloque : E </p>
                            </div>
                                <p>Precio : S/. 100 </p>
                            <p>Categoria : Animales</p>
                            <Button
                                onClick={() => handleDelete(index)}
                                color="failure"
                                className="button_padding_cero"
                            >
                                <HiTrash className="text-white h-5 w-5" />
                                <span className="text-base font-bold">
                                    Cancelar
                                </span>
                            </Button>
                        </div>
                    </Card>
                ))}
        </div>
    );
}
