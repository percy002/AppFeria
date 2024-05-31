import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import Stand from "../Stand";
import MypesGroupStandDouble from "./MypesGroupStandDouble";
const MapStandsMypesZonaInf = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueB = standsBloques["b"];
    const standsBloqueE = standsBloques["e"];
    const standsBloqueF = standsBloques["f"];
    const standsBloqueG = standsBloques["g"];
    const standsBloqueH = standsBloques["h"];

    const standsBloqueA = Array.from({ length: 15 }, (_, i) => ({
        id: 2000 + i,
        name: "a-" + i,
        block: "a",
        category_id: 8,
        subcategory_id: null,
        reservations: [],
        category: {
            id: 8,
            name: "procompite",
        },
    }));

    return (
        <div className="">
            <div className="p-4">
                <div className="flex gap-x-16 xl:h-[65vh]">
                    <div className="flex h-fit">
                        <div className="flex justify-center mt-1 items-center mx-1">
                            <p className=" text-center w-fit font-bold text-xl border-4 border-red-600 rounded-full px-2 h-fit text-red-600">
                                a
                            </p>
                        </div>
                        <div className="flex items-center mt-[1.3rem]">
                            <Stand
                                color={"red"}
                                stand={standsBloqueA[0]}
                                numero={1}
                                size={"high"}
                            />
                            <Stand
                                color={"red"}
                                stand={standsBloqueA[1]}
                                numero={2}
                                size={"high"}
                            />
                            <Stand
                                color={"red"}
                                stand={standsBloqueA[2]}
                                numero={3}
                                size={"high"}
                            />
                        </div>
                        <MypesGroupStandDouble
                            color={"red"}
                            stands={standsBloqueB}
                        />
                    </div>
                    {/* BLOQUE E - F - G*/}
                    <div className="flex gap-10">
                        {/* BLOQUE E */}
                        <div className="flex flex-col">
                            <div className="">
                                <GroupStands
                                    color={"blue"}
                                    inicio={1}
                                    cantidad={2}
                                    stands={standsBloqueE.slice(0, 2)}
                                    size={"high"}
                                />
                            </div>
                            <div className="text-7xl ">
                                <p className="text-center">X</p>
                            </div>

                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index}>
                                    <GroupStands
                                        color={"blue"}
                                        inicio={index * 2 + 3}
                                        cantidad={2}
                                        stands={standsBloqueE.slice(
                                            index * 2 + 2,
                                            index * 2 + 4
                                        )}
                                        size={"high"}
                                    />
                                </div>
                            ))}

                            <div className="flex justify-center mt-1">
                                <p className=" text-center w-fit font-bold text-xl border-4 border-blue-600 rounded-full px-2 h-fit text-blue-600">
                                    e
                                </p>
                            </div>
                        </div>
                        {/* BLOQUE F */}
                        <div className="flex flex-col">
                            <div className="">
                                <GroupStands
                                    color={"pink"}
                                    inicio={12}
                                    cantidad={2}
                                    stands={standsBloqueF.slice(11, 13)}
                                    size={"high"}
                                />
                            </div>
                            <Stand
                                color={"pink"}
                                stand={standsBloqueF[10]}
                                size={"wide"}
                                numero={11}
                            />

                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index}>
                                    <GroupStands
                                        color={"pink"}
                                        inicio={9 - index * 2}
                                        cantidad={2}
                                        stands={standsBloqueF.slice(
                                            8 - index * 2,
                                            10 - index * 2
                                        )}
                                        size={"high"}
                                    />
                                </div>
                            ))}
                            <div className="">
                                <GroupStands
                                    color={"pink"}
                                    inicio={1}
                                    cantidad={2}
                                    stands={standsBloqueF.slice(0, 2)}
                                    size={"high"}
                                />
                            </div>
                            <div className="flex justify-center mt-1">
                                <p className=" text-center w-fit font-bold text-xl border-4 border-pink-600 rounded-full px-2 h-fit text-pink-600">
                                    f
                                </p>
                            </div>
                        </div>
                        {/* BLOQUE G */}
                        <div className="flex flex-col">
                            <div className="">
                                <GroupStands
                                    color={"green"}
                                    inicio={12}
                                    cantidad={2}
                                    stands={standsBloqueG.slice(11, 13)}
                                    size={"high"}
                                />
                            </div>
                            <Stand
                                color={"green"}
                                stand={standsBloqueG[10]}
                                size={"wide"}
                                numero={11}
                            />

                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index}>
                                    <GroupStands
                                        color={"green"}
                                        inicio={9 - index * 2}
                                        cantidad={2}
                                        stands={standsBloqueG.slice(
                                            8 - index * 2,
                                            10 - index * 2
                                        )}
                                        size={"high"}
                                    />
                                </div>
                            ))}
                            <div className="">
                                <GroupStands
                                    color={"green"}
                                    inicio={1}
                                    cantidad={2}
                                    stands={standsBloqueG.slice(0, 2)}
                                    size={"high"}
                                />
                            </div>
                            <div className="flex justify-center mt-1">
                                <p className=" text-center w-fit font-bold text-xl border-4 border-green-600 rounded-full px-2 h-fit text-green-600">
                                    g
                                </p>
                            </div>
                        </div>

                        {/* BLOQUE H */}
                        <div className="flex flex-col">
                            <GroupStands
                                color={"purple"}
                                inicio={13}
                                cantidad={13}
                                stands={standsBloqueH}
                                direction={"col"}
                                orden={"desc"}
                                size={"wide"}
                            />
                            <div className="flex justify-center mt-1">
                                <p className=" text-center w-fit font-bold text-xl border-4 border-purple-600 rounded-full px-2 h-fit text-purple-600">
                                    h
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MapStandsMypesZonaInf;
