import StandsContext from "@/Contexts/StandContext";
import { useState, useRef, useEffect } from "react";
import ReservedStands from "../ReservedStands";
import MapStandsAnimals from "../AnimalsStands/MapStandsAnimals";
import { usePage } from "@inertiajs/react";
import { MapStandsGobiernosLocales } from "../GobiernosLocales/MapStandsGobiernosLocales";
import { MapStandsMypes } from "../Mypes/MapStandsMypes";
import { MapStandsGastronomia } from "../Gastronomia/MapStandsGastronomia";
import { MapStandsGobiernoRegional } from "../GobiernoRegional/MapStandsGobiernoRegional";
import { MapStandsOtros } from "../Otros/MapStandsOtros";
import ModalMap from "./ModalMap";
import CompanyStandsMap from "../Company/CompanyStandsMap";
import ProcompiteMap from "../Procompite/ProcompiteMap";
import GerceturMap from "../Gercetur/GerceturMap";
export const FeriaHuancaroMap = () => {
    const [reservedStands, setReservedStands] = useState([]);
    const divRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const { props } = usePage();

    const category = props.auth.user.client.category_id;

    useEffect(() => {
        const handleScroll = (e) => {
            if (isMouseOver) {
                if (divRef.current) {
                    divRef.current.scrollLeft += e.deltaY;
                }
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [isMouseOver]);
    return (
        <div>
            {props.auth.user.client.approved == 1 ? (
                <StandsContext.Provider
                    value={{ reservedStands, setReservedStands }}
                >
                    <div className="flex flex-col lg:flex-row">
                        <div
                            className="overflow-x-scroll lg:w-9/12"
                            ref={divRef}
                            onMouseEnter={() => setIsMouseOver(true)}
                            onMouseLeave={() => setIsMouseOver(false)}
                        >
                            {category === 1 && <MapStandsGobiernosLocales />}
                            {category === 2 && <MapStandsAnimals />}
                            {category === 3 && <MapStandsMypes />}
                            {category === 4 && <MapStandsGastronomia />}
                            {category == 5 && <MapStandsGobiernoRegional />}
                            {category == 6 && <CompanyStandsMap />}
                            {category == 7 && <GerceturMap/> }
                            {category == 8 && <ProcompiteMap />}
                            {category == 9 && <MapStandsOtros />}
                        </div>

                        <div className="w-full lg:w-3/12 bg-gray-300 xl:h-[80vh] ">
                            <div className="flex flex-col overflow-y-scroll h-full justify-between">
                                <div className="flex p-1 gap-2">
                                    <ModalMap />
                                    <h3 className="text-center text-xl font-bold">
                                        Reservas
                                    </h3>
                                </div>
                                <ReservedStands stands={reservedStands} />
                            </div>
                        </div>
                    </div>
                </StandsContext.Provider>
            ) : (
                <div className="">
                    <h3 className="my-4 text-4xl text-center font-bold text-gray-500">
                        Su solicitud esta en proceso, por favor espere.
                    </h3>
                </div>
            )}
        </div>
    );
};
