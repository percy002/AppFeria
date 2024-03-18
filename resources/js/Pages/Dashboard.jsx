import RowClient from "@/Components/RowClient";
import MapStandsAnimals from "@/Components/stands/AnimalsStands/MapStandsAnimals";
import TableStands from "@/Components/stands/TableStands";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head  } from "@inertiajs/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import Reservation from "./Reservations/Reservation";
import TableClients from "@/Components/Clients/TableClients";

export default function Dashboard({ auth, userRoles, clientes }) {   

    // console.log(clientes);
    return (
        <AuthenticatedLayout
            user={auth.user}
            
            client={auth.cliente}
        >
            <Head title="Panel de Control" />
            {userRoles != "client" && (
                <div className="mt-4 container mx-auto">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Todos los clientes
                    </h2>
                    <TableClients clientes={clientes} />
                </div>
            )}
            {
                userRoles == "client" && (
                    <div className="">

                        <MapStandsAnimals/>
                    </div>
                )
            }

        </AuthenticatedLayout>
    );
}
