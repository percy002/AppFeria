import RowClientPayment from "./RowClientPayment"
import { Table } from "flowbite-react";
export const TableClientPayments = ({clientes}) => {
    // console.log(clientes.length);
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
                    <Table.HeadCell>Opciones</Table.HeadCell>
                    <Table.HeadCell>Revision de Pagos</Table.HeadCell>
                    <Table.HeadCell>Documentos</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        clientes && clientes.length>0 && clientes.map((cliente) => (
                            <RowClientPayment cliente={cliente} key={cliente.id}/>
                        ))
                    }
                    
                </Table.Body>
            </Table>
        </div>
  )
}