import { Table } from "flowbite-react";
import { useContext } from "react";
import approvedClientContext from "@/Contexts/approvedClientContext";
import RowApprovedClient from "./RowApprovedClient";
export default function TableApprovedClients() {
    const { approvedClients, setApprovedClients } = useContext(approvedClientContext);
    return (
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Categoría</Table.HeadCell>
                    <Table.HeadCell>RUC</Table.HeadCell>
                    <Table.HeadCell>Razón Social</Table.HeadCell>
                    <Table.HeadCell>Nombres y Apellidos</Table.HeadCell>
                    <Table.HeadCell>DNI</Table.HeadCell>
                    <Table.HeadCell>Cargo</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        approvedClients && approvedClients.map((cliente) => (
                            <RowApprovedClient cliente={cliente} key={cliente.id}/>
                        ))
                    }
                    
                </Table.Body>
            </Table>
        </div>
    );
}
