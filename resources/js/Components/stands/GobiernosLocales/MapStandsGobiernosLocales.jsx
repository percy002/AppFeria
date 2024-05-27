
import MapStandsGobiernosLocalesZ1 from "./MapStandsGobiernosLocalesZ1";
import MapStandsGobiernosLocalesZ2 from "./MapStandsGobiernosLocalesZ2";
import { Tabs } from "flowbite-react";
import { useState } from "react";
import MapaPDF from "@/Components/UI/MapaPDF";
export const MapStandsGobiernosLocales = () => {
    const [mapState, setMapState] = useState(1)
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title="Gobiernos Locales 1">
                {
                    mapState == 1 && <MapStandsGobiernosLocalesZ1/>
                }
            </Tabs.Item>
            <Tabs.Item active title="Gobiernos Locales 2">
                {
                    mapState == 1 && <MapStandsGobiernosLocalesZ2/>
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
