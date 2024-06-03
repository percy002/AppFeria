import { Tabs } from "flowbite-react";
import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import MapaPDF from "@/Components/UI/MapaPDF";

const RegionesInvitadasMap = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueU = standsBloques["U"];

    console.log(standsBloques);
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title="Gobiernos Locales 1">
                {
                    <div className="flex justify-center gap-10">
                        <div className="bg-red-500 w-[20rem] lg:w-[30rem] h-[30rem] flex justify-center items-center">
                            <h4>GOBIERNOS LOCALES</h4>
                        </div>
                        <div className="flex flex-col justify-end gap-14">
                            <GroupStands
                                cantidad={8}
                                inicio={15}
                                direction={"col"}
                                stands={standsBloqueU.slice(8, 16)}
                                color={"pink"}
                                size={"wide"}
                                orden={"desc"}
                            />

                            <div className="flex flex-col">
                                <GroupStands
                                    cantidad={7}
                                    inicio={7}
                                    direction={"col"}
                                    stands={standsBloqueU.slice(1, 8)}
                                    color={"pink"}
                                    size={"wide"}
                                    orden={"desc"}
                                />
                                <p
                                    className={`text-center w-fit font-bold text-base border-4 border-pink-600 rounded-full px-2 mt-1`}
                                >
                                    U
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-500 w-[20rem] h-[30rem] justify-center items-center hidden sm:flex">
                            <h4>ZONA DE COMIDAS</h4>
                        </div>

                    </div>
                }
            </Tabs.Item>
            <Tabs.Item active title="Ver Mapa">
                {<MapaPDF />}
            </Tabs.Item>
        </Tabs>
    );
};
export default RegionesInvitadasMap;
