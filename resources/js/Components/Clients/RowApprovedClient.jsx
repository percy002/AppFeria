import { useEffect, useState, useContext } from "react";
import { Table } from "flowbite-react";
import approvedClientContext from "@/Contexts/approvedClientContext";
import ClientsEvaluatedContext from "@/Contexts/ClientEvaluatedContext";
function RowApprovedClient({ cliente }) {
    const [approved, setApproved] = useState(cliente.approved);
    const [evaluated, setEvaluated] = useState(cliente.evaluated);

      
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
                    
                    
                </>
            ) : (
                <Table.Cell colSpan="8">Cargando...</Table.Cell>
            )}
        </Table.Row>
        
    );
}
export default RowApprovedClient;
