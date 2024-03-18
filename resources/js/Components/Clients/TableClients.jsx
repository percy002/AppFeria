import { Table } from "flowbite-react";
import RowClient from "../RowClient";
export default function TableClients({clientes}) {
    // console.log(clientes);
    return (
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Categoria</Table.HeadCell>
                    <Table.HeadCell>RUC</Table.HeadCell>
                    <Table.HeadCell>Razon Social</Table.HeadCell>
                    <Table.HeadCell>Nombres y Apellidos</Table.HeadCell>
                    <Table.HeadCell>DNI</Table.HeadCell>
                    <Table.HeadCell>Cargo</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>En Evaluacion</Table.HeadCell>
                    <Table.HeadCell>Estado</Table.HeadCell>
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
