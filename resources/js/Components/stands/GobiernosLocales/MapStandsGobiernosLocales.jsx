import { useState, useRef, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
import { GobLocalGroupStandDouble } from "./GobLocalGroupStandDouble";

export const MapStandsGobiernosLocales = () => {
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
    const standsBloqueO = standsBloques["O"];
    const standsBloqueP = standsBloques["P"];
    const standsBloqueQ = standsBloques["Q"];
    const standsBloqueR = standsBloques["R"];
    const standsBloqueS = standsBloques["S"];
    const standsBloqueT = standsBloques["T"];

    const standsBloqueU = standsBloques["U"];

    console.log(standsBloqueU.slice(8, 15));

    return (
        <div className="p-4">
            <div className="flex gap-x-16 h-[480px] w-[1500px]">
                <div className="flex flex-col justify-end">
                    <GroupStands
                        cantidad={15}
                        inicio={15}
                        direction={"col"}
                        stands={standsBloqueA}
                        color={"purple"}
                        size={"wide"}
                        orden={"desc"}
                    />
                    <p
                        className={`text-center w-fit font-bold text-xl border-4 border-purple-600 rounded-full px-2 mt-1`}
                    >
                        A
                    </p>
                </div>
                <div className="flex items-end gap-8">
                    <GobLocalGroupStandDouble
                        stands={standsBloqueB}
                        color={"blue"}
                        bloque={"B"}
                    />
                    <GobLocalGroupStandDouble
                        stands={standsBloqueC}
                        color={"blue"}
                        bloque={"C"}
                    />
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

                <div className="flex flex-col justify-end gap-8">
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
                            className={`text-center w-fit font-bold text-xl border-4 border-pink-600 rounded-full px-2 mt-1`}
                        >
                            U
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
