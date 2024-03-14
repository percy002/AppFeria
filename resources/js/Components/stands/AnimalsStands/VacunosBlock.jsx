import { Button } from "flowbite-react";
import ColumnaStands from "../ColumnaStands";
export default function VacunosBlock() {
    return (
        <div className="col-span-1 flex items-center">
            <div className="flex flex-col">
                <p className="text-center font-bold text-xl">A</p>

                <div className="flex items-center">
                    <div className="">
                        <Button.Group className="flex flex-col">
                            <ColumnaStands cantidad={6} inicio={6} orden={"desc"}/>
                        </Button.Group>
                    </div>
                    <div
                        style={{
                            writingMode: "vertical-rl",
                        }}
                    >
                        <p className="font-bold text-xl">VACUNOS</p>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <Button
                                color="warning"
                                className="rounded-none border-2 border-gray-500"
                            >
                                6
                            </Button>
                            <Button
                                color="warning"
                                className="rounded-none border-2 border-gray-500"
                            >
                                5
                            </Button>
                            <Button
                                color="warning"
                                className="rounded-none border-2 border-gray-500"
                            >
                                4
                            </Button>
                            <Button
                                color="warning"
                                className="rounded-none border-2 border-gray-500"
                            >
                                3
                            </Button>
                            <Button
                                color="warning"
                                className="rounded-none border-2 border-gray-500"
                            >
                                2
                            </Button>
                            <Button
                                color="warning"
                                className="rounded-none border-2 border-gray-500"
                            >
                                1
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
