import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import Stand from "../Stand";
export const MapStandsMypes = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueX = standsBloques["X"];
    const standsBloqueY = standsBloques["Y"];
    const standsBloqueW = standsBloques["W"];
    const standsBloqueZ = standsBloques["Z"];
    const standsBloqueA = standsBloques["a"];
    const standsBloqueE = standsBloques["e"];
    const standsBloqueF = standsBloques["f"];
    const standsBloqueG = standsBloques["g"];
    const standsBloqueH = standsBloques["h"];

    console.log(standsBloqueX);
    return (
        <div className="p-4">
            <div className="flex gap-x-16 h-[480px] w-[1500px]">
                <div className="flex flex-col gap-10">
                    {/* BLOQUE W */}
                    <div className="flex flex-col gap-8">
                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="">
                                    <p className="font-bold text-2xl text-center">
                                        MYPES CUSQUEÑOS
                                    </p>
                                </div>
                                <div className="flex">
                                    <GroupStands
                                        cantidad={13}
                                        inicio={1}
                                        stands={standsBloqueW}
                                        color={"blue"}
                                    />
                                    <div className="bg-black text-white px-2 whitespace-nowrap">
                                        <p className="text-xl font-bold">
                                            baño 2
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-1">
                                    <p className=" text-center w-fit font-bold text-xl border-4 border-blue-600 rounded-full px-2">
                                        W
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="">
                                    <p className="font-bold text-2xl text-center">
                                        MYPES CUSQUEÑOS
                                    </p>
                                </div>
                                <GroupStands
                                    cantidad={17}
                                    inicio={1}
                                    stands={standsBloqueY}
                                    color={"red"}
                                />
                                <div className="flex justify-center mt-1">
                                    <p className=" text-center w-fit font-bold text-xl border-4 border-red-600 rounded-full px-2">
                                        Y
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="">
                                    <p className="font-bold text-2xl text-center">
                                        ARTESANIAS
                                    </p>
                                </div>
                                <GroupStands
                                    cantidad={15}
                                    inicio={1}
                                    stands={standsBloqueZ}
                                    color={"green"}
                                />
                                <div className="flex justify-center mt-1">
                                    <p className=" text-center w-fit font-bold text-xl border-4 border-green-600 rounded-full px-2">
                                        Z
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            {/* BLOQUE X */}
                            <div className="flex gap-8">
                                <div className="flex gap-1">
                                    <p className=" text-center w-fit font-bold text-xl border-4 border-purple-600 rounded-full px-2">
                                        X
                                    </p>
                                    <Stand
                                        numero={1}
                                        color={"purple"}
                                        stand={
                                            standsBloqueX && standsBloqueX[0]
                                        }
                                    />
                                </div>
                                <GroupStands
                                    cantidad={15}
                                    inicio={2}
                                    stands={standsBloqueX}
                                    color={"purple"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[40vh] bg-rose-300 w-full">
                        <div className="flex justify-center items-center h-full">
                            <p className="font-bold text-2xl">
                                GOBIERNOS LOCALES
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3">
                        {/* GOBIERNO REGIONAL */}
                        <div className="col-span-1">
                            <div className="bg-red-400 h-[10vh]">
                                <div className="flex justify-center items-center h-full">
                                    <p className="font-bold text-2xl">
                                        GOBIERNO REGIONAL
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* MYPES MISCELANEAS */}
                        <div className="col-span-2">
                            <div className="flex">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
