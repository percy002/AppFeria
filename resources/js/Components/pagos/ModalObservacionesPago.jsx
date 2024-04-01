import { Button,Modal } from "flowbite-react";
import { useState } from "react";
const ModalObservacionesPago = ({paymentStatus}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
            <Button onClick={() => setOpenModal(true)}>
                Ver Observación
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Observaciones en el pago de reserva</Modal.Header>
                <Modal.Body>
                    <div className="max-w-md">
                        <h4>Observación:</h4>
                        <p>{paymentStatus.observations}</p>
                        <p>{paymentStatus.observations_detail}</p>
                    </div>

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}
export default ModalObservacionesPago