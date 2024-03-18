import { usePage } from "@inertiajs/react";
import { Button } from "flowbite-react";
import { useState } from "react";
// import StandsContext from "./StandsContext";
import StandsContext from "@/Contexts/StandContext";
import { useContext } from "react";
import { useEffect } from "react";

const ButtonCustom = {
    color: {}
}
export default function Stand({ numero, stand, color, small }) {
    const [colorStand, setColorStand] = useState("white");
    const [colorBorder, setColorBorder] = useState(color);
    const [stateReservado, setStateReservado] = useState(false);
    const [stateSelected, setStateSelected] = useState(false);

    const { reservedStands, setReservedStands } = useContext(StandsContext);

    useEffect(() => {
        const reservado = reservedStands.find((s) => s.id === stand.id);
        if (reservado) {
            setStateSelected(true);
        } else { 
            !stateReservado && setColorStand("white");
            setStateSelected(false);
        }
        console.log(stand.reservations);
    }, [reservedStands]);

    useEffect(() => {
        if (stand.reservations.length > 0) {
            setStateReservado(true);
            setColorBorder("gray");
            setColorStand("gray");
        }
    }, [stateReservado]);

    const handleClick = () => {
        if (!stateSelected && !stateReservado) {
            const reservedStand = {
                id: stand.id,
                category: stand.category_id,
                name: stand.name,
                block: stand.block,
                price: stand.price,
                seleccionado: true,
            };
            setReservedStands((prevStands) => [...prevStands, reservedStand]);
            setColorStand(color);
        }
    };
    const handleMouseEnter = () => {
        if (!stateSelected && !stateReservado) {
            setColorStand(color);
        }
        
    };

    const handleMouseLeave = () => {
        if (!stateSelected && !stateReservado) {
            setColorStand("white");
        }
        
    }
    return (
        <div className={`w-12 ${small && "w-full"}`}>
            {stand && (
                <Button
                    className={`rounded-none w-full border-2
                    border-${colorBorder}-600
                    ${small && "button_padding_cero"}
                    text-black
                    font-bold text-xl
                    bg-${colorStand}-600
                    hover:bg-${colorStand}-600
                    ${stateReservado && "text-gray-200"}
                    `}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    disabled={stateReservado}
                    color=""
                >
                    {numero}
                </Button>
            )}
        </div>
    );
}
