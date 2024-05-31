import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import Stand from "../Stand";
import MypesGroupStandDouble from "../Mypes/MypesGroupStandDouble";
import { Tabs } from "flowbite-react";
import MapaPDF from "@/Components/UI/MapaPDF";
const ProcompiteMap = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueA = standsBloques["a"];
    const standsBloqueC = standsBloques["c"];
    const standsBloqueB = Array.from({ length: 32 }, (_, i) => ({
        id: 2000 + i,
        name: "b-" + i,
        block: "b",
        category_id: 3,
        subcategory_id: null,
        reservations: [],
        category: {
            id: 3,
            name: "mypes",
        },
    }));

    return (
        <Tabs>
            <Tabs.Item active title="Mapa de Stands">
                <div className="">
                    <div className="p-4">
                        <div className="flex flex-col gap-16 xl:h-[65vh]">
                            <div className="flex h-fit">
                                <div className="flex justify-center mt-1 items-center mx-1">
                                    <p className=" text-center w-fit font-bold text-xl border-4 border-red-600 rounded-full px-2 h-fit text-red-600">
                                        a
                                    </p>
                                </div>
                                <div className="flex items-center mt-[1.3rem]">
                                    <GroupStands
                                        color={"red"}
                                        inicio={1}
                                        cantidad={3}
                                        stands={standsBloqueA}
                                        size={"high"}
                                    />
                                </div>
                                <MypesGroupStandDouble
                                    color={"red"}
                                    stands={standsBloqueB}
                                />
                            </div>
                            {/*  */}
                            <div className="flex flex-col w-fit">
                                {/* BLOQUE B */}
                                <div className="flex">
                                    <div className="mx-1">
                                        <p className=" text-center w-fit font-bold text-base border-4 border-red-600 rounded-full px-2">
                                            c
                                        </p>
                                    </div>
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <>
                                            <GroupStands
                                                color={"red"}
                                                inicio={i * 2 + 1}
                                                cantidad={2}
                                                stands={standsBloqueC.slice(
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
                                        stands={standsBloqueC.slice(20, 25)}
                                        direction={"col"}
                                        size={"wide"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item active title="Ver Mapa">
                {
                    <MapaPDF/>
                }
            </Tabs.Item>
        </Tabs>
    );
};
export default ProcompiteMap;
