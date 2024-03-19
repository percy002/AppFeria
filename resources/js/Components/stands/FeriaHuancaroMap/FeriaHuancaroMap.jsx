import StandsContext from "@/Contexts/StandContext";
import { useState, useRef, useEffect } from "react";
import ReservedStands from "../ReservedStands";
import MapStandsAnimals from "../AnimalsStands/MapStandsAnimals";
import { usePage } from "@inertiajs/react";
import { MapStandsGobiernosLocales } from "../GobiernosLocales/MapStandsGobiernosLocales";
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
    
        window.addEventListener('wheel', handleScroll,{passive: false});
    
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [isMouseOver]);
  return (
    <div>
        <StandsContext.Provider value={{ reservedStands, setReservedStands }}>
            <div className="flex flex-col lg:flex-row">
                <div
                    className="overflow-x-scroll lg:w-9/12"
                    ref={divRef}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    {
                        category === 1 && <MapStandsGobiernosLocales />
                    }
                    {
                        category === 2 && <MapStandsAnimals />
                    }
                    {
                        category === 3 && <MapStandsAnimals />
                    }
                </div>

                <div className="w-full lg:w-3/12 bg-gray-300 xl:h-[70vh]">
                    <div className="flex flex-col overflow-y-scroll h-full justify-between">
                        <h3 className="text-center text-xl font-bold">
                            Reservas
                        </h3>
                        <ReservedStands stands={reservedStands} />
                    </div>
                </div>
            </div>
        </StandsContext.Provider>
    </div>
  )
}