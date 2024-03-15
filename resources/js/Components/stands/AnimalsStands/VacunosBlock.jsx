import { usePage } from "@inertiajs/react";
import GroupStands from "../GroupStands";
export default function VacunosBlock() {
    const { props } = usePage();

    const { standsBloques } = props;
    const standsBloqueA = standsBloques["A"];

    // console.log(standsBloques["A"]);
    return (
        <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-1">
                <p className="text-center font-bold text-xl border-4 border-blue-600 rounded-full">
                    A
                </p>

                <div className="flex items-center">
                    <div className="">
                        <GroupStands
                            stands={standsBloqueA.slice(0, 6)}
                            cantidad={6}
                            inicio={6}
                            orden={"desc"}
                            direction={"col"}
                            color={"bg-orange-500"}
                            borderColor={"border-blue-600"}
                        />
                    </div>
                    <div
                        style={{
                            writingMode: "vertical-rl",
                        }}
                    >
                        <p className="font-bold text-xl">VACUNOS</p>
                    </div>
                    <div className="">
                        <GroupStands
                            stands={standsBloqueA.slice(6, 12)}
                            cantidad={6}
                            inicio={12}
                            orden={"desc"}
                            direction={"col"}
                            color={"bg-orange-500"}
                            borderColor={"border-blue-600"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
