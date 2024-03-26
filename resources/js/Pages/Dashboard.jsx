
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head  } from "@inertiajs/react";
import TableClients from "@/Components/Clients/TableClients";
import { FeriaHuancaroMap } from "@/Components/stands/FeriaHuancaroMap/FeriaHuancaroMap";

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

                        <FeriaHuancaroMap/>
                    </div>
                )
            }

        </AuthenticatedLayout>
    );
}
