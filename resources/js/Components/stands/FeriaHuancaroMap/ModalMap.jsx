
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
const ModalMap = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>ver mapa</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size={"7xl"}>
        <Modal.Header>Mapa Feria Huancaro</Modal.Header>
        <Modal.Body>
        <iframe src="images/huancaro.pdf" width="100%" height="500px"></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}
export default ModalMap