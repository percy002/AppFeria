import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";


function FichaRucModal({pdf = "/pdf/plano_huancaro.pdf", text = "Feria Huancaro, Cusco"}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                size={"xs"}
                className="pt-0 px-4 bg-secondary rounded-full text-primary font-bold text-xl hover:bg-primary enabled:hover:bg-primary hover:text-white"
            >
                <span className="">{text}</span>
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size={"7xl"}
            >
                <Modal.Header className="h-fit p-0">{pdf}</Modal.Header>
                <Modal.Body>
                    <iframe src={pdf} className="w-full h-[75vh]"></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default FichaRucModal;
