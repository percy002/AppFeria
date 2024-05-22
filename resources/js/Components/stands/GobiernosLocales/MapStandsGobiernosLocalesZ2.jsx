import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import { GobLocalGroupStandDouble } from "./GobLocalGroupStandDouble";
const MapStandsGobiernosLocalesZ2 = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    
    const standsBloqueL = standsBloques["L"];
    const standsBloqueM = standsBloques["M"];
    const standsBloqueN = standsBloques["N"];
    const standsBloqueO = standsBloques["O"];
    const standsBloqueP = standsBloques["P"];
    const standsBloqueQ = standsBloques["Q"];
    const standsBloqueR = standsBloques["R"];
    const standsBloqueS = standsBloques["S"];
    const standsBloqueT = standsBloques["T"];

    const standsBloqueU = standsBloques["U"];
  return (
    <div className="p-4 origin-top transform scale-90">
            <div className="flex gap-x-16">                
                
                <div className="flex items-end gap-8">                    
                    {/* <GobLocalGroupStandDouble
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
                    /> */}
                    <GobLocalGroupStandDouble
                        stands={standsBloqueO}
                        color={"green"}
                        bloque={"O"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueP}
                        color={"yellow"}
                        bloque={"P"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueQ}
                        color={"yellow"}
                        bloque={"Q"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueR}
                        color={"yellow"}
                        bloque={"R"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueS}
                        color={"yellow"}
                        bloque={"S"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueT}
                        color={"yellow"}
                        bloque={"T"}
                    />
                </div>

                <div className="flex flex-col justify-end gap-14">
                    <GroupStands
                        cantidad={8}
                        inicio={15}
                        direction={"col"}
                        stands={standsBloqueU.slice(7, 15)}
                        color={"pink"}
                        size={"wide"}
                        orden={"desc"}
                    />

                    <div className="flex flex-col">
                        <GroupStands
                            cantidad={7}
                            inicio={7}
                            direction={"col"}
                            stands={standsBloqueU.slice(0, 7)}
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
            </div>
        </div>
  )
}
export default MapStandsGobiernosLocalesZ2