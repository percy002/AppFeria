import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
function RowClient({ cliente }) {
    const [approved, setApproved] = useState(false);
    const [evaluated, setevaluated] = useState(false);

    console.log(cliente);
    useEffect(() => {
        setApproved(cliente.approved);
    }, [cliente]);

    useEffect(() => {
        setevaluated(cliente.evaluated);
    }, [cliente]);

    const toggleAprobacion = async (clienteId) => {
        try {
            // Realizar la solicitud PUT utilizando Axios
            const response = await axios.put(
                `/cliente/${clienteId}/aprobar`,
                null
            );

            if (response.status === 200) {
                const data = response.data;
                setApproved(data.approved);
            } else {
                console.error(
                    "Error al cambiar el estado de aprobación del cliente:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Error al cambiar el estado de aprobación del cliente:",
                error
            );
        }
    };

    const toggleEvaluacion = async (clienteId) => {
        try {
            // Realizar la solicitud PUT utilizando Axios
            const response = await axios.put(
                `/cliente/${clienteId}/evaluar`,
                null
            );

            if (response.status === 200) {
                const data = response.data;
                setevaluated(data.approved);
            } else {
                console.error(
                    "Error al cambiar el estado de evaluación del cliente:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Error al cambiar el estado de evaluación del cliente:",
                error
            );
        }
    };
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            {cliente ? (
                <>
                    <Table.Cell>{cliente.category?.name}</Table.Cell>
                    <Table.Cell>{cliente.ruc}</Table.Cell>
                    <Table.Cell>{cliente.company_name}</Table.Cell>
                    <Table.Cell>
                        {cliente.name} {cliente.last_name}
                    </Table.Cell>
                    <Table.Cell>{cliente.dni}</Table.Cell>
                    <Table.Cell>{cliente.position}</Table.Cell>
                    <Table.Cell>{cliente.email}</Table.Cell>
                    <Table.Cell>
                        <input
                            type="checkbox"
                            checked={evaluated}
                            onChange={() => {
                                toggleEvaluacion(cliente.id);
                            }}
                        />
                        {evaluated ? (
                            <span className="ml-2">Revisado</span>
                        ) : (
                            ""
                        )}
                    </Table.Cell>
                    <Table.Cell>
                        <input
                            type="checkbox"
                            checked={approved}
                            onChange={() => {
                                toggleAprobacion(cliente.id);
                            }}
                        />
                        {approved ? <span className="ml-2">Aprobado</span> : ""}
                    </Table.Cell>
                </>
            ) : (
                <Table.Cell colSpan="8">Cargando...</Table.Cell>
            )}
        </Table.Row>
        // <tr key={cliente.id}>
        //     <td className="px-6 py-4 whitespace-nowrap">{cliente.category.name}</td>
        //     <td className="px-6 py-4 whitespace-nowrap">{cliente.ruc}</td>
        //     <td className="px-6 py-4 whitespace-nowrap">
        //         {cliente.company_name}
        //     </td>
        //     <td className="px-6 py-4 whitespace-nowrap">
        //         {cliente.name} {cliente.last_name}
        //     </td>
        //     <td className="px-6 py-4 whitespace-nowrap">{cliente.dni}</td>
        //     <td className="px-6 py-4 whitespace-nowrap">{cliente.position}</td>
        //     <td className="px-6 py-4 whitespace-nowrap md:hidden">{cliente.email}</td>
        //     <td className="px-6 py-4 whitespace-nowrap">
        //         <input
        //             type="checkbox"
        //             checked={evaluated}
        //             onChange={() => {
        //                 toggleEvaluacion(cliente.id);
        //             }}
        //         />
        //         {evaluated ? (<span className="ml-2">Revisado</span>) : ""}
        //     </td>
        //     <td className="px-6 py-4 whitespace-nowrap">
        //         <input
        //             type="checkbox"
        //             checked={approved}
        //             onChange={() => {
        //                 toggleAprobacion(cliente.id);
        //             }}
        //         />
        //         {approved ? (<span className="ml-2">Aprobado</span>) : ""}
        //     </td>
        // </tr>
    );
}
export default RowClient;
