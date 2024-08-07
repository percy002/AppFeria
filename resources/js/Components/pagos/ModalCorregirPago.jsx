import { usePage } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { useRef } from "react";
import Countdown from "../Countdown";
import HeaderModal from "../UI/HeaderModal";

function ModalCorregirPago({
    stands,
    reservationId,
    updatePaymentState,
    updatePayment,
    updatePaymentVerified,
}) {
    const fileInput = useRef();
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);

    const handleClickCorregirPago = () => {
        const data = new FormData();
        data.append("stands", stands);
        data.append("reservationId", reservationId);

        const file = fileInput.current.files[0];
        data.append("file", file);

        axios
            .post(route("payment.update"), data)
            .then((response) => {
                if (response.status == 200) {
                    setMessage("Pago corregido con éxito");
                    updatePaymentState(true);
                    setOpenModal(false);
                    updatePayment({ file: response.data.file });
                    updatePaymentVerified("corregido");
                } else {
                    console.error("Ah ocurrido un error al pagar:", response);
                }
            })
            .catch((error) => {
                console.error(
                    "No se recibió ninguna respuesta:",
                    error.request
                );
            });
    };

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="bg-primary text-white enabled:hover:bg-primary"
            >
                Corregir Pago
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size="4xl"
            >
                <Modal.Header className="text-center">
                    <HeaderModal />
                    Estás a punto de corregir este pago. Por favor, confirma que
                    todos los detalles son correctos antes de proceder.
                </Modal.Header>
                <Modal.Body>
                    {message && <p>{message}</p>}
                    {!message && (
                        <>
                            <div className="space-y-6">
                                <p>
                                    usuario: {auth.cliente.name}{" "}
                                    {auth.cliente.last_name}
                                </p>
                                <p>Categoría: {stands[0].category.name}</p>
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
                            <div className="">
                                <div>
                                    <h2>Bancos</h2>
                                    <ul className="flex justify-between">
                                        <li>
                                            Caja Cusco
                                            <ul>
                                                <li>
                                                    Número de cuenta: 1234567890
                                                </li>
                                                <li>
                                                    Código de cuenta
                                                    interbancario (CCI): ABC123
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                {/* <Countdown time={2} /> */}
                            </div>

                            <div className="mt-2">
                                <div className="my-2 block">
                                    <Label
                                        htmlFor="file-upload"
                                        value="Adjunte el voucher de pago"
                                    />
                                    <span className="text-red-600">
                                        (Solo PDF y JPG permitidos)
                                    </span>
                                </div>
                                <FileInput id="file-upload" ref={fileInput} />
                            </div>
                        </>
                    )}
                </Modal.Body>
                {!message && (
                    <Modal.Footer className="flex justify-center gap-16 w-full">
                        <div className="flex justify-center"></div>
                        <Button
                            onClick={handleClickCorregirPago}
                            className="bg-primary text-white enabled:hover:bg-primary"
                        >
                            Pagar
                        </Button>
                        <Button
                            onClick={() => setOpenModal(false)}
                            className="bg-primary text-white enabled:hover:bg-primary"
                        >
                            Cancelar
                        </Button>
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
}

export default ModalCorregirPago;
