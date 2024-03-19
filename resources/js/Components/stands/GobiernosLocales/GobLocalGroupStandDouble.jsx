import React from "react";
import GroupStands from "../GroupStands";

export const GobLocalGroupStandDouble = ({
    cantidad,
    inicio,
    color,
    stands,
    bloque,
}) => {
    const groupStandsPropsSuperior = [
        { cantidad: 2, inicio: 12 },
        { cantidad: 2, inicio: 10 },
        { cantidad: 2, inicio: 8 },
    ];
    if (stands.length == 15) {
        groupStandsPropsSuperior.unshift({ cantidad: 2, inicio: 14 })
    }
    const groupStandsProps = [
        { cantidad: 2, inicio: 5 },
        { cantidad: 2, inicio: 3 },
        { cantidad: 2, inicio: 1 },
    ];

    return (
        <div className="flex flex-col justify-end gap-12">
            
            <div className="flex flex-col">
                {stands.length == 14 && (
                    <GroupStands
                        cantidad={1}
                        inicio={14}
                        color={color}
                        stands={stands.slice(12, 13)}
                        size={"small"}
                    />
                )}
                {groupStandsPropsSuperior.map((props, index) => (
                    <GroupStands
                        key={index}
                        cantidad={props.cantidad}
                        inicio={props.inicio}
                        color={color}
                        stands={stands.slice(
                            props.inicio - 1,
                            props.inicio + 1
                        )}
                        size={"high"}
                    />
                ))}
                {
                bloque == "E" && (
                    <div className="">

                        <p className="absolute font-bold text-xl">Gobiernos locales</p>
                    </div>

                )
            }
            </div>
            
            <div className="flex flex-col">
                <GroupStands
                    cantidad={1}
                    inicio={7}
                    color={color}
                    stands={stands.slice(6, 7)}
                    size={"small"}
                />
                {groupStandsProps.map((props, index) => (
                    <GroupStands
                        key={index}
                        cantidad={props.cantidad}
                        inicio={props.inicio}
                        color={color}
                        stands={stands.slice(
                            props.inicio - 1,
                            props.inicio + 1
                        )}
                        size={"high"}
                    />
                ))}
                <div className="flex justify-center mt-1">
                    <p
                        className={`text-center w-fit font-bold text-xl border-4 border-${color}-600 rounded-full px-2`}
                    >
                        {bloque}
                    </p>
                </div>
            </div>
        </div>
    );
};
