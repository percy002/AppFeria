import GroupStands from "../GroupStands";
import { usePage } from "@inertiajs/react";

export const MapStandsGastronomiaZ1 = () => {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueCV = standsBloques["CV"];

    return (
        <div className="w-full flex justify-center origin-top transform  scale-70">
            <div className="p-2 mx-auto w-[600px] h-[480px]">
                <div className="flex justify-center">
                    <GroupStands
                        color={"red"}
                        inicio={10}
                        cantidad={8}
                        stands={standsBloqueCV.slice(9, 17)}

                    />
                </div>
                <div className="flex justify-center py-2">
                    <p className="text-center font-bold text-xl border-4 border-red-600 rounded-full px-2 h-fit w-fit">
                        CV
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="">
                            <GroupStands
                                color={"green"}
                                cantidad={4}
                                inicio={9}
                                stands={standsBloqueCV.slice(5, 9)}
                                direction={"col"}
                                orden={"desc"}

                            />
                        </div>
                        <div className="">
                            <GroupStands
                                color={"green"}
                                cantidad={5}
                                inicio={5}
                                stands={standsBloqueCV.slice(0, 5)}
                                direction={"col"}
                                orden={"desc"}

                            />
                        </div>
                    </div>
                    <div className="bg-red-200 h-[300px] w-72 flex items-center justify-center">
                        <p className="">PATIO DE COMIDAS</p>
                    </div>
                    <div className=" transform rotate-6">
                        <GroupStands
                            color={"purple"}
                            cantidad={15}
                            inicio={18}
                            stands={standsBloqueCV.slice(17, 32)}
                            direction={"col"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
