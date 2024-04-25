import { useEffect, useState, useContext } from "react";
import { Table } from "flowbite-react";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";

function RowEvaluatedClient({ cliente }) {
    const [approved, setApproved] = useState(cliente.approved);
    const [evaluated, setEvaluated] = useState(cliente.evaluated);

    const { evaluatedClients, setEvaluatedClients } = useContext(ClientsEvaluatedContext);

    console.log(evaluatedClients);
    const toggleAprobacion = async (clienteId) => {
        try {
            // Realizar la solicitud PUT utilizando Axios
            const response = await axios.put(
                `/cliente/${clienteId}/aprobar`,
                null
            );

            if (response.status === 200) {
                const data = response.data;
                setClientsEvaluated((prevClients) => [...prevClients,cliente]);
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
                setEvaluated(data.approved);
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
        
    );
}
export default RowEvaluatedClient;
