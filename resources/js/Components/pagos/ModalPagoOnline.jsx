import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const ModalPagoOnline = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Pagar en linea</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <img src="../images/checkout-home.png" alt="" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPagoOnline;
