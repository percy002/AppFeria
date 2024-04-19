import { usePage } from "@inertiajs/react";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { FileInput, Label, Table, Radio } from "flowbite-react";
import { useRef } from "react";
import Countdown from "../Countdown";
import ModalPagoOnline from "./ModalPagoOnline";
import { useEffect } from "react";

function ModalPagos({ stands, reservationId, updatePaymentState }) {
    const fileInput = useRef();
    const contractFileUpload = useRef();
    const [openModal, setOpenModal] = useState(false);
    const { auth } = usePage().props;
    const [message, setMessage] = useState(null);
    const [selectedContractFile, setSelectedContractFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedContractFile(event.target.files[0]);
        console.log(selectedContractFile);
    };

    useEffect(()=>{
        if(selectedContractFile){
            const fileExtension = selectedContractFile.name.split('.').pop();
            if(fileExtension !== 'pdf' && fileExtension !== 'jpg'){
                setSelectedContractFile(null);
                alert('Solo se permiten archivos PDF y JPG');
            }
        }        
    },[selectedContractFile])

    const handleClickPagar = () => {
        const data = new FormData();
        data.append("stands", stands);
        data.append("reservationId", reservationId);

        const file = fileInput.current.files[0];
        data.append("file", file);

        axios
            .post(route("pagar"), data)
            .then((response) => {
                if (response.status == 200) {
                    setMessage("Pagado con éxito");
                    updatePaymentState(true);
                    setOpenModal(false);
                } else {
                    console.error("Ah ocurrido un error al pagar:", response);
                }
            })
            .catch((error) => {
                console.error(
                    "No se recibió ninguna respuesta:",
                    error.request
                );
            });
    };
    useEffect(() => {   
    }, []);
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Pagar</Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => {setOpenModal(false), setSelectedContractFile(null)}}
                size="7xl"
            >
                <Modal.Header>
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
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" id={stand.name}>
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
                                    <div className="my-2 block">
                                        <Label
                                            htmlFor="file-voucher_upload"
                                            value="Adjunte el contrato firmado "
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
                                <fieldset className="flex justify-around max-w-md gap-12 mt-4 p-8">
                                    <legend className="mb-4">
                                        Elija el método de pago
                                    </legend>
                                    <ModalPagoOnline />
                                </fieldset>
                            )}
                            {selectedContractFile && (
                                <div className="">
                                    <h4 className="">Cuentas Bancarias</h4>
                                    <ul className="flex justify-between">
                                        <li>
                                            Banco de la Nación:
                                            <ul>
                                                <li>
                                                    Número de cuenta: 12345XXXX
                                                </li>
                                                <li>
                                                    Código de cuenta
                                                    interbancario (CCI): ABC123
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Banco Interbank:
                                            <ul>
                                                <li>
                                                    Número de cuenta: 09876XXX
                                                </li>
                                                <li>
                                                    Código de cuenta
                                                    interbancario (CCI): XYZ456
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
                                        <FileInput
                                            id="file-upload"
                                            ref={fileInput}
                                        />
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                </Modal.Body>
                {!message && (
                    <Modal.Footer className="">
                        <Button onClick={handleClickPagar}>Guardar</Button>
                        <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                        >
                            Cancelar
                        </Button>
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
}

export default ModalPagos;
