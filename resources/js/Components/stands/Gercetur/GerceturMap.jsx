import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import { Tabs } from "flowbite-react";
import MapaPDF from "@/Components/UI/MapaPDF";

const GerceturMap = () => {
    const { props } = usePage();
    const { standsBloques } = props;

    const standsBloqueA = standsBloques["A"];
    const standsBloqueB = standsBloques["B"];

    return (
        <Tabs>
            <Tabs.Item active title="Mapa de Stands">
                <div className="p-4 w-[1000px] h-[500px] flex justify-center items-center">
                    <div className="flex gap-10">
                        <div className="flex items-end">
                            <div className="bg-yellow-200 w-60 h-40 flex justify-center items-center">
                                <p className="font-bold text-xl">
                                    RING DE JUZGAMIENTO
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-20">
                            <div className="flex gap-1">
                                <div className="flex justify-center">
                                    <p className=" text-center h-fit font-bold text-xl border-4 border-red-600 rounded-full px-2">
                                        A
                                    </p>
                                </div>
                                <GroupStands
                                    color={"red"}
                                    inicio={1}
                                    cantidad={13}
                                    stands={standsBloqueA}
                                    size={"high"}
                                />
                            </div>
                            <div className="flex gap-1">
                                <div className="flex justify-center">
                                    <p className=" text-center h-fit font-bold text-xl border-4 border-blue-600 rounded-full px-2">
                                        B
                                    </p>
                                </div>
                                <GroupStands
                                    color={"blue"}
                                    inicio={1}
                                    cantidad={13}
                                    stands={standsBloqueB}
                                    size={"high"}
                                />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <div className="bg-cyan-200 w-28 h-40 flex justify-center items-center">
                                <p className="font-bold text-xl">AUDITORIO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item active title="Ver Mapa">
                {<MapaPDF />}
            </Tabs.Item>
        </Tabs>
    );
};
export default GerceturMap;
