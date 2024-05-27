import { Tabs } from "flowbite-react";
import { useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { MapStandsGastronomiaZ1 } from "./MapStandsGastronomiaZ1";
import { MapStandsGastronomiaZ2 } from "./MapStandsGastronomiaZ2";
import MapaPDF from "@/Components/UI/MapaPDF";
export const MapStandsGastronomia = () => {
    const [mapState, setMapState] = useState(1)
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title="ZONA DE COMIDAD VIP">
                {
                    mapState == 1 && <MapStandsGastronomiaZ1/>
                }
            </Tabs.Item>
            <Tabs.Item active title="ZONA DE COMIDA REGIONAL">
                {
                    mapState == 1 && <MapStandsGastronomiaZ2/>
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
