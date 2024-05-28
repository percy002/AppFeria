import { Table } from "flowbite-react";
import RowClient from "../RowClient";
export default function TableClients({clientes}) {
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
                    <Table.HeadCell>Ficha RUC</Table.HeadCell>
                    <Table.HeadCell>En Evaluación</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        clientes.map((cliente) => (
                            <RowClient cliente={cliente} key={cliente.id}/>
                        ))
                    }
                    
                </Table.Body>
            </Table>
        </div>
    );
}
