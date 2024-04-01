import { Button, Modal, Label, Select, Textarea } from "flowbite-react";
import { useState } from "react";
const ModalObservarPago = ({payment,updateState,updatePaymentStatusObs}) => {
    const [openModal, setOpenModal] = useState(false);
    const [observaciones, setObservaciones] = useState("El pago no coincide");
    const [detalleObservaciones, setDetalleObservaciones] = useState("");

    console.log(updatePaymentStatusObs);
    const handleObservarPago = () => {
        const data = {
            payment_id: payment.id,
            observaciones,
            detalleObservaciones
        };
        axios
            .post(route("observarPago"), data)
            .then((response) => {
                updatePaymentStatusObs({status:"observado",observations:observaciones,observations_detail:detalleObservaciones});
                setOpenModal(false);
                updateState(false);
            })
            .catch((error) => {
                // Handle error
            });
    };
   
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                Agregar Observación
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Observaciones en el pago de reserva</Modal.Header>
                <Modal.Body>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="countries"
                                value="Seleccione una observación"
                            />
                        </div>
                        <Select
                            id="countries"
                            required
                            onChange={(e) => setObservaciones(e.target.value)}
                        >
                            <option>El pago no coincide</option>
                            <option>
                                No se abono a la cuenta(verifique con su banco)
                            </option>
                            <option>otro</option>
                        </Select>
                    </div>

                    {observaciones == "otro" && (
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="observaciones"
                                    value="Agregar Observaciones"
                                />
                            </div>
                            <Textarea
                                id="observaciones"
                                placeholder="Deja una observación"
                                required
                                rows={4}
                                onChange={(e) => {
                                    setDetalleObservaciones(e.target.value);
                                }}
                                value={detalleObservaciones}
                            />
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleObservarPago}>
                        Agregar observación de pago
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalObservarPago;
