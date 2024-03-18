import StandsContext from "@/Contexts/StandContext";
import { useState, useRef, useEffect } from "react";
import ReservedStands from "../ReservedStands";
import MapStandsAnimals from "../AnimalsStands/MapStandsAnimals";

export const FeriaHuancaroMap = ({auth,cliente}) => {
    const [reservedStands, setReservedStands] = useState([]);
    const divRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const category = auth.user.category_id;



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
                    className="overflow-x-scroll lg:w-10/12"
                    ref={divRef}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    {
                        category === 2 && <MapStandsAnimals />
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