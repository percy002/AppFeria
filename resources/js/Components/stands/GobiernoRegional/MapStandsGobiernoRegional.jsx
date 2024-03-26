import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import { Button } from "flowbite-react";

export const MapStandsGobiernoRegional = () => {
    const { props } = usePage();
    const { standsBloques } = props;
    const standsBloqueAA = standsBloques["aa"];
    const standsBloqueBB = standsBloques["bb"];
    const standsBloqueCC = standsBloques["cc"];
    const standsBloqueDD = standsBloques["dd"];
    const standsBloqueEE = standsBloques["ee"];
    const standsBloqueFF = standsBloques["ff"];
    const standsBloqueGG = standsBloques["gg"];
    const standsBloqueHH = standsBloques["hh"];
    const standsBloqueII = standsBloques["ii"];
    const standsBloqueJJ = standsBloques["jj"];
    const standsBloqueLL = standsBloques["ll"];
    const standsBloqueMM = standsBloques["mm"];
    const standsBloqueNN = standsBloques["nn"];
    const standsBloqueOO = standsBloques["oo"];

    return (
        <div className="h-[480px] w-[1000px]">
            <div className="flex flex-col gap-14">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <p className="font-bold text-xl">GORE CUSCO</p>
                    </div>
                    <div className="flex gap-10">
                        {/* BLOQUE A - D */}
                        <div className="flex flex-col gap-10 mt-10">
                            {/* BLOQUE A */}
                            <div className="flex">
                                <div className="flex justify-center mx-2">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-red-600 rounded-full px-2">
                                        A
                                    </p>
                                </div>
                                <GroupStands
                                    color={"red"}
                                    inicio={1}
                                    cantidad={7}
                                    stands={standsBloqueAA}
                                    size={"wide"}
                                />
                            </div>
                            {/* BLOQUE B */}
                            <div className="flex">
                                <div className="flex justify-center mx-2">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-red-600 rounded-full px-2">
                                        B
                                    </p>
                                </div>
                                <GroupStands
                                    color={"red"}
                                    inicio={1}
                                    cantidad={7}
                                    stands={standsBloqueBB}
                                    size={"wide"}
                                />
                            </div>
                            {/* BLOQUE C */}
                            <div className="flex">
                                <div className="flex justify-center mx-2">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-red-600 rounded-full px-2">
                                        C
                                    </p>
                                </div>
                                <GroupStands
                                    color={"red"}
                                    inicio={1}
                                    cantidad={7}
                                    stands={standsBloqueCC}
                                    size={"wide"}
                                />
                            </div>
                            {/* BLOQUE D */}
                            <div className="flex">
                                <div className="flex items-center mx-2">
                                    <p className=" text-center h-fit font-bold text-base border-4 border-red-600 rounded-full px-2">
                                        D
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <GroupStands
                                        color={"red"}
                                        inicio={1}
                                        cantidad={7}
                                        stands={standsBloqueDD.slice(0, 7)}
                                        size={"wide"}
                                    />
                                    <GroupStands
                                        color={"red"}
                                        inicio={8}
                                        cantidad={7}
                                        stands={standsBloqueDD.slice(7, 14)}
                                        size={"wide"}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* BLOQUE F - H */}
                        <div className="flex gap-4">
                            {/* BLOQUE FF */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-green-600 rounded-full px-2">
                                        ff
                                    </p>
                                </div>
                                <GroupStands
                                    color={"green"}
                                    inicio={1}
                                    cantidad={7}
                                    stands={standsBloqueFF}
                                    direction={"col"}
                                />
                            </div>
                            {/* BLOQUE GG */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-green-600 rounded-full px-2">
                                        gg
                                    </p>
                                </div>
                                <GroupStands
                                    color={"green"}
                                    inicio={1}
                                    cantidad={7}
                                    stands={standsBloqueGG}
                                    direction={"col"}
                                />
                            </div>
                            {/* BLOQUE HH */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-green-600 rounded-full px-2">
                                        hh
                                    </p>
                                </div>
                                <GroupStands
                                    color={"green"}
                                    inicio={1}
                                    cantidad={7}
                                    stands={standsBloqueHH}
                                    direction={"col"}
                                />
                            </div>
                        </div>
                        {/* BLOQUE I - N */}
                        <div className="flex gap-8 mt-8">
                            {/* BLOQUE I */}
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    {Array.from(
                                        { length: 3 },
                                        (_, i) => i * 2
                                    ).map((i) => (
                                        <GroupStands
                                            color={"purple"}
                                            inicio={i + 1}
                                            cantidad={2}
                                            stands={standsBloqueII.slice(
                                                i,
                                                i + 2
                                            )}
                                            size={"very high"}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-purple-600 rounded-full px-2">
                                        ii
                                    </p>
                                </div>
                            </div>
                            {/* BLOQUE J */}
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    {Array.from(
                                        { length: 3 },
                                        (_, i) => i * 2
                                    ).map((i) => (
                                        <GroupStands
                                            color={"purple"}
                                            inicio={i + 1}
                                            cantidad={2}
                                            stands={standsBloqueJJ.slice(
                                                i,
                                                i + 2
                                            )}
                                            size={"very high"}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-purple-600 rounded-full px-2">
                                        jj
                                    </p>
                                </div>
                            </div>
                            {/* BLOQUE L */}
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    {Array.from(
                                        { length: 3 },
                                        (_, i) => i * 2
                                    ).map((i) => (
                                        <GroupStands
                                            color={"purple"}
                                            inicio={i + 1}
                                            cantidad={2}
                                            stands={standsBloqueLL.slice(
                                                i,
                                                i + 2
                                            )}
                                            size={"very high"}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-purple-600 rounded-full px-2">
                                        ll
                                    </p>
                                </div>
                            </div>
                            {/* BLOQUE M */}
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    {Array.from(
                                        { length: 3 },
                                        (_, i) => i * 2
                                    ).map((i) => (
                                        <GroupStands
                                            color={"purple"}
                                            inicio={i + 1}
                                            cantidad={2}
                                            stands={standsBloqueMM.slice(
                                                i,
                                                i + 2
                                            )}
                                            size={"very high"}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-purple-600 rounded-full">
                                        mm
                                    </p>
                                </div>
                            </div>
                            {/* BLOQUE N */}
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    {Array.from(
                                        { length: 3 },
                                        (_, i) => i * 2
                                    ).map((i) => (
                                        <GroupStands
                                            color={"purple"}
                                            inicio={i + 1}
                                            cantidad={2}
                                            stands={standsBloqueNN.slice(
                                                i,
                                                i + 2
                                            )}
                                            size={"very high"}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <p className=" text-center w-fit font-bold text-base border-4 border-purple-600 rounded-full">
                                        nn
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BLOQUE E Y BLOQUE O */}
                <div className="flex mx-2">
                    <div className="flex">
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <p className="text-center font-bold">Salud y Seguridad</p>
                            </div>
                            <Button.Group>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                                <Button color="dark" disabled>
                                    &#9632;
                                </Button>
                            </Button.Group>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-center">
                                <p className=" text-center w-fit font-bold text-base border-4 border-blue-600 rounded-full px-2">
                                    ee
                                </p>
                            </div>
                            <GroupStands
                                color={"blue"}
                                inicio={1}
                                cantidad={7}
                                stands={standsBloqueEE}
                            />
                        </div>
                        <div className="flex flex-col justify-end ">
                            <div className="bg-black w-28 h-8">
                                <p className="text-white text-center">Baño</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-center">
                                <p className=" text-center w-fit font-bold text-base border-4 border-blue-600 rounded-full px-2">
                                    oo
                                </p>
                            </div>
                            <GroupStands
                                color={"blue"}
                                inicio={8}
                                cantidad={5}
                                stands={standsBloqueOO.slice(7, 12)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
