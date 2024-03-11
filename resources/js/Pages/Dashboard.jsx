import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from 'axios';

export default function Dashboard({ auth, userRoles, clientes }) {

    const toggleAprobacion = async (clienteId) => {
        try {
    
            // Realizar la solicitud PUT utilizando Axios
            const response = await axios.put(`/cliente/${clienteId}/aprobar`, null);
    
            if (response.status === 200) {
                const data = response.data;
                // // Actualizar el estado del cliente en el estado local
                // setClientesData(clientesData.map(cliente => {
                //     if (cliente.id === clienteId) {
                //         return { ...cliente, approved: data.approved };
                //     }
                //     return cliente;
                // }));
            } else {
                console.error('Error al cambiar el estado de aprobación del cliente:', response.statusText);
            }
        } catch (error) {
            console.error('Error al cambiar el estado de aprobación del cliente:', error);
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Panel de Control
                </h2>
            }
        >
            <Head title="Panel de Control" />
            {userRoles != "client" && (
                <div className="mt-4 container mx-auto">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Todos los clientes
                    </h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    RUC
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Razón Social
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Nombre
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    DNI
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Email
                                </th>
                                
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Aprobado
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {clientes.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.ruc}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.company_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.name} {cliente.last_name }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.dni }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.email }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            checked={cliente.approved}
                                            onChange={() => {
                                                toggleAprobacion(cliente.id)
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
