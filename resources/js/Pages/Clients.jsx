import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TableClients from "@/Components/Clients/TableClients";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { TableClientPayments } from "@/Components/Clients/TableClientPayments";
import TableEvaluatedClients from "@/Components/Clients/TableEvaluatedClients";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";
import ClientsContext from "@/Contexts/ClientContext";
import approvedClientContext from "@/Contexts/approvedClientContext";
import { useState, useEffect } from "react";
import TableApprovedClients from "@/Components/Clients/TableApprovedClients";
const TabsCustom = {
    tablist: {
        tabitem: {
            base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        },
    },
};
async function getClients() {
    const response = await axios.get(route("clientes.registrados"));
    return response.data.registeredClients;
}
async function getEvaluatedClients() {
    const response = await axios.get(route("clientes.evaluados"));
    return response.data.evaluatedClients;
}
async function getApprovedClients() {
    const response = await axios.get(route("clientes.aprobados"));
    console.log(response.data);
    return response.data.approvedClients;
}
const Clients = ({ auth, clientes, clientesPagos }) => {
    const [evaluatedClients, setEvaluatedClients] = useState([]);
    const [approvedClients, setApprovedClients] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients().then(setClients);
        getEvaluatedClients().then(setEvaluatedClients);
        getApprovedClients().then(setApprovedClients);
        console.log(clients);
    }, []);

    return (
        <ClientsContext.Provider value={{ clients, setClients }}>
            <ClientsEvaluatedContext.Provider
                value={{ evaluatedClients, setEvaluatedClients }}
            >
                <approvedClientContext.Provider
                    value={{ approvedClients, setApprovedClients }}
                >
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
                                    <TableClients clientes={clients} />
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
                                    <TableEvaluatedClients
                                        clientes={evaluatedClients}
                                    />
                                </div>
                            </Tabs.Item>
                            <Tabs.Item
                                active
                                title="Clientes Aprobados"
                                icon={HiUserCircle}
                            >
                                <div className="mt-4 container mx-auto">
                                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                        Clientes Aprobados
                                    </h2>
                                    <TableApprovedClients
                                        clientes={approvedClients}
                                    />
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
                                    <TableClientPayments
                                        clientes={clientesPagos}
                                    />
                                </div>
                            </Tabs.Item>
                        </Tabs>
                    </AuthenticatedLayout>
                </approvedClientContext.Provider>
            </ClientsEvaluatedContext.Provider>
        </ClientsContext.Provider>
    );
};
export default Clients;
