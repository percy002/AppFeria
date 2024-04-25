import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TableClients from "@/Components/Clients/TableClients";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { TableClientPayments } from "@/Components/Clients/TableClientPayments";
import TableEvaluatedClients from "@/Components/Clients/TableEvaluatedClients";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";
import { useState, useEffect } from "react";
const TabsCustom = {
    tablist: {
        tabitem: {
            base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        },
    },
};
async function fetchInitialData() {
    const response = await axios.get(route("clientes.evaluados"));
    // console.log(response.data);
    return response.data.evaluatedClients;
}
const Clients = ({ auth, clientes, clientesPagos }) => {
    const [evaluatedClients, setEvaluatedClients] = useState([]);

    useEffect(() => {
        fetchInitialData().then(setEvaluatedClients);
    }, []);

    return (
        <ClientsEvaluatedContext.Provider value={{evaluatedClients,setEvaluatedClients}}>
            <AuthenticatedLayout user={auth.user} client={auth.cliente}>
                <Head title="Clientes" />
                <Tabs
                    aria-label="Default tabs"
                    style="underline"
                    theme={TabsCustom}
                >
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
                                Clientes Evaluados
                            </h2>
                            <TableEvaluatedClients clientes={clientes} />
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
        </ClientsEvaluatedContext.Provider>
    );
};
export default Clients;
