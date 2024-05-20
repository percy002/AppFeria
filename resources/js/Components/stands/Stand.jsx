import { usePage } from "@inertiajs/react";
import { Button } from "flowbite-react";
import StandsContext from "@/Contexts/StandContext";
import { useContext, useEffect, useState } from "react";
const ButtonCustom = {
    color: {}
}
export default function Stand({ numero, stand, color, size }) {
    const [colorStand, setColorStand] = useState("white");
    const [colorBorder, setColorBorder] = useState(color);
    const [stateReservado, setStateReservado] = useState(false);
    const [stateSelected, setStateSelected] = useState(false);
    const { auth } = usePage().props;

    

    const { reservedStands, setReservedStands } = useContext(StandsContext);
    useEffect(() => {
        const reservado = reservedStands.find((s) => s.id === stand.id);
        if (reservado) {
            setStateSelected(true);
        } else { 
            !stateReservado && setColorStand("white");
            setStateSelected(false);
        }
    }, [reservedStands]);
    useEffect(() => {
        if (stand.reservations && stand.reservations.length > 0) {
            const enable = stand.reservations.find((reservation) => reservation.enable);
            if (enable) {
                setStateReservado(true);
                setColorBorder("gray");
                setColorStand("gray");
                
            }
        }
        let subcategory = auth.cliente?.subcategory_id;
        let category = auth.cliente?.category_id;
        
        let standEnableSubcategory =  subcategory && subcategory == stand.subcategory_id;
        let standEnableCategory = category && category == stand.category_id;

        console.log(auth.cliente?.category_id);
        if (!standEnableSubcategory && !standEnableCategory) {
            setStateReservado(true);
            // setColorBorder(color);
            // setColorStand(color);
            setColorBorder("gray");
            setColorStand("gray");            
        }

    }, [stateReservado]);

    const handleClick = () => {
        if (stateSelected || stateReservado) {
            setColorStand("white");
            setReservedStands((prevStands) =>
                prevStands.filter((s) => s.id !== stand.id)
            );
            setStateSelected(false);
        }
        if (!stateSelected && !stateReservado) {
            const reservedStand = {
                id: stand.id,
                category: stand.category.name,
                name: stand.name,
                block: stand.block,
                price: stand.price,
                seleccionado: true,
                color
            };
            setColorStand(color);
            setReservedStands((prevStands) => [...prevStands, reservedStand]);
            setStateSelected(true);

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
        <div className={`w-12 ${size !== "" && "w-full"}`}>
            {stand && (
                <Button
                    className={`rounded-none w-full border-2
                    border-${colorBorder}-600
                    ${size == "small" && "button_padding_cero"}                    
                    ${size == "high" && "button_high_padding"}
                    ${size == "wide" && "button_wide_padding"}
                    ${size == "very high" && "button_very_high_padding"}
                    text-black
                    font-bold text-xl
                    bg-${colorStand}-600
                    hover:bg-${colorStand}-600
                    ${stateReservado && "text-gray-200"}
                    p-0
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
