import { Table, Button, Card } from "flowbite-react";
import { HiTrash, HiShoppingCart } from "react-icons/hi";
import StandsContext from "@/Contexts/StandContext";
import { useContext } from "react";
import ModalReserva from "../reservas/ModalReserva";

export default function ReservedStands({ stands }) {
    const { reservedStands, setReservedStands } = useContext(StandsContext);

    const handleDelete = (index) => {
        setReservedStands((prevStands) =>
            prevStands.filter((_, i) => i != index)
        );
    };

    return (
        <div className="flex flex-col w-3/4 lg:w-full mx-auto">
            {stands.length > 0 &&
                stands.map((stand, index) => (
                    <Card className="m-1 card_padding px-8" key={index}>
                        <div className="p-1" key={index}>
                            <div className="flex justify-between">
                                <p>Stand : {stand.name}</p>

                                <p>precio : {stand.price}</p>
                            </div>
                            <p>bloque : {stand.block}</p>
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

            {reservedStands.length > 0 && (
                <div className="flex justify-between p-4">
                    <div className="">
                        <p>Cantidad: {reservedStands.length} </p>
                    </div>
                    <div className="">
                        <p>
                            Total:{" "}
                            {reservedStands.reduce(
                                (sum, stand) => sum + stand.price,
                                0
                            )}
                        </p>
                    </div>
                </div>
            )}
            {reservedStands.length > 0 && (
                <div className="flex justify-center">
                    {/* <Button color="success" className="text-xl font-bold">
                        <span className="text-xl font-bold">Reservar</span>
                    </Button> */}
                    <ModalReserva stands={reservedStands}/>
                </div>
            )}
        </div>
    );
}
