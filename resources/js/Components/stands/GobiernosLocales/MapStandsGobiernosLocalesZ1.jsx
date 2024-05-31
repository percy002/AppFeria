import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import { GobLocalGroupStandDouble } from "./GobLocalGroupStandDouble";
const MapStandsGobiernosLocalesZ1 = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueA = standsBloques["A"];
    const standsBloqueB = standsBloques["B"];
    const standsBloqueC = standsBloques["C"];
    const standsBloqueD = standsBloques["D"];
    const standsBloqueE = standsBloques["E"];
    const standsBloqueF = standsBloques["F"];
    const standsBloqueG = standsBloques["G"];
    const standsBloqueH = standsBloques["H"];
    const standsBloqueI = standsBloques["I"];

    const standsBloqueJ = standsBloques["J"];
    const standsBloqueK = standsBloques["K"];
    const standsBloqueL = standsBloques["L"];
    const standsBloqueM = standsBloques["M"];
    const standsBloqueN = standsBloques["N"];
    return (
        <div className="p-4 origin-top transform scale-90">
            <div className="flex gap-x-16">
                {/* <div className="flex flex-col justify-end">
                    <GroupStands
                        cantidad={15}
                        inicio={15}
                        direction={"col"}
                        stands={standsBloqueA.slice(0,15)}
                        color={"purple"}
                        size={"wide"}
                        orden={"desc"}
                    />
                    <p
                        className={`text-center w-fit font-bold text-xl border-4 border-purple-600 rounded-full px-2 mt-1`}
                    >
                        A
                    </p>
                </div> */}
                <div className="flex items-end gap-8">
                    {/* <GobLocalGroupStandDouble
                        stands={standsBloqueB}
                        color={"blue"}
                        bloque={"B"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueC}
                        color={"blue"}
                        bloque={"C"}
                    /> */}
                    <GobLocalGroupStandDouble
                        stands={standsBloqueD}
                        color={"blue"}
                        bloque={"D"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueE}
                        color={"blue"}
                        bloque={"E"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueF}
                        color={"blue"}
                        bloque={"F"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueG}
                        color={"blue"}
                        bloque={"G"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueH}
                        color={"blue"}
                        bloque={"H"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueI}
                        color={"blue"}
                        bloque={"I"}
                    />
                </div>
                <div className="flex items-end gap-8">
                    <GobLocalGroupStandDouble
                        stands={standsBloqueJ}
                        color={"green"}
                        bloque={"J"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueK}
                        color={"green"}
                        bloque={"K"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueL}
                        color={"green"}
                        bloque={"L"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueM}
                        color={"green"}
                        bloque={"M"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueN}
                        color={"green"}
                        bloque={"N"}
                    />
                    
                </div>
                
            </div>
        </div>
    );
};
export default MapStandsGobiernosLocalesZ1;
