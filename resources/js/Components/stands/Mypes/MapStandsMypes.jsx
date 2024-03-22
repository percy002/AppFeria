import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import Stand from "../Stand";
import MypesGroupStandDouble from "./MypesGroupStandDouble";
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

    console.log(standsBloques);
    // console.log(standsBloqueX);
    return (
        <div className="flex flex-col bg-yellow-200 w-fit ">
            <div className="p-4">
                <p className="font-bold text-xl border border-gray-800 rounded-md w-fit p-1 absolute">
                    BLOQUE MYPES SUPERIOR
                </p>
                <div className="flex gap-x-16 h-[280px] mt-12">
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

                            <div className="flex flex-col">
                                {/* BLOQUE X */}
                                <div className="">
                                    <p className="font-bold text-2xl pl-36">
                                        MYPES JUGUETES
                                    </p>
                                </div>
                                <div className="flex gap-8">
                                    <div className="flex gap-1">
                                        <p className=" text-center w-fit font-bold text-xl border-4 border-purple-600 rounded-full px-2">
                                            X
                                        </p>
                                        <Stand
                                            numero={1}
                                            color={"purple"}
                                            stand={
                                                standsBloqueX &&
                                                standsBloqueX[0]
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
                    </div>
                </div>
            </div>
        </div>
    );
};
