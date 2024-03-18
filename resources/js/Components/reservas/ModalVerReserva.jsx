import { usePage,router } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
function ModalVerReserva({ stands }) {
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);

    // const idCliente = auth.user.client.id;
    

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Ver</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>
                    Stands Rservados
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
                        </>
                    )}
                </Modal.Body>
                {!message && (
                    <Modal.Footer className="">
                        <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                        >
                            cerrar
                        </Button>
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
}

export default ModalVerReserva;
