import {
    Button,
    Modal,
    Label,
    Select,
    Textarea,
    FileInput,
} from "flowbite-react";

import { useState, useRef } from "react";
import Swal from "sweetalert2";
const ModalPaymentByTransfer = ({
    contractFile,
    stands,
    reservationId,
    updatePaymentState,
    setOpenModalPayment,
}) => {
    const [openModal, setOpenModal] = useState(false);
    const [errorFile, setErrorFile] = useState("");
    const [observaciones, setObservaciones] = useState("El pago no coincide");
    const [detalleObservaciones, setDetalleObservaciones] = useState("");
    const fileInput = useRef();

    const handleClickPagar = () => {
        const data = new FormData();
        data.append("stands", stands);
        data.append("reservationId", reservationId);

        const file = fileInput.current.files[0];
        if (!file) {
            setErrorFile("Debe adjuntar un archivo para continuar con el pago");
            return;
        }
        data.append("file", file);

        data.append("contractFile", contractFile);

        axios
            .post(route("pagar"), data)
            .then((response) => {
                if (response.status == 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    updatePaymentState(true);
                    setOpenModal(false);
                    setOpenModalPayment(false);
                } else {
                    console.error("Ah ocurrido un error al pagar:", response);
                }
            })
            .catch((error) => {
                console.error("No se recibió ninguna respuesta:", error);
            });
    };
    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                color="light"
                className="flex-1 px-3 py-1 bg-transparent text-black border-4 border-gray-500 hover:border-cyan-500 hover:bg-transparent button_payment_by_transfer"
            >
                <div className="flex flex-col h-full justify-around">
                    <p className="text-base">Pagar por Transferencia</p>
                    <img
                        src="/images/logos/caja_cusco_negro.png"
                        alt="logos bancos"
                        className="h-16"
                    />
                </div>
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Transferencia Bancaria</Modal.Header>
                <Modal.Body>
                    <div className="">
                        <h4 className="">Cuentas Bancarias</h4>
                        <ul className="flex justify-between">
                            <li>
                                Caja Cusco:
                                <ul>
                                    <li>Número de cuenta: 12345XXXX</li>
                                    <li>
                                        Código de cuenta interbancario (CCI):
                                        ABC123
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="mt-2">
                            <div className="my-2 block">
                                <Label
                                    htmlFor="file-upload"
                                    value="Adjunte el voucher de pago"
                                />
                                <span className="text-red-600">
                                    (Solo PDF y JPG permitidos)
                                </span>
                            </div>
                            <FileInput id="file-upload" ref={fileInput} required/>
                            <span>{errorFile}</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex justify-between w-full">
                        <Button
                            className="bg-primary text-white enabled:hover:bg-primary"
                            onClick={handleClickPagar}
                        >
                            Pagar
                        </Button>
                        <Button
                            className="bg-primary text-white enabled:hover:bg-primary"
                            onClick={() => setOpenModal(false)}
                        >
                            Cancelar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPaymentByTransfer;
