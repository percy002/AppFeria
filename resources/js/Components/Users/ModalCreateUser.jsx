import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";
import { useForm, router } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Swal from "sweetalert2";
import { useEffect } from "react";
const ModalCreateUser = ({ updateUsers }) => {
    const [openModal, setOpenModal] = useState(false);
    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        name: "",
        last_name: "",
        dni: "",
        phone_number: "",
        email: "",
        password: "",
        password_confirmation: "",
        rol: "",
    });
    
    const closeModal = () =>{
        setOpenModal(false)
        clearErrors();
        reset();
    }
    const CreateUser = (e) => {
        e.preventDefault();

        post(route("user.create"), {
            data: data,
            onSuccess: (response) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Usuario registrado con éxito",
                    showConfirmButton: false,
                    timer: 1500,
                });
                updateUsers((prev) => [...prev, response.data.user]);
                setOpenModal(false);
            },
            onError: (errors) => {
                let errorMessage = "";
                for (let key in errors) {
                    errorMessage += `${errors[key]} `;
                }
                Swal.fire("Error", errorMessage, "error");
            },
        });

    };
    return (
        <>
            <Button
                color="success"
                className="my-2 ml-4"
                onClick={() => setOpenModal(true)}
            >
                Crear Usuario
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size={"6xl"}
            >
                <Modal.Header>Crear Usuario</Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <InputLabel htmlFor="name" value="Nombre(s)" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    autoComplete="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="last_name"
                                    value="Apellidos"
                                />

                                <TextInput
                                    id="last_name"
                                    name="last_name"
                                    value={data.last_name}
                                    className="mt-1 block w-full"
                                    autoComplete="last_name"
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.last_name}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <div className="flex-1">
                                <InputLabel htmlFor="dni" value="DNI" />

                                <TextInput
                                    id="dni"
                                    name="dni"
                                    value={data.dni}
                                    className="mt-1 block w-full"
                                    autoComplete="dni"
                                    onChange={(e) =>
                                        setData("dni", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.dni}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="phone_number"
                                    value="Celular"
                                />

                                <TextInput
                                    id="phone_number"
                                    name="phone_number"
                                    value={data.phone_number}
                                    className="mt-1 block w-full"
                                    autoComplete="phone_number"
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.phone_number}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex mt-6 gap-4">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="email"
                                    value="Correo Electrónico"
                                />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel htmlFor="rol" value="Rol" />
                                <div className="max-w-md">
                                    <Select
                                        id="rol"
                                        name="rol"
                                        value={data.rol}
                                        onChange={(e) =>
                                            setData("rol", e.target.value)
                                        }
                                        className="mt-1 block w-full"
                                        required
                                    >
                                        <option value="">
                                            Selecciona una rol
                                        </option>
                                        <option value="admin">
                                            Administrador
                                        </option>
                                        <option value="user">Usuario</option>
                                    </Select>
                                </div>

                                <InputError
                                    message={errors.rol}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="password"
                                    value="Contraseña"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirmar Contraseña"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex justify-between w-full px-6">
                        <Button color="success" onClick={CreateUser} disabled={processing}>
                            Crear Usuario
                        </Button>
                        <Button
                            color="failure"
                            onClick={closeModal}
                        >
                            Cancelar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalCreateUser;
