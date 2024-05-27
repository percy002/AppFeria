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
    const { props } = usePage();

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta el factor para controlar la velocidad de desplazamiento
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const category = props.auth.user.client.category_id;

    return (
        <div>
            {props.auth.user.client.status == "approved" ? (
                <StandsContext.Provider
                    value={{ reservedStands, setReservedStands }}
                >
                    <div className="flex flex-col lg:flex-row">
                        <div
                            className="overflow-x-scroll lg:w-9/12 pr-1 cursor-grab"
                            ref={scrollRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            style={{ cursor: isDragging ? "grabbing" : "grab" }}
                            // ref={divRef}
                            // onMouseEnter={() => setIsMouseOver(true)}
                            // onMouseLeave={() => setIsMouseOver(false)}
                        >
                            {category === 1 && <MapStandsGobiernosLocales />}
                            {category === 2 && <MapStandsAnimals />}
                            {category === 3 && <MapStandsMypes />}
                            {category === 4 && <MapStandsGastronomia />}
                            {category == 5 && <MapStandsGobiernoRegional />}
                            {category == 6 && <CompanyStandsMap />}
                            {category == 7 && <GerceturMap />}
                            {category == 8 && <ProcompiteMap />}
                            {category == 9 && <MapStandsOtros />}
                        </div>

                        <div className="w-full lg:w-3/12 xl:h-[80vh] border-l-2 border-gray-300">
                            <div className="flex flex-col overflow-y-scroll h-full justify-between">
                                <div className="flex gap-2">
                                    <h3 className="text-start px-1 text-2xl font-bold text-primary">
                                        Resumen
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
