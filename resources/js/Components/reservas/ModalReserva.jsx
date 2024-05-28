import { usePage, router } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import swal from "sweetalert2";
import HeaderModal from "../UI/HeaderModal";
function ModalReserva({ stands }) {
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);

    const idCliente = auth.user.client.id;
    const handleClickReserva = () => {
        axios
            .post(route("reservaciones.crear"), { stands, idCliente })
            .then((response) => {
                if (response.status == 201) {
                    swal.fire(
                        "Reservado con éxito",
                        "success"
                    );
                    setTimeout(() => {
                        setOpenModal(false);
                        router.get(`/reservaciones/` + idCliente);
                    }, 1500);
                } else {
                    swal.fire({
                        title: "Error!",
                        text: "Ha ocurrido un error al intentar reservar, por favor intente nuevamente.",
                        icon: "error",
                    });
                }
            })
            .catch((error) => {
                swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                });
            });
    };

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="bg-primary tet-white"
            >
                Reservar
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header className="flex-grow text-gray-700 font-bold text-center">
                    <HeaderModal />
                    Estás a punto de reservar Por favor, confirma que todos los
                    detalles son correctos antes de proceder.
                </Modal.Header>
                <Modal.Body>
                    {message && <p>{message}</p>}
                    {!message && (
                        <>
                            <div className="flex justify-between mb-2">
                                <p>
                                    <span className="text-primary font-bold">
                                        usuario:{" "}
                                    </span>
                                    {auth.cliente.name}
                                    {auth.cliente.last_name}
                                </p>
                                <p>
                                    <span className="text-primary font-bold">
                                        Categoria:{" "}
                                    </span>
                                    {stands[0].category}
                                </p>
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
                    <Modal.Footer className="flex justify-center gap-8">
                        <Button
                            onClick={handleClickReserva}
                            className="bg-primary text-white"
                        >
                            Aceptar
                        </Button>
                        <Button
                            className="bg-primary text-white"
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

export default ModalReserva;
