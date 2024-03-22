import GroupStands from "../GroupStands";
import { usePage } from "@inertiajs/react";
export const MapStandsGastronomiaZ2 = () => {
    const { props } = usePage();
    const { standsBloques } = props;
    const standsBloqueCR = standsBloques["CR"];
    const standsBloqueB = standsBloques["b"];
    const standsBloqueD = standsBloques["d"];
    return (
        <div className="p-2 mx-auto w-fit h-[480px]">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col w-fit">
                    {/* BLOQUE B */}
                    <div className="flex">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <>
                                <GroupStands
                                    color={"red"}
                                    inicio={i * 2 + 1}
                                    cantidad={2}
                                    stands={standsBloqueB.slice(
                                        i * 2,
                                        i * 2 + 2
                                    )}
                                    direction={"col"}
                                    size={"wide"}
                                />
                                {i == 6 && (
                                    <div className="flex items-center text-6xl h-full ">
                                        <p>X</p>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                    {/* BLOQUE D */}
                    <div className="flex justify-end">
                        <div className="bg-green-200 flex-grow flex justify-center items-center">
                            <p className="font-bold text-2xl">
                                PATIO DE COMIDAS{" "}
                            </p>
                        </div>
                        <GroupStands
                            color={"purple"}
                            inicio={21}
                            cantidad={5}
                            stands={standsBloqueD.slice(20, 25)}
                            direction={"col"}
                            size={"wide"}
                        />
                        
                    </div>
                </div>
                {/* BLOQUE CR */}
                <div className="flex -mt-16">
                    <div className="border-t-2 border-gray-500">
                        <div className="mt-12">
                            <GroupStands
                                color={"green"}
                                inicio={1}
                                cantidad={6}
                                stands={standsBloqueCR.slice(0, 6)}
                                size={"high"}
                            />
                        </div>
                    </div>
                    <div className="transform  origin-top-left  rotate-12 ml-4 ">
                        <div className="border-t-2 border-gray-500">
                            <div className="mt-12">
                                <GroupStands
                                    color={"green"}
                                    inicio={7}
                                    cantidad={31}
                                    stands={standsBloqueCR.slice(6, 37)}
                                    size={"high"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
