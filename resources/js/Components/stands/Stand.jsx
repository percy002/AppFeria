import { usePage } from "@inertiajs/react";
import { Button } from "flowbite-react";
import { useState } from "react";
// import StandsContext from "./StandsContext";
import StandsContext from "@/Contexts/StandContext";
import { useContext } from "react";
import { useEffect } from "react";
export default function Stand({ numero, stand, color, borderColor, small }) {
    const [colorButton, setcolorButton] = useState(color);
    const [stateReservado, setStateReservado] = useState(false);
    const [stateSelected, setStateSelected] = useState(false);

    const { reservedStands, setReservedStands } = useContext(StandsContext);

    useEffect(() => {
        const reservado = reservedStands.find((s) => s.id === stand.id);
        if (reservado) {
            setStateSelected(true);
            setcolorButton("failure");
        } else {
            setStateSelected(false);
            setcolorButton(color);
        }
    }, [reservedStands]);

    const handleClick = () => {
        if (!stateSelected) {
            const reservedStand = {
                id: stand.id,
                category: stand.category_id,
                name: stand.name,
                block: stand.block,
                price: stand.price,
                seleccionado: true,
            };
            setReservedStands((prevStands) => [...prevStands, reservedStand]);
            setcolorButton("failure");
        }
    };
    return (
        <div className={`w-12 ${small && "w-full"}`}>
            {stand && (
                <Button
                    className={`rounded-none w-full border-2 ${
                        borderColor || "border-gray-500"
                    }
                    ${small && "button_padding_cero"}
                    ${colorButton || "bg-black"}
                    text-black
                    `}
                    onClick={handleClick}
                >
                    {numero}
                    {/* {reservedStands[reservedStands.length - 1]} */}
                </Button>
            )}
        </div>
    );
}
