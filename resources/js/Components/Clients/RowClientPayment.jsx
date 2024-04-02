import { useState, useEffect } from "react";
import ModalPagos from "../pagos/ModalPagos";
import ModalValidarPagos from "../pagos/ModalValidarPagos";
import ModalVerReserva from "../reservas/ModalVerReserva";
import { Table } from "flowbite-react";
import ModalObservacionesPago from "../pagos/ModalObservacionesPago";

const RowClientPayment = ({ cliente }) => {
    const lastPaymentStatus =
        cliente.reservation?.payment?.payment_status?.[
            cliente.reservation?.payment?.payment_status?.length - 1
        ];

    const [paymentStatus, setPaymentStatus] = useState(lastPaymentStatus);

    function updatePaymentStatus(updates) {
        setPaymentStatus((prevStatus) => ({ ...prevStatus, ...updates }));
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
                    <Table.Cell>
                        {cliente.reservation && (
                            <ModalValidarPagos
                                stands={cliente.reservation.stands}
                                payment={cliente.reservation.payment}
                                updatePaymentStatus={updatePaymentStatus}
                            />
                        )}
                    </Table.Cell>
                    <Table.Cell>
                        {paymentStatus && paymentStatus.status == "observado" ? (
                            <ModalObservacionesPago
                                paymentStatus={paymentStatus}
                            />
                        ) : (
                            paymentStatus && paymentStatus.status ? paymentStatus.status : "En Proceso"
                        )}
                    </Table.Cell>
                </>
            ) : (
                <Table.Cell colSpan="8">Cargando...</Table.Cell>
            )}
        </Table.Row>
    );
};
export default RowClientPayment;
