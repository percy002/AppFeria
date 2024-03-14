import { Table, Button, Card } from "flowbite-react";
import Stand from "../Stand";
import ColumnaStands from "../ColumnaStands";
import StandsContext from "@/Contexts/StandContext";
import { useState } from "react";
import ReservedStands from "../ReservedStands";
import VacunosBlock from "./VacunosBlock";

function MapStandsAnimals() {
    const [reservedStands, setReservedStands] = useState([]);

    console.log(reservedStands);
    return (
        <StandsContext.Provider value={{ reservedStands, setReservedStands }}>
            <div className="flex flex-col lg:flex-row">
                <div className="overflow-x-scroll lg:w-10/12">
                    <div className="p-2 mx-auto w-[1000px] h-[450px]">
                        {/* BLOQUE ANIMALES */}
                        <div className="grid grid-cols-6 h-full">
                            {/* BLOQUE VACUNOS */}
                            <VacunosBlock/>

                            {/* SEGUNDO  */}
                            <div className="col-span-2 h-full flex flex-col justify-around">
                                <div className="">
                                    <p className="font-bold text-xl text-center">
                                        CAMELIDOS
                                    </p>
                                    <div className="flex items-center">
                                        <p className="font-bold text-xl px-1">
                                            B
                                        </p>
                                        <Button.Group>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                6
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                5
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                4
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                1
                                            </Button>
                                        </Button.Group>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="font-bold text-xl text-center">
                                        OVINOS
                                    </p>
                                    <div className="flex items-center">
                                        <p className="font-bold text-xl px-1">
                                            C
                                        </p>
                                        <Button.Group>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                6
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                5
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                4
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                1
                                            </Button>
                                        </Button.Group>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="font-bold text-xl text-center">
                                        VACUNOS
                                    </p>
                                    <div className="flex items-center">
                                        <p className="font-bold text-xl px-1">
                                            D
                                        </p>
                                        <Button.Group>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                6
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                5
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                4
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500"
                                            >
                                                1
                                            </Button>
                                        </Button.Group>
                                    </div>
                                </div>
                            </div>

                            {/* TERCER BLOQUE*/}
                            <div className="col-span-3">
                                <div className="flex flex-col justify-between h-full">
                                    {/* BLOQUE STANDS PEQUEÑOS */}
                                    <div className="flex">
                                        <p className="font-bold text-xl mx-2">F</p>
                                        <Button.Group className="flex">
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                1
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                4
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                5
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                6
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                7
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                8
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                9
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                10
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                11
                                            </Button>
                                            <Button
                                                color="warning"
                                                className="rounded-none border-2 border-gray-500 button_padding_cero"
                                            >
                                                12
                                            </Button>
                                        </Button.Group>
                                    </div>
                                    {/* BLOQUE ZONA DE ANIMALES */}
                                    <div className="flex flex-col">
                                        
                                        <div className="flex justify-between">
                                            <div className="">
                                                <Button.Group className="flex flex-col">
                                                    <Stand numero="1" />
                                                    <Stand numero="2" />
                                                    <Stand numero="3" />
                                                    <Stand numero="4" />
                                                    <Stand numero="5" />
                                                    <Stand numero="6" />
                                                    <Stand numero="7" />
                                                    <Stand numero="8" />
                                                </Button.Group>
                                            </div>
                                            <div className="">
                                                <ColumnaStands
                                                    cantidad={8}
                                                    inicio={9}
                                                />
                                            </div>
                                            <div className="">
                                                <ColumnaStands
                                                    cantidad={8}
                                                    inicio={16}
                                                />
                                            </div>

                                            <div className="">
                                                <ColumnaStands
                                                    cantidad={8}
                                                    inicio={25}
                                                />
                                            </div>
                                            <div
                                                className="text-center"
                                                style={{
                                                    writingMode: "vertical-rl",
                                                    // textOrientation: "upright",
                                                }}
                                            >
                                                <p className="font-bold text-xl">
                                                    ZONA DE ANIMALES
                                                </p>
                                            </div>
                                            <div className="">
                                                <ColumnaStands
                                                    cantidad={8}
                                                    inicio={33}
                                                />
                                            </div>
                                            <div className="">
                                                <ColumnaStands
                                                    cantidad={8}
                                                    inicio={41}
                                                />
                                            </div>
                                            <div className="">
                                                <ColumnaStands
                                                    cantidad={8}
                                                    inicio={49}
                                                />
                                            </div>
                                        </div>

                                        <p className="font-bold text-xl text-center">
                                            E
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/12 bg-gray-300 xl:h-[70vh]">
                    <div className="flex flex-col overflow-y-scroll h-full justify-between">
                        <h3 className="text-center text-xl font-bold">
                            Reservas
                        </h3>
                        <ReservedStands stands={reservedStands} />

                        {reservedStands.length > 0 && (
                            <div className="flex justify-between p-4">
                                <div className="">
                                    <p>Cantidad: {reservedStands.length} </p>
                                </div>
                                <div className="">
                                    <p>Total: {reservedStands.length * 100}</p>
                                </div>
                            </div>
                        )}
                        {reservedStands.length > 0 && (
                            <div className="flex justify-center">
                                <Button
                                    color="success"
                                    className="text-xl font-bold"
                                >
                                    <span className="text-xl font-bold">
                                        Reservar
                                    </span>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </StandsContext.Provider>
    );
}
export default MapStandsAnimals;
