import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import HeaderModal from "../UI/HeaderModal";
const ModalObservacionesPago = ({ paymentStatus }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="bg-primary text-white enabled:hover:bg-primary"
            >
                Ver Observación
            </Button>
            <Modal
                show={openModal}
                onClose={() => setOpenModal(false)}
                dismissible
            >
                <Modal.Header className="text-center">
                    <HeaderModal />
                    Observaciones en el pago de reserva
                </Modal.Header>
                <Modal.Body>
                    <div className="max-w-md">
                        <h4 className="text-primary font-bold">Observación: </h4>
                        <p>{paymentStatus.observations}</p>
                        <p>{paymentStatus.observations_detail}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-center">
                    <Button className="text-white bg-primary enabled:hover:bg-primary" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalObservacionesPago;
