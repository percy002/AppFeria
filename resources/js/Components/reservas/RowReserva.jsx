import { Table, Button } from "flowbite-react";
import ModalVerReserva from "./ModalVerReserva";
import ModalPagos from "../pagos/ModalPagos";
import { useState } from "react";
import ModalCorregirPago from "../pagos/ModalCorregirPago";
import ModalObservacionesPago from "../pagos/ModalObservacionesPago";
const RowReserva = ({ reservation }) => {
    const [reservationState, setReservationState] = useState(
        reservation.enable ? true : false
    );
    //estado pagado
    const [paymentState, setPaymentState] = useState(
        reservation.payment ? true : false
    );

    const [paymentVerified, setPaymentVerified] = useState(
        reservation.payment?.payment_status?.[
            reservation.payment.payment_status.length - 1
        ]?.status || false
    );

    const [payment,setPayment] = useState(reservation.payment)

    const updatePayment = (updates) => {
        setPayment(prev => ({...prev,...updates}))
    }
    //estado de la revision del pago
    console.log(payment);
    const HandleButtonAnularReserva = () => {
        axios
            .delete(route("reservaciones.eliminar"), {
                data: { id: reservation.id },
            })
            .then((response) => {
                if (response.status == 200) {
                    setReservationState(false);
                }
                // console.log(response.status);
            })
            .catch((error) => {
                // Handle error
            });
    };
    return (
        <Table.Row
            key={reservation.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
            <Table.Cell>{reservation.date}</Table.Cell>
            <Table.Cell>{reservation.total}</Table.Cell>
            <Table.Cell>
                <div className="flex justify-center gap-5">
                    {
                        <ModalVerReserva
                            stands={reservation.stands}
                            payment={payment}
                        />
                    }
                    {!paymentState && reservationState && (
                        <ModalPagos
                            stands={reservation.stands}
                            reservationId={reservation.id}
                            updatePaymentState={setPaymentState}
                        />
                    )}
                    {!paymentState && reservationState && (
                        <Button
                            color="failure"
                            onClick={HandleButtonAnularReserva}
                        >
                            Anular Reserva
                        </Button>
                    )}
                </div>
            </Table.Cell>
            <Table.Cell align="center">
                {paymentState ? (
                    paymentVerified == "aceptado" ? (
                        <span className="text-green-500">Aceptado</span>
                    ) : paymentVerified == "observado" ? (
                        <div className="">
                            <span className="text-red-800">Observado</span>
                            <ModalObservacionesPago paymentStatus={payment.payment_status[payment.payment_status.length - 1]}/>
                            <ModalCorregirPago
                                stands={reservation.stands}
                                reservationId={reservation.id}
                                updatePaymentState={setPaymentState}
                                updatePayment={updatePayment}
                                updatePaymentVerified = {setPaymentVerified}
                            />
                        </div>
                    ) : (
                        <span className="text-green-500">{paymentVerified}</span>
                    )
                ) : !reservationState ? (
                    "Reserva Anulada"
                ) : (
                    "pendiente de pago"
                )}
            </Table.Cell>
        </Table.Row>
    );
};
export default RowReserva;
