import { useEffect, useState, useContext } from "react";
import { Table } from "flowbite-react";
import approvedClientContext from "@/Contexts/approvedClientContext";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";
import Swal from "sweetalert2";
import ModalVerPDF from "../UI/ModalVerPDF";
import PdfOpenModal from "../UI/PdfOpenModal";
import FichaRucModal from "../UI/FichaRucModal";
function RowEvaluatedClient({ cliente }) {
    const [approved, setApproved] = useState(cliente.approved);
    const { approvedClients, setApprovedClients } = useContext(approvedClientContext);
    const { evaluatedClients, setEvaluatedClients} = useContext(ClientsEvaluatedContext)

    const aprobarCliente = async (clienteId) => {
        try {
            const response = await axios.put(
                `/cliente/${clienteId}/evaluar`,
                {'status': 'approved'}
            );
            if (response.status === 200) {
                const data = response.data;
                setApprovedClients((prev) => [...prev, cliente]);
                setApproved(data.approved);
                setEvaluatedClients(evaluatedClients.filter((client) => client.id != clienteId));

                // setClients(clients.filter((client) => client.id != clienteId));
                return "el cliente ah sido aprobado correctamente";
            } else {
                console.error(
                    "Error al cambiar el estado del cliente:",
                    response.statusText
                );
                return "Error al evaluar al cliente ".response.statusText;
            }
        } catch (error) {
            console.error(
                "Error al cambiar el estado del cliente:",
                error
            );
            return "Error al aprobar al cliente ".error;
        }
    };
    

    const toggleAprobacion = async (clienteId) => {
        Swal.fire({
            title: "¿Esta seguro de aprobar a este cliente?",
            text: "se cambiara el estado de este cliente a cliente aprobado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, aprobar!",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const evaluar = await aprobarCliente(clienteId);

                Swal.fire({
                    title: "Cliente aprobado correctamente",
                    icon: "success",
                });
            }
        });
    }

    
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
                    <Table.Cell><FichaRucModal pdf={`/storage/${cliente.ficha_ruc}`} text="ver documento"/></Table.Cell>
                    
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
