import { Table } from "flowbite-react";
import RowEvaluatedClient from "./RowEvaluatedClient";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";
import { useContext } from "react";

export default function TableEvaluatedClients() {
    const { evaluatedClients, setEvaluatedClients } = useContext(ClientsEvaluatedContext);
    console.log(evaluatedClients);
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
                    <Table.HeadCell>Celular</Table.HeadCell>
                    <Table.HeadCell>Ficha Ruc</Table.HeadCell>
                    <Table.HeadCell>Aprobar Cliente</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        evaluatedClients && evaluatedClients.map((cliente) => (
                            <RowEvaluatedClient cliente={cliente} key={cliente.id}/>
                        ))
                    }
                    
                </Table.Body>
            </Table>
        </div>
    );
}
