import { usePage } from "@inertiajs/react";
import { Button } from "flowbite-react";
import { useState } from "react";
// import StandsContext from "./StandsContext";
import StandsContext from "@/Contexts/StandContext";
import { useContext } from "react";
export default function Stand({numero,stand}) {
    // const {props} = usePage();

    const { reservedStands, setReservedStands } = useContext(StandsContext);


    const handleClick = () => {
        setReservedStands(prevStands => [...prevStands, numero]);
    }
    return (
        <div>
            <Button
                color="warning"
                className={"rounded-none border-2 border-gray-500"}
                onClick={handleClick}
            >
                {numero}
                {/* {reservedStands[reservedStands.length - 1]} */}
            </Button>
        </div>
    );
}
