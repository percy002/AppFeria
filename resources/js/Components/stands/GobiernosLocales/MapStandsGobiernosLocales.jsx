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
    // console.log(props);

    return (
        <div>
            <div className="flex justify-between h-[70vh] w-[1100px] container mx-auto">
                <div className="flex items-center">
                    <GroupStands
                        cantidad={15}
                        inicio={15}
                        direction={"col"}
                        stands={standsBloqueA}
                        color={"green"}
                        small={"true"}
                        orden={"desc"}
                    />
                </div>
                <div className="flex items-center">
                        <GobLocalGroupStandDouble stands={standsBloqueB} color={"purple"}/>
                </div>
            </div>
        </div>
    );
};
