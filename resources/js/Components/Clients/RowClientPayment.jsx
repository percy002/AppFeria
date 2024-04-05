import { useState, useEffect } from "react";
import ModalValidarPagos from "../pagos/ModalValidarPagos";
import { Table } from "flowbite-react";
import ModalObservacionesPago from "../pagos/ModalObservacionesPago";
import { Button } from "flowbite-react";

const RowClientPayment = ({ cliente }) => {
    const lastPaymentStatus =
        cliente.reservation?.payment?.payment_status?.[
            cliente.reservation?.payment?.payment_status?.length - 1
        ];

    const [paymentStatus, setPaymentStatus] = useState(lastPaymentStatus);

    function updatePaymentStatus(updates) {
        setPaymentStatus((prevStatus) => ({ ...prevStatus, ...updates }));
    }
    console.log(cliente.reservation[0].stands);

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
                                clientId={cliente.id}
                            />
                        )}
                    </Table.Cell>
                    <Table.Cell>
                        {paymentStatus &&
                        paymentStatus.status == "observado" ? (
                            <ModalObservacionesPago
                                paymentStatus={paymentStatus}
                            />
                        ) : paymentStatus && paymentStatus.status ? (
                            paymentStatus.status
                        ) : (
                            "En Proceso"
                        )}
                    </Table.Cell>
                    <Table.Cell>
                        {paymentStatus &&
                            paymentStatus.status == "aceptado" &&(
                                <div className="flex flex-col gap-2">
                                    <Button
                                        as="a"
                                        href={route("generateInvoicePDF", { clientId: cliente.reservation.cliente_id })}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                    >
                                        Fotocheck
                                    </Button>
                                    <Button
                                        as="a"
                                        href={route("generateInvoicePDF", { clientId: cliente.reservation.cliente_id })}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                    >
                                        Recibo
                                    </Button>
                                    <Button
                                        as="a"
                                        href={route("generateContractPDF", { clientId: cliente.reservation.cliente_id })}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                    >
                                        Contrato
                                    </Button>
                                    
                                </div>
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
