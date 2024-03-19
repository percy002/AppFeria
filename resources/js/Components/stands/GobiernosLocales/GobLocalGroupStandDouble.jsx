import React from "react";
import GroupStands from "../GroupStands";

export const GobLocalGroupStandDouble = ({
    cantidad,
    inicio,
    color,
    stands,
}) => {
    const groupStandsProps = [
        { cantidad: 1, inicio: 7 },
        { cantidad: 2, inicio: 5 },
        { cantidad: 2, inicio: 3 },
        { cantidad: 2, inicio: 1 },
    ];
    const groupStandsPropsSuperior = [
        { cantidad: 2, inicio: 12 },
        { cantidad: 2, inicio: 10 },
        { cantidad: 2, inicio: 8 },
    ];
    return (
        <div className="flex flex-col justify-around h-full">
            <div className="flex flex-col">
                {groupStandsPropsSuperior.map((props, index) => (
                    <GroupStands
                        key={index}
                        cantidad={props.cantidad}
                        inicio={props.inicio}
                        color={color}
                        stands={stands.slice(0, 2)}
                        small={true}
                    />
                ))}
            </div>
            <div className="flex flex-col">
                {groupStandsProps.map((props, index) => (
                    <GroupStands
                        key={index}
                        cantidad={props.cantidad}
                        inicio={props.inicio}
                        color={color}
                        stands={stands.slice(0, 2)}
                        small={true}
                    />
                ))}
            </div>
        </div>
    );
};
