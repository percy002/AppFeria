import { usePage } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { useRef } from "react";
import Countdown from "../Countdown";

function ModalPagos({ stands, reservationId, updatePaymentState }) {
    const fileInput = useRef();
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);

    const handleClickPagar = () => {
        const data = new FormData();
        data.append("stands", stands);
        data.append("reservationId", reservationId);

        const file = fileInput.current.files[0];
        data.append("file", file);

        axios
            .post(route("pagar"), data)
            .then((response) => {
                if (response.status == 200) {
                    setMessage("Pagado con éxito");
                    updatePaymentState(true);
                    setOpenModal(false);
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
            <Button onClick={() => setOpenModal(true)}>Pagar</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size="4xl"
            >
                <Modal.Header>
                    Estás a punto de pagar por este stand. Por favor, confirma
                    que todos los detalles son correctos antes de proceder.
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
                                <p>Categoria: {stands[0].category.name}</p>
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
                                            Banco de la Nacion:
                                            <ul>
                                                <li>Número de cuenta: 1234567890</li>
                                                <li>Código de cuenta interbancario (CCI): ABC123</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Banco Interbank:
                                            <ul>
                                                <li>Número de cuenta: 0987654321</li>
                                                <li>Código de cuenta interbancario (CCI): XYZ456</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <Countdown time={2} />
                                
                            </div>

                            <div className="mt-2">
                                <div className="my-2 block">
                                    <Label
                                        htmlFor="file-upload"
                                        value="Adjunte el voucher de pago"
                                    />
                                </div>
                                <FileInput id="file-upload" ref={fileInput} />
                            </div>
                        </>
                    )}
                </Modal.Body>
                {!message && (
                    <Modal.Footer className="">
                        <Button onClick={handleClickPagar}>Pagar</Button>
                        <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                        >
                            Cancelar
                        </Button>
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
}

export default ModalPagos;
