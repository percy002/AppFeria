"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

const ModalCustomTheme = {
    root: {
        base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
        show: {
            on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
            off: "hidden",
        },        
        
    },
    content: {
        base: "relative h-full w-full p-4 md:h-auto",
        inner: "relative flex h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700",
    },
    body: {
        base: "flex-1 overflow-auto p-6",
        popup: "pt-0",
    },
   
};
function ModalVerPDF({ PDFcomponent, buttonName }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>{buttonName}</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size={"7xl"}
                className="h-[90vh]"
                theme={ModalCustomTheme}
            >
                <Modal.Header>Factura</Modal.Header>
                <Modal.Body>
                    <PDFViewer style={{ width: "100%", height: "100%" }}>
                        <PDFcomponent />
                    </PDFViewer>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalVerPDF;
