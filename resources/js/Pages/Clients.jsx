import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TableClients from "@/Components/Clients/TableClients";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { TableClientPayments } from "@/Components/Clients/TableClientPayments";

const Clients = ({ auth, clientes,clientesPagos }) => {
    // console.log(clientesPagos);
    return (
        <AuthenticatedLayout user={auth.user} client={auth.cliente}>
            <Head title="Clientes" />
            <Tabs aria-label="Default tabs" style="underline">
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
