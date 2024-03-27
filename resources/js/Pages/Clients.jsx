import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TableClients from "@/Components/Clients/TableClients";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { TableClientPayments } from "@/Components/Clients/TableClientPayments";

const TabsCustom = {
    
        "tablist": {          
          "tabitem": {
            "base": "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
          }
        },      
      
}

const Clients = ({ auth, clientes,clientesPagos }) => {
    return (
        <AuthenticatedLayout user={auth.user} client={auth.cliente}>
            <Head title="Clientes" />
            <Tabs aria-label="Default tabs" style="underline" theme={TabsCustom}>
                <Tabs.Item
                    active
                    title="Clientes Registrados"
                    icon={HiUserCircle}
                >
                    <div className="mt-4 container mx-auto">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Todos los clientes
                        </h2>
                        <TableClients clientes={clientes} />
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Clientes Evaluados"
                    icon={HiUserCircle}
                >
                    <div className="mt-4 container mx-auto">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Todos los clientes
                        </h2>
                        <TableClients clientes={clientes} />
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Pagos de Clientes"
                    icon={HiMiniCurrencyDollar}
                >
                    <div className="mt-4 container mx-auto">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Todos los clientes
                        </h2>
                        <TableClientPayments clientes={clientesPagos} />
                    </div>
                </Tabs.Item>
            </Tabs>
        </AuthenticatedLayout>
    );
};
export default Clients;
