import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, userRoles, clientes }) {

    const toggleAprobacion = async (clienteId) => {
        try {

            const response = await fetch(`/cliente/${clienteId}/aprobar`, {
                method: 'PUT',
            });

            if (response.ok) {
                const data = await response.json();
                // Actualizar el estado del cliente en el estado local
                setClientesData(clientesData.map(cliente => {
                    if (cliente.id === clienteId) {
                        return { ...cliente, approved: data.approved };
                    }
                    return cliente;
                }));
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
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
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
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Nombre / Razón Social
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
                                        {cliente.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {cliente.email}
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
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
