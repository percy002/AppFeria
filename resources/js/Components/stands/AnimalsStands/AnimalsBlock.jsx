import GroupStands from "../GroupStands";
import React from "react";
export default function AnimalsBlock({ stands, color, borderColor }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-5">
                {Array(7)
                    .fill()
                    .map((_, index) => (
                        <React.Fragment key={index}>
                            <GroupStands
                                cantidad={8}
                                inicio={index * 8 + 1}
                                direction={"col"}
                                stands={stands.slice(
                                    index * 8,
                                    (index + 1) * 8
                                )}
                                color={color}
                                borderColor={borderColor}
                            />
                            {index == 3 && (
                                <div
                                    className="text-center"
                                    style={{
                                        writingMode: "vertical-rl",
                                    }}
                                >
                                    <p className="font-bold text-xl">
                                        ZONA DE ANIMALES
                                    </p>
                                </div>
                            )}
                        </React.Fragment>
                    ))}                
            </div>

            <p className="font-bold text-xl text-center border-4 border-yellow-600 rounded-full">E</p>
        </div>
    );
}
