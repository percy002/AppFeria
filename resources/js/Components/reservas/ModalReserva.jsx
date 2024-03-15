import { usePage } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";

function ModalReserva({ stands }) {
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;

    const idCliente = auth.user.client.id;
    const handleClickReserva = () => {
        axios
            .post(route("reservaciones.crear"), { stands, idCliente })
            .then((response) => {
                // Handle the response
            })
            .catch((error) => {
                // Handle the error
            });
    };

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Reservar</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>
                    Estás a punto de reservar este stand Por favor, confirma que
                    todos los detalles son correctos antes de proceder.{" "}
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer className="">
                    <Button onClick={handleClickReserva}>Aceptar</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalReserva;
