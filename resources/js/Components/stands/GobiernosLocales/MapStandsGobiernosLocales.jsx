import { useState, useRef, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export const MapStandsGobiernosLocales = () => {
  const [reservedStands, setReservedStands] = useState([]);
    const { props } = usePage();
    const divRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);

    

    const { standsBloques } = props;
  return (
    <div>
        <div className="grid grid-cols-50 h-screen w-[1100px]">
          <div className="col-span-1">
            <div className="flex flex-col">

            </div>
          </div>

        </div>
    </div>
  )
}