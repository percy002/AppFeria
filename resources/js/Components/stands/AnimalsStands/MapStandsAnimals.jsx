import GroupStands from "../GroupStands";
import StandsContext from "@/Contexts/StandContext";
import { useState, useRef, useEffect } from "react";
import ReservedStands from "../ReservedStands";
import VacunosBlock from "./VacunosBlock";
import { usePage } from "@inertiajs/react";
import AnimalsBlock from "./AnimalsBlock";
function MapStandsAnimals() {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueB = standsBloques["B"];
    const standsBloqueC = standsBloques["C"];
    const standsBloqueD = standsBloques["D"];
    const standsBloqueE = standsBloques["E"];
    const standsBloqueF = standsBloques["F"];

    return (
        <div className="p-2 mx-auto w-[1100px] h-[480px]">
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
                            <p className="text-center font-bold text-xl border-4 border-red-600 rounded-full px-2 h-fit w-fit">
                                B
                            </p>

                            <GroupStands
                                cantidad={6}
                                inicio={1}
                                stands={standsBloqueB}
                                color={"red"}
                            />
                        </div>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl text-center">OVINOS</p>
                        <div className="flex items-center gap-1">
                            <p className="text-center font-bold text-xl border-4 border-purple-600 rounded-full px-2 h-fit w-fit">
                                C
                            </p>
                            <GroupStands
                                cantidad={6}
                                inicio={1}
                                stands={standsBloqueC}
                                color={"purple"}
                            />
                        </div>
                    </div>
                    {/* BLOQUE VACUNOS */}
                    <div className="">
                        <div className="flex items-center gap-1">
                            <p className="text-center font-bold text-xl border-4 border-green-600 rounded-full px-2 h-fit w-fit">
                                D
                            </p>
                            <div className="flex flex-col">
                                <GroupStands
                                    cantidad={6}
                                    inicio={1}
                                    stands={standsBloqueD.slice(0, 6)}
                                    color={"green"}
                                />
                                <p className="font-bold text-xl text-center">
                                    VACUNOS
                                </p>
                                <GroupStands
                                    cantidad={6}
                                    inicio={7}
                                    stands={standsBloqueD.slice(6, 12)}
                                    color={"green"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* TERCER BLOQUE*/}
                <div className="col-span-3">
                    <div className="flex flex-col justify-between h-full items-center">
                        {/* BLOQUE STANDS PEQUEÑOS */}
                        <div className="flex gap-1 w-full">
                            <p className=" text-center w-fit font-bold text-xl border-4 border-pink-600 rounded-full px-2">
                                F
                            </p>
                            <GroupStands
                                cantidad={11}
                                inicio={1}
                                stands={standsBloqueF}
                                size={"small"}
                                color={"pink"}
                            />
                        </div>
                        {/* BLOQUE ZONA DE ANIMALES */}
                        <AnimalsBlock stands={standsBloqueE} color={"yellow"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MapStandsAnimals;
