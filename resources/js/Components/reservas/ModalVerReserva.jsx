import { usePage, router } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import HeaderModal from "../UI/HeaderModal";
function ModalVerReserva({ stands, payment }) {
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;

    return (
        <>
            <Button onClick={() => setOpenModal(true)} className="bg-primary text-white">Ver</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header className="flex-grow text-gray-700 font-bold text-center">
                    <HeaderModal />
                    Stands Reservados
                </Modal.Header>
                <Modal.Body>
                    <div className="flex justify-between mb-2">
                        <p>
                            <span className="text-primary font-bold">Usuario: </span>
                            {auth.cliente.name}{" "}
                            {auth.cliente.last_name}
                        </p>
                        <p><span className="text-primary font-bold">Categoría:</span> {stands[0]?.category?.name}</p>
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
                    {payment && payment.file && (
                        <div className="">
                            <p>pagado</p>
                            {(() => {
                                const fileExtension = payment.file
                                    .split(".")
                                    .pop()
                                    .toLowerCase();

                                if (
                                    ["jpg", "jpeg", "png", "gif"].includes(
                                        fileExtension
                                    )
                                ) {
                                    // Es una imagen
                                    return (
                                        <img
                                            src={`public/storage/${payment.file}`}
                                            alt="Payment"
                                        />
                                    );
                                } else if (fileExtension === "pdf") {
                                    // Es un PDF
                                    return (
                                        <embed
                                            src={`public/storage/${payment.file}`}
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
                </Modal.Body>
                <Modal.Footer className="flex justify-center">
                    <Button className="bg-primary text-white" onClick={() => setOpenModal(false)}>
                        cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalVerReserva;
