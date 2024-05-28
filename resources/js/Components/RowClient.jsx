import { useEffect, useState, useContext } from "react";
import { Table } from "flowbite-react";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";
import ClientsContext from "@/Contexts/ClientContext";
import Swal from "sweetalert2";
import FichaRucModal from "./UI/FichaRucModal";
function RowClient({ cliente }) {
    const [evaluated, setEvaluated] = useState(cliente.evaluated);

    const { evaluatedClients, setEvaluatedClients } = useContext(
        ClientsEvaluatedContext
    );
    const { clients, setClients } = useContext(ClientsContext);

    const evaluarCliente = async (clienteId) => {
        try {
            const response = await axios.put(
                `/cliente/${clienteId}/evaluar`,
                {'status': 'evaluated'},
            );
            if (response.status === 200) {
                const data = response.data;
                setEvaluatedClients((prev) => [...prev, cliente]);
                setEvaluated(data.approved);
                setClients(clients.filter((client) => client.id != clienteId));
                return "el cliente ah sido evaluad correctamente";
            } else {
                console.error(
                    "Error al cambiar el estado de evaluación del cliente:",
                    response.statusText
                );
                return "Error al evaluar al cliente ".response.statusText;
            }
        } catch (error) {
            console.error(
                "Error al cambiar el estado de evaluación del cliente:",
                error
            );
            return "Error al evaluar al cliente ".error;
        }
    };

    const toggleEvaluacion = async (clienteId) => {
        Swal.fire({
            title: "¿Esta seguro de evaluar a este cliente?",
            text: "se cambiara el estado de este cliente a cliente evaluado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, evaluar!",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const evaluar = await evaluarCliente(clienteId);

                Swal.fire({
                    title: "Cliente evaluado correctamente",
                    icon: "success",
                });
            }
        });
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
                    <Table.Cell>{cliente.phone_number}</Table.Cell>
                    <Table.Cell><FichaRucModal pdf={`/storage/${cliente.ficha_ruc}`} text="ver documento"/></Table.Cell>
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
                </>
            ) : (
                <Table.Cell colSpan="8">Cargando...</Table.Cell>
            )}
        </Table.Row>
    );
}
export default RowClient;
