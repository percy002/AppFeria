import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import Stand from "../Stand";
export const MapStandsMypesZona1 = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueX = standsBloques["X"];
    const standsBloqueY = standsBloques["Y"];
    const standsBloqueW = standsBloques["W"];
    const standsBloqueZ = standsBloques["Z"];

    return (
        <div className="flex flex-col">
            <div className="p-4">
                <div className="flex gap-x-16 xl:h-[65vh]">
                    <div className="flex flex-col gap-10">
                        {/* BLOQUE W */}
                        <div className="flex flex-col gap-8">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <div className="">
                                        <p className="font-bold text-2xl text-center">
                                            GERCETUR ARTESANIAS
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <GroupStands
                                            cantidad={13}
                                            inicio={1}
                                            stands={standsBloqueW}
                                            color={"blue"}
                                            size={"small"}
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
                                            MYPES
                                        </p>
                                    </div>
                                    <GroupStands
                                        cantidad={17}
                                        inicio={1}
                                        stands={standsBloqueY}
                                        color={"red"}
                                        size={"small"}

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
                                            MYPES
                                        </p>
                                    </div>
                                    <GroupStands
                                        cantidad={15}
                                        inicio={1}
                                        stands={standsBloqueZ}
                                        color={"green"}
                                        size={"small"}

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
                                        GERCETUR ARTESANIAS
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
                                            size={"small"}

                                        />
                                    </div>
                                    <GroupStands
                                        cantidad={14}
                                        inicio={2}
                                        stands={standsBloqueX}
                                        color={"purple"}
                                        size={"small"}

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
