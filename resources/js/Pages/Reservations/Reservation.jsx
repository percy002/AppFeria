import ModalPagos from "@/Components/pagos/ModalPagos";
import ModalVerReserva from "@/Components/reservas/ModalVerReserva";
import RowReserva from "@/Components/reservas/RowReserva";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Table } from "flowbite-react";
function Reservation({ auth, reservations }) {
    return (
        <AuthenticatedLayout user={auth.user} client={auth.cliente}>
            <div className="overflow-x-auto container mx-auto">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>fecha</Table.HeadCell>
                        <Table.HeadCell>total</Table.HeadCell>
                        <Table.HeadCell className="flex justify-center">
                            Opciones
                        </Table.HeadCell>
                        <Table.HeadCell align="center">Estado del Pago</Table.HeadCell>
                        <Table.HeadCell align="center">Documentos</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {reservations &&
                            reservations.map((reservation, index) => (
                                <RowReserva reservation={reservation} key={reservation.id}/>
                            ))}
                    </Table.Body>
                </Table>
            </div>
        </AuthenticatedLayout>
    );
}
export default Reservation;
