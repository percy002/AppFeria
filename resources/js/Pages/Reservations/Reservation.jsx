import ModalPagos from "@/Components/pagos/ModalPagos";
import ModalVerReserva from "@/Components/reservas/ModalVerReserva";
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
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {reservations &&
                            reservations.map((reservation, index) => (
                                <Table.Row
                                    key={reservation.id}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{reservation.date}</Table.Cell>
                                    <Table.Cell>{reservation.total}</Table.Cell>
                                    <Table.Cell>
                                        <div className="flex justify-between">
                                            <ModalVerReserva
                                                stands={reservation.stands}
                                            />
                                            <ModalPagos
                                                stands={reservation.stands}
                                                reservationId={reservation.id}
                                            />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                    </Table.Body>
                </Table>
            </div>
        </AuthenticatedLayout>
    );
}
export default Reservation;
