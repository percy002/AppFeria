import { Table, Button } from "flowbite-react";
import ModalVerReserva from "./ModalVerReserva";
import ModalPagos from "../pagos/ModalPagos";
import { useState } from "react";
import ModalCorregirPago from "../pagos/ModalCorregirPago";
import ModalObservacionesPago from "../pagos/ModalObservacionesPago";
import { HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";
const RowReserva = ({ reservation }) => {
    const [reservationState, setReservationState] = useState(
        reservation.enable ? true : false
    );
    const [paymentState, setPaymentState] = useState(
        reservation.payment ? true : false
    );

    const [paymentVerified, setPaymentVerified] = useState(
        reservation.payment?.payment_status?.[
            reservation.payment.payment_status.length - 1
        ]?.status || false
    );

    const [payment, setPayment] = useState(reservation.payment);

    const updatePayment = (updates) => {
        setPayment((prev) => ({ ...prev, ...updates }));
    };
    const HandleButtonAnularReserva = () => {
    Swal.fire({
        title: '¿Estás seguro que desea eliminar esta reserva?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, eliminar reserva!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .delete(route("reservaciones.eliminar"), {
                    data: { id: reservation.id },
                })
                .then((response) => {
                    if (response.status == 200) {
                        setReservationState(false);
                        Swal.fire(
                            '¡Eliminado!',
                            'Tu reserva ha sido eliminada.',
                            'success'
                        )
                    }
                })
                .catch((error) => {
                    log(error);
                });
        }
    })
};

    return (
        <Table.Row
            key={reservation.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800 font-bold"
        >
            <Table.Cell>{reservation.date}</Table.Cell>
            <Table.Cell className="flex gap-2 items-center h-full">
                S/. {reservation.total}.00
                {
                    <ModalVerReserva
                        stands={reservation.stands}
                        payment={payment}
                    />
                }
            </Table.Cell>
            <Table.Cell
                align="center"
                className="text-lg text-primary font-bold"
            >
                <div className="flex flex-col gap-1 items-center">
                    {paymentState ? (
                        paymentVerified == "aceptado" ? (
                            <span className="text-green-500">Aceptado</span>
                        ) : paymentVerified == "observado" ? (
                            <div className="flex flex-col gap-1">
                                <span className="text-red-800">Observado</span>
                                <ModalObservacionesPago
                                    paymentStatus={
                                        payment.payment_status[
                                            payment.payment_status.length - 1
                                        ]
                                    }
                                />
                                <ModalCorregirPago
                                    stands={reservation.stands}
                                    reservationId={reservation.id}
                                    updatePaymentState={setPaymentState}
                                    updatePayment={updatePayment}
                                    updatePaymentVerified={setPaymentVerified}
                                />
                            </div>
                        ) : (
                            <span className="text-green-500 text-xl">
                                {paymentVerified}
                            </span>
                        )
                    ) : !reservationState ? (
                        "Reserva Anulada"
                    ) : (
                        "pendiente de pago"
                    )}
                </div>
            </Table.Cell>
            <Table.Cell align="center">
                <div className="flex flex-col gap-2">
                    {paymentState && paymentVerified == "aceptado" && (
                        <>
                            <Button
                                as="a"
                                href={route("generateFotoCheckPDF", {
                                    clientId: reservation.cliente_id,
                                })}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white enabled:hover:bg-primary"
                            >
                                Credenciales
                            </Button>
                            <Button
                                as="a"
                                href={route("generateInvoicePDF", {
                                    clientId: reservation.cliente_id,
                                    reservationId: reservation.id,
                                })}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white enabled:hover:bg-primary"
                            >
                                Recibo
                            </Button>
                        </>
                    )}
                    {reservation && (
                        <Button
                            as="a"
                            href={route("generateContractPDF", {
                                clientId: reservation.cliente_id,
                            })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white enabled:hover:bg-primary"
                        >
                            Contrato
                        </Button>
                    )}
                </div>
            </Table.Cell>
            <Table.Cell>
                <div className="flex justify-center gap-5">
                    {!paymentState && reservationState && (
                        <ModalPagos
                            stands={reservation.stands}
                            reservationId={reservation.id}
                            updatePaymentState={setPaymentState}
                        />
                    )}
                    {!paymentState && reservationState && (
                        <Button
                            onClick={HandleButtonAnularReserva}
                            className="bg-gray-500 text-white enabled:hover:bg-gray-600"
                        >
                            <HiTrash className="h-6 w-6" />
                        </Button>
                    )}
                </div>
            </Table.Cell>
        </Table.Row>
    );
};
export default RowReserva;
