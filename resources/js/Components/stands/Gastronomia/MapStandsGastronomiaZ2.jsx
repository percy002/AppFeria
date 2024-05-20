import GroupStands from "../GroupStands";
import { usePage } from "@inertiajs/react";
export const MapStandsGastronomiaZ2 = () => {
    const { props } = usePage();
    const { standsBloques } = props;
    const standsBloqueCR = standsBloques["CR"];
    
    let standsBloqueB = [];
    for (let i = 1; i <= 25; i++) {
        standsBloqueB.push({
            id: 611 + i,
            name: "b-" + i,
            block: "b",
            category_id: 8,
            subcategory_id: null,
            reservations: [],
            category: {
                id: 4,
                name: "Procompite"
            },
        });
    }
    console.log(standsBloqueB);
    return (
        <div className="p-2 mx-auto w-fit h-[480px]">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col w-fit">
                    {/* BLOQUE B */}
                    <div className="flex">
                        <div className="mx-1">
                            <p className=" text-center w-fit font-bold text-base border-4 border-red-600 rounded-full px-2">
                                b
                            </p>
                        </div>
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
                    <div className="flex justify-end">
                        <div className="bg-green-200 flex-grow flex justify-center items-center">
                            <p className="font-bold text-2xl">
                                PATIO DE COMIDAS
                            </p>
                        </div>
                        
                        <GroupStands
                            color={"red"}
                            inicio={21}
                            cantidad={5}
                            stands={standsBloqueB.slice(20, 25)}
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
                        <div className="border-t-2 border-gray-500 relative">
                            <div className="absolute left-16">
                                <p className=" text-center w-fit font-bold text-base border-4 border-green-600 rounded-full px-2">
                                    CR
                                </p>
                            </div>
                            <div className="mt-12">
                                <GroupStands
                                    color={"green"}
                                    inicio={7}
                                    cantidad={32}
                                    stands={standsBloqueCR.slice(6, 38)}
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
