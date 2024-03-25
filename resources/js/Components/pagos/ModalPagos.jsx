import { usePage } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { FileInput, Label } from 'flowbite-react';
import { useRef } from "react";

function ModalPagos({ stands,reservationId }) {

    const fileInput = useRef();
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);

    const handleClickPagar = () => {
        const data = new FormData();
        data.append('stands', stands);
        data.append('reservationId', reservationId);

        const file = fileInput.current.files[0];
        data.append('file', file);

        axios
            .post(route("pagar"), data)
            .then((response) => {
                if (response.status == 200) {
                    setMessage("Pagado con éxito"); 
                    setOpenModal(false)                   
                } else {
                    console.error(
                        "Ah ocurrido un error al pagar:",
                        response
                    );
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
            >
                <Modal.Header>
                    Estás a punto de pagar este stand Por favor, confirma que
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
                                <p>Categoria: ganaderia</p>
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

                            <div>
                                <div className="mb-2 block">
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
