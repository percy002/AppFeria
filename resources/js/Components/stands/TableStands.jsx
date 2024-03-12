import { Table,Button } from "flowbite-react";
import axios from 'axios';
import { useEffect, useState } from "react";
function TableStands({}) {

    const [stands,setStands]= useState();
    useEffect(()=>{
        const getStands = async () => {
            try {
                // Realizar la solicitud PUT utilizando Axios
                const response = await axios.get(
                    `/stands/getStands`,
                    null
                );
    
                if (response.status === 200) {
                    const data = response.data;
                    setStands(data.stands);
                } else {
                    console.error(
                        "Error al obtener los stands:",
                        response.statusText
                    );
                }
            } catch (error) {
                console.error(
                    "Error al obtener los stands:",
                    error
                );
            }
        };

        getStands().catch();
    },[]) 

    return (
        <div className="overflow-x-auto container mx-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Bloque</Table.HeadCell>
                    <Table.HeadCell>Stand</Table.HeadCell>
                    <Table.HeadCell>Precio</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        stands?.map(stand => (
                            <Table.Row key={stand.id}>
                                <Table.Cell>{stand.block}</Table.Cell>
                                <Table.Cell>{stand.name}</Table.Cell>
                                <Table.Cell>{stand.price}</Table.Cell>
                                <Table.Cell>
                                    <Button href={route('reservaciones.crear',1)}>Reservar</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }   
                    
                </Table.Body>
            </Table>
        </div>
    );
}
export default TableStands;
