import { Tabs } from "flowbite-react";
import { useState } from "react";
import { MapStandsMypesZona1 } from "./MapStandsMypesZona1";
import MapStandsMypesZonaInf from "./MapStandsMypesZonaInf";
import MapaPDF from "@/Components/UI/MapaPDF";
export const MapStandsMypes = () => {
    const [mapState, setMapState] = useState(1)
    return (
        <Tabs aria-label="Tabs with underline" style="underline" className="">
            <Tabs.Item active title="Zona MYPES 1">
                {
                    mapState == 1 && <MapStandsMypesZona1/>
                }
            </Tabs.Item>
            <Tabs.Item active title="Zona MYPES 2">
                {
                    mapState == 1 && <MapStandsMypesZonaInf/>
                }
            </Tabs.Item>
            <Tabs.Item active title="Ver Mapa">
                {
                    <MapaPDF/>
                }
            </Tabs.Item>
            
        </Tabs>
    );
};
