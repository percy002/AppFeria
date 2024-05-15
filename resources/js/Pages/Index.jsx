import DynamicCountDown from "@/Components/UI/DynamicCountDown";
import { Button } from "flowbite-react";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaStore } from "react-icons/fa6";
import { Link } from "@inertiajs/react";
import ContentIndex from "@/Components/UI/ContentIndex";

const Index = () => {
    return (
        <>
            <div className="w-full h-screen relative">
                <div
                    className="w-full h-full bg-cover bg-center absolute"
                    style={{
                        backgroundImage:
                            "url('/images/portada/feria_Huancaro_portada.webp')",
                    }}
                >
                    <div className="w-full h-full absolute">
                        <div className="h-full flex flex-col justify-between pt-8 pb-4">
                            <div className="w-full flex justify-between px-4 md:px-14">
                                <img
                                    src="/images/logos/logo_gore2.png"
                                    alt="logo gobierno regional del cusco"
                                    className="w-32 md:w-[14rem]"
                                />
                                <img
                                    src="/images/logos/logo_expoferia_2024.png"
                                    alt="logo feria de huancaro 2024"
                                    className="w-32 md:w-[12rem]"
                                />
                            </div>
                            <div className="flex w-full justify-center">
                                <Button
                                    size={"xs"}
                                    className="pt-0 px-4 bg-secondary rounded-full text-primary font-bold text-xl hover:bg-primary enabled:hover:bg-primary hover:text-white"
                                >
                                    <HiLocationMarker className="h-6 w-6 mr-2" />
                                    <span className="text-lg">
                                        Feria Huancaro, Cusco
                                    </span>
                                </Button>
                            </div>
                            <div className="w-full flex justify-center">
                                <h1 className="text-white text-center text-5xl lg:text-7xl font-bold">
                                    53° Expo Feria Internacional Huancaro
                                </h1>
                            </div>
                            <div className="w-full flex justify-center">
                                <Link href="/login">
                                    <Button
                                        size={"xs"}
                                        className="bg-primary border-4 border-white rounded-full enabled:hover:bg-white enabled:hover:border-primary group pt-0 px-6"
                                    >
                                        <div className="flex gap-4 items-center">
                                            <span className="text-white text-2xl lg:text-4xl font-bold group-hover:text-primary">
                                                Compra tu stand
                                            </span>
                                            <span>
                                                <FaStore className="h-8 w-8 group-hover:text-primary" />
                                            </span>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                            <div className="w-full px-2">
                                <DynamicCountDown />
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                </div>
            </div>
            <ContentIndex/>
        </>
    );
};
export default Index;
