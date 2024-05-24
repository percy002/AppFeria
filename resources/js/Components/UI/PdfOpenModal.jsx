import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";


function PdfOpenModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                size={"xs"}
                className="pt-0 px-4 bg-secondary rounded-full text-primary font-bold text-xl hover:bg-primary enabled:hover:bg-primary hover:text-white"
            >
                <HiLocationMarker className="h-6 w-6 mr-2" />
                <span className="text-lg">Feria Huancaro, Cusco</span>
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size={"7xl"}
            >
                <Modal.Header className="h-fit p-0"></Modal.Header>
                <Modal.Body>
                    <iframe src="/pdf/plano_huancaro.pdf" className="w-full h-[75vh]"></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default PdfOpenModal;
