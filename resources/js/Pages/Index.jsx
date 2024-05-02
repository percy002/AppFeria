import DinamicCountDown from "@/Components/UI/DinamicCountDown";
import { Button } from "flowbite-react";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaStore } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const Index = () => {
    return (
        <div className="w-full h-screen relative">
            <div
                className="w-full h-full bg-cover bg-center absolute"
                style={{
                    backgroundImage: "url('/images/portada/huancaro.webp')",
                }}
            >
                <div className="w-full h-full bg-gray-800 bg-opacity-65 absolute">
                    <div className="h-full flex flex-col justify-between pt-8 pb-4">
                        <div className="w-full flex justify-between px-4 md:px-14">
                            <img
                                src="/images/logos/logo_gore_cusco_blanco.png"
                                alt="logo gobierno regional del cusco"
                                className="w-32 md:w-[10rem]"
                            />
                            <img
                                src="/images/logos/logo_gore_cusco_blanco.png"
                                alt="logo gobierno regional del cusco"
                                className="w-32 md:w-[10rem]"
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
                            <DinamicCountDown />
                        </div>
                    </div>
                </div>
                {/* Content */}
            </div>
        </div>
    );
};
export default Index;
