import { usePage } from "@inertiajs/react";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { FileInput, Label, Table, Button } from "flowbite-react";
import { useRef } from "react";
import Countdown from "../Countdown";
import ModalPagoOnline from "./ModalPagoOnline";
import { useEffect } from "react";
import ModalPaymentByTransfer from "./ModalPaymentByTransfer";
import HeaderModal from "../UI/HeaderModal";
import Swal from "sweetalert2";
function ModalPagos({ stands, reservationId, updatePaymentState }) {
    const fileInput = useRef();
    const contractFileUpload = useRef();
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);
    const [selectedContractFile, setSelectedContractFile] = useState(null);
    const [errorFile, setErrorFile] = useState("");

    const [dataPayment, setDataPayment] = useState({});

    useEffect(() => {
        const cliente = auth.cliente;
        const paymentAmount = stands.reduce(
            (sum, stand) => sum + stand.price,
            0
        );
        const dataPayment = {
            amount: paymentAmount * 100,
            email: cliente.email,
            name: cliente.company_name
                ? cliente.company_name
                : cliente.name + " " + cliente.last_name,
            stands: stands,
            reservationId: reservationId,
        };
        setDataPayment(dataPayment);
    }, []);
    const handleFileChange = (event) => {
        setSelectedContractFile(event.target.files[0]);
    };

    useEffect(() => {
        if (selectedContractFile) {
            const fileExtension = selectedContractFile.name.split(".").pop();
            if (fileExtension !== "pdf" && fileExtension !== "jpg") {
                setSelectedContractFile(null);
                alert("Solo se permiten archivos PDF y JPG");
            }
        }
    }, [selectedContractFile]);

    const handleClickPagar = () => {
        const data = new FormData();
        data.append("stands", stands);
        data.append("reservationId", reservationId);

        const file = fileInput.current.files[0];
        // cont contractFile = 
        if (!file) {
            setErrorFile("Debe adjuntar un archivo para continuar con el pago");
            return;
        }
        data.append("file", file);

        data.append("contractFile", selectedContractFile);

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
                className="bg-primary text-white enabled:hover:bg-primary"
            >
                Pagar
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => {
                    setOpenModal(false), setSelectedContractFile(null);
                }}
                size="7xl"
            >
                <Modal.Header className="flex-grow text-center text-gray-700 text-lg">
                    <HeaderModal />
                    Estás a punto de pagar por este stand. Por favor, confirma
                    que todos los detalles son correctos antes de proceder.
                </Modal.Header>
                <Modal.Body>
                    <div className="mt-0">
                        <Countdown time={2} />
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                        {/* DETALLE DE RESERVA */}
                        <div className="col-span-2 flex flex-col border-r-2 border-gray-500">
                            <h4>Información de la Reserva</h4>
                            <div className="space-y-3">
                                <p>
                                    usuario: {auth.cliente.name}
                                    {auth.cliente.last_name}
                                </p>
                                <p>Categoría: {stands[0].category.name}</p>
                            </div>
                            <div className="overflow-x-auto mt-2">
                                <p>Información de los stands</p>
                                <Table striped>
                                    <Table.Head>
                                        <Table.HeadCell>Bloque</Table.HeadCell>
                                        <Table.HeadCell>Stand</Table.HeadCell>
                                        <Table.HeadCell align="end">
                                            precio
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {stands &&
                                            stands.map((stand) => (
                                                <Table.Row
                                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                                    id={stand.name}
                                                    key={stand.id}
                                                >
                                                    <Table.Cell>
                                                        {stand.block}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {stand.name}
                                                    </Table.Cell>
                                                    <Table.Cell align="end">
                                                        {stand.price}
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                    </Table.Body>
                                </Table>
                                <div className="flex justify-between px-8">
                                    <div className="">
                                        <p>Cantidad: {stands.length} </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Total:{" "}
                                            {stands.reduce(
                                                (sum, stand) =>
                                                    sum + stand.price,
                                                0
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CUENTAS DE BANCOS Y PAGOS ONLINE*/}
                        <div className="col-span-3 flex-2 pl-2">
                            {/* ADJUNTAR PRUEBA PARA VER MÉTODOS DE PAGO */}
                            <div className="">
                                <div className="mt-2">
                                    <div className="my-2 block text-xl">
                                        <Label
                                            htmlFor="file-voucher_upload"
                                            value="Adjunte el contrato firmado "
                                            className="text-xl"
                                        />
                                        <span className="text-red-600">
                                            (Solo PDF y JPG permitidos)
                                        </span>
                                    </div>
                                    <FileInput
                                        onChange={handleFileChange}
                                        id="contract-file-upload"
                                        ref={contractFileUpload}
                                        accept=".pdf,.jpg"
                                    />
                                </div>
                            </div>
                            {selectedContractFile && (
                                <div className="justify-around mt-4">
                                    <p className="mb-4 font-bold text-xl">
                                        Pago por deposito o transferencia
                                    </p>
                                    <div className="flex gap-2">
                                        <img
                                            src="/images/logos/caja_cusco_negro.png"
                                            alt="logos bancos"
                                            className="h-16"
                                        />
                                        <div className="">
                                            <ul className="flex justify-between font-bold">
                                                <li>
                                                    <ul>
                                                        <li>
                                                            Número de cuenta:
                                                            12345XXXX
                                                        </li>
                                                        <li>
                                                            Código de cuenta
                                                            interbancario (CCI):
                                                            ABC123
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
                                        <FileInput
                                            id="file-upload"
                                            ref={fileInput}
                                            accept=".pdf,.jpg"

                                            required
                                        />
                                        <span>{errorFile}</span>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <Button onClick={handleClickPagar} className="bg-primary text-white enabled:hover:bg-primary px-8">
                                            Pagar
                                        </Button>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <div className="flex justify-center gap-8">
                                            <ModalPaymentByTransfer
                                                contractFile={
                                                    selectedContractFile
                                                }
                                                stands={stands}
                                                reservationId={reservationId}
                                                updatePaymentState={
                                                    updatePaymentState
                                                }
                                                setOpenModalPayment={
                                                    setOpenModal
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalPagos;
