import { usePage } from "@inertiajs/react";
import { Button, Card, Modal, Label, Textarea, Select } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import ModalObservarPago from "./ModalObservarPago";
import Swal from "sweetalert2";

function ModalValidarPagos({ stands, payment, updatePaymentStatus,clientId }) {
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    
    console.log(stands);
    const handleValidarPago = () => {
        const data = {
            payment_id: payment.id,
            client_id: clientId,
        };

        Swal.fire({
            title: "¿Esta seguro de confirmar este pago?",
            text: "Se Creara un credencial, factura y contrato para el usuario seleccionado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Confirmar!",
            cancelButtonText: "Cancelar",

          }).then((result) => {
            if (result.isConfirmed) {
                axios
                .post(route("validarPago"), data)
                .then((response) => {
                    setOpenModal(false);
                    updatePaymentStatus({status:"aceptado"});
                    Swal.fire({
                        title: "Pago Aceptado",
                        text: "El pago ha sido aceptado correctamente!",
                        icon: "success"
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Error!",
                        text: "Ha ocurrido un error al intentar validar el pago, por favor intente nuevamente.",
                        icon: "error"
                    });
                });
            }
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
                    {/* validar pago y observar pago solo si no se valido el pago previamente */}
                    {/* solo se mostraran los botones si el pago es reciente o el pago es corregido */}
                    <Button color="blue" onClick={handleValidarPago}>
                        Validar Pago
                    </Button>
                    <ModalObservarPago payment={payment} updateState={setOpenModal} updatePaymentStatusObs={updatePaymentStatus}/>
                    <Button color="success" onClick={() => setOpenModal(false)}>
                        cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalValidarPagos;
