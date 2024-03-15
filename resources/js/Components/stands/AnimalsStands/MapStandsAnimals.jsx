import { Table, Button, Card } from "flowbite-react";
import Stand from "../Stand";
import GroupStands from "../GroupStands";
import StandsContext from "@/Contexts/StandContext";
import { useState } from "react";
import ReservedStands from "../ReservedStands";
import VacunosBlock from "./VacunosBlock";
import { usePage } from "@inertiajs/react";
import AnimalsBlock from "./AnimalsBlock";
function MapStandsAnimals() {
    const [reservedStands, setReservedStands] = useState([]);
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueB = standsBloques["B"];
    const standsBloqueC = standsBloques["C"];
    const standsBloqueD = standsBloques["D"];
    const standsBloqueE = standsBloques["E"];
    const standsBloqueF = standsBloques["F"];

    return (
        <StandsContext.Provider value={{ reservedStands, setReservedStands }}>
            <div className="flex flex-col lg:flex-row">
                <div className="overflow-x-scroll lg:w-10/12">
                    <div className="p-2 mx-auto w-[1100px] h-[450px]">
                        {/* BLOQUE ANIMALES */}
                        <div className="grid grid-cols-6 h-full gap-10">
                            {/* BLOQUE VACUNOS */}
                            <VacunosBlock />

                            {/* SEGUNDO BLOQUE */}
                            <div className="col-span-2 h-full flex flex-col justify-around">
                                <div className="">
                                    <p className="font-bold text-xl text-center">
                                        CAMELIDOS
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <p className="text-center font-bold text-xl border-4 border-red-600 rounded-full px-2">
                                            B
                                        </p>

                                        <GroupStands
                                            cantidad={6}
                                            inicio={1}
                                            stands={standsBloqueB}
                                            color={"bg-orange-500"}
                                            borderColor={"border-red-600"}
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <p className="font-bold text-xl text-center">
                                        OVINOS
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <p className="text-center font-bold text-xl border-4 border-purple-600 rounded-full px-2">
                                            C
                                        </p>
                                        <GroupStands
                                            cantidad={6}
                                            inicio={1}
                                            stands={standsBloqueC}
                                            color={"bg-orange-500"}
                                            borderColor={"border-purple-600"}
                                        />
                                    </div>
                                </div>
                                {/* BLOQUE VACUNOS */}
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <p className="text-center font-bold text-xl border-4 border-green-600 rounded-full px-2">
                                            D
                                        </p>
                                        <div className="flex flex-col">
                                            <GroupStands
                                                cantidad={6}
                                                inicio={1}
                                                stands={standsBloqueD.slice(
                                                    0,
                                                    6
                                                )}
                                                color={"bg-orange-500"}
                                                borderColor={"border-green-600"}
                                            />
                                            <p className="font-bold text-xl text-center">
                                                VACUNOS
                                            </p>
                                            <GroupStands
                                                cantidad={6}
                                                inicio={7}
                                                stands={standsBloqueD.slice(
                                                    6,
                                                    12
                                                )}
                                                color={"bg-orange-500"}
                                                borderColor={"border-green-600"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TERCER BLOQUE*/}
                            <div className="col-span-3">
                                <div className="flex flex-col justify-between h-full items-center">
                                    {/* BLOQUE STANDS PEQUEÑOS */}
                                    <div className="flex gap-1">
                                        <p className="text-center font-bold text-xl border-4 border-yellow-600 rounded-full px-2">
                                            F
                                        </p>
                                        <GroupStands
                                            cantidad={11}
                                            inicio={1}
                                            stands={standsBloqueF}
                                            small
                                            color={"bg-orange-500"}
                                            borderColor={"border-yellow-600"}
                                        />
                                    </div>
                                    {/* BLOQUE ZONA DE ANIMALES */}
                                    <AnimalsBlock
                                        stands={standsBloqueE}
                                        color={"bg-white"}
                                        borderColor={"border-yellow-600"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full lg:w-3/12 bg-gray-300 xl:h-[70vh]">
                    
                    <div className="flex flex-col overflow-y-scroll h-full justify-between">
                        <h3 className="text-center text-xl font-bold">
                            Reservas
                        </h3>
                        <ReservedStands stands={reservedStands} />                        
                    </div>
                </div>
            </div>
        </StandsContext.Provider>
    );
}
export default MapStandsAnimals;
