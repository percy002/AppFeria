import { usePage } from '@inertiajs/react';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function ModalReserva({stand,clientId}) {
    const [openModal, setOpenModal] = useState(false);
    const {auth} = usePage().props

    // console.log(auth);
    const handleClickReserva = () => {
    axios.post(route('reservaciones.crear'), { stand, clientId })
        .then(response => {
            // Handle the response
        })
        .catch(error => {
            // Handle the error
        });
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Reservar</Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Estás a punto de reservar este stand {stand.name}. Por favor, confirma que todos los detalles son correctos antes de proceder. </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p>usuario: {auth.cliente.name} {auth.cliente.last_name}</p>
                        <p>Categoria: gastronomia</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClickReserva}>Aceptar</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalReserva