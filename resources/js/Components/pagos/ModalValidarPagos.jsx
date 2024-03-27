import { usePage } from "@inertiajs/react";
import { Button, Card, Modal, Label, Textarea, Select } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import ModalObservarPago from "./ModalObservarPago";

function ModalValidarPagos({ stands, payment, updatePaymentStatus }) {
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [detalleObservaciones, setDetalleObservaciones] = useState(
        payment?.payment_status[payment.payment_status.length - 1]?.description
    );
    const [observaciones, setObservaciones] = useState();

    console.log(payment.payment_status[payment.payment_status.length - 1]);

    const handleValidarPago = () => {
        const data = {
            payment_id: payment.id,
            observaciones,
            detalleObservaciones,
        };
        axios
            .post(route("validarPago"), data)
            .then((response) => {
                setOpenModal(false);
                updatePaymentStatus("Aceptado");
            })
            .catch((error) => {
                // Handle error
            });
    };
    const handleObservarPago = () => {
        const data = {
            payment_id: payment.id,
            observaciones,
        };
        axios
            .post(route("observarPago"), data)
            .then((response) => {
                setOpenModal(false);
                updatePaymentStatus("observado");
            })
            .catch((error) => {
                // Handle error
            });
    };
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Ver Pago</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size={"7xl"}
            >
                <Modal.Header>Validar Pago</Modal.Header>
                <Modal.Body>
                    <div className="flex justify-center flex-col md:flex-row">
                        <div className="flex-1">
                            <div className="space-y-6">
                                <p>
                                    usuario: {auth.cliente.name}{" "}
                                    {auth.cliente.last_name}
                                </p>
                                <p>Categoría: {stands[0]?.category?.name}</p>
                            </div>
                            {stands &&
                                stands.map((stand) => (
                                    <Card
                                        className="m-1 card_padding px-8"
                                        key={stand.id}
                                    >
                                        <div className="flex justify-between">
                                            <p>bloque : {stand.block}</p>
                                            <p>Stand : {stand.name}</p>

                                            <p>precio : {stand.price}</p>
                                        </div>
                                    </Card>
                                ))}
                            <div className="flex justify-between p-8">
                                <div className="">
                                    <p>Cantidad: {stands.length} </p>
                                </div>
                                <div className="">
                                    <p>
                                        Total:{" "}
                                        {stands.reduce(
                                            (sum, stand) => sum + stand.price,
                                            0
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            {payment && (
                                <div className="">
                                    <p>pagado</p>
                                    {(() => {
                                        const fileExtension = payment.file
                                            .split(".")
                                            .pop()
                                            .toLowerCase();

                                        if (
                                            [
                                                "jpg",
                                                "jpeg",
                                                "png",
                                                "gif",
                                            ].includes(fileExtension)
                                        ) {
                                            // Es una imagen
                                            return (
                                                <img
                                                    src={`http://localhost:8000/storage/${payment.file}`}
                                                    alt="Payment"
                                                    className="w-[80%]"
                                                />
                                            );
                                        } else if (fileExtension === "pdf") {
                                            // Es un PDF
                                            return (
                                                <embed
                                                    src={`http://localhost:8000/storage/${payment.file}`}
                                                    type="application/pdf"
                                                    width="100%"
                                                    height="600px"
                                                />
                                            );
                                        } else {
                                            // No es ni una imagen ni un PDF
                                            return <p>Archivo no soportado</p>;
                                        }
                                    })()}
                                </div>
                            )}
                        </div>
                    </div>

                    

                    
                </Modal.Body>
                <Modal.Footer className="">
                    <Button color="blue" onClick={handleValidarPago}>
                        Validar Pago
                    </Button>
                    <ModalObservarPago/>
                    <Button color="success" onClick={() => setOpenModal(false)}>
                        cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalValidarPagos;
