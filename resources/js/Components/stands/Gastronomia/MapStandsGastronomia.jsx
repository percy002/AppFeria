import { Tabs } from "flowbite-react";
import { useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { MapStandsGastronomiaZ1 } from "./MapStandsGastronomiaZ1";
import { MapStandsGastronomiaZ2 } from "./MapStandsGastronomiaZ2";
export const MapStandsGastronomia = () => {
    const [mapState, setMapState] = useState(1)
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title="PATIO DE COMIDAS 1">
                {
                    mapState == 1 && <MapStandsGastronomiaZ1/>
                }
            </Tabs.Item>
            <Tabs.Item active title="PATIO DE COMIDAS 2">
                {
                    mapState == 1 && <MapStandsGastronomiaZ2/>
                }
            </Tabs.Item>
            
        </Tabs>
    );
};
