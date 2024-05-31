import { useState, useEffect } from "react";
import ModalValidarPagos from "../pagos/ModalValidarPagos";
import { Table, Button } from "flowbite-react";
import ModalObservacionesPago from "../pagos/ModalObservacionesPago";

const RowClientPayment = ({ cliente }) => {
    const lastPaymentStatus =
        cliente.reservation[0]?.payment?.payment_status?.[
            cliente.reservation[0]?.payment?.payment_status?.length - 1
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
                        {cliente.reservation && cliente.reservation.length > 0 && (
                            <ModalValidarPagos
                                stands={cliente.reservation[0].stands}
                                payment={cliente.reservation[0].payment}
                                updatePaymentStatus={updatePaymentStatus}
                                clientId={cliente.id}
                                name = {cliente.name + ' ' +cliente.last_name}
                                category = {cliente.category?.name}
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
                                        href={route("generateFotoCheckPDF", { clientId: cliente.reservation[0].cliente_id, reservationId: cliente.reservation[0].id })}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                    >
                                        Credenciales
                                    </Button>
                                    <Button
                                        as="a"
                                        href={route("generateInvoicePDF", { clientId: cliente.reservation[0].cliente_id, reservationId: cliente.reservation[0].id })}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                    >
                                        Recibo
                                    </Button>
                                    <Button
                                        as="a"
                                        href={route("generateContractPDF", { clientId: cliente.reservation[0].cliente_id })}
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
