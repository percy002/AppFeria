import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Head, Link, useForm, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import {
    Button,
    Select,
    Label,
    FileInput,
    Checkbox,
    Card,
} from "flowbite-react";
import Swal from "sweetalert2";

export default function ClientRegister() {
    const [categories, setCategories] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);
    const [subCategories, setSubCategories] = useState([]);
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        ruc: "",
        company_name: "",
        address: "",
        trade_name: "",
        category_id: "",
        subCategory_id: "",
        name: "",
        last_name: "",
        dni: "",
        position: "",
        phone_number: "",
        email: "",
        ficha_ruc: null,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        const getCategories = () => {
            axios
                .get(route("categorias.all"))
                .then((response) => {
                    const responseData = response.data;
                    setCategories(responseData.categorias);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getCategories();
    }, []);

    const getSubCategories = (category_id) => {
        axios
            .get(route("categorias.subCategories"), {
                params: { category_id: category_id },
            })
            .then((response) => {
                const responseData = response.data;
                setSubCategories(responseData.subcategorias);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        // getSubCategories();
    }, []);

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        return;
        post(route("client.register"), {
            data: data,
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registrado con éxito",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.get(`/login`);
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

    const handleSelectCategory = (event) => {
        // reset("subCategory_id");
        const { value } = event.target;
        setData({
            category_id: value,
            subCategory_id: "",
        });
        console.log(data);

        if (value === "0") {
            setSubCategories([]);
            return;
        }
        getSubCategories(value);
    };
    const handleChangeText = (field, event) => {
        const value = event.target.value;
        const regex = /^[a-zA-Z0-9_]*$/;

        if (regex.test(value)) {
            setData(field, value);
        }
    };
    const handleChangeEmail = (event) => {
        const value = event.target.value;
        const regex = /^[a-zA-Z0-9._%+-@]*$/;

        if (regex.test(value)) {
            setData("email", value);
        }
    };

    return (
        <div className="bg-gray-400">
            <GuestLayout type={"register"}>
                <Head title="Registro" />
                <h3 className="text-3xl md:text-4xl text-gray-700">
                    Datos de la Empresa o Institución
                </h3>
                <Card className="p-4">
                    <form onSubmit={submit} className="">
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="category_id"
                                    value="Categoría *"
                                />
                                <div className={``}>
                                    <Select
                                        id="category_id"
                                        name="category_id"
                                        value={data.category_id}
                                        onChange={handleSelectCategory}
                                        className="mt-1 block w-full"
                                        required
                                    >
                                        <option value="0">
                                            Selecciona una categoría
                                        </option>
                                        {categories &&
                                            categories.map((cat, index) => (
                                                <option
                                                    key={index}
                                                    value={cat.id}
                                                >
                                                    {cat.name}
                                                </option>
                                            ))}
                                    </Select>
                                </div>

                                <InputError
                                    message={errors.category_id}
                                    className="mt-2"
                                />
                            </div>
                            {subCategories &&
                                Array.isArray(subCategories) &&
                                subCategories.length > 0 && (
                                    <div className="flex-1">
                                        <InputLabel
                                            htmlFor="subCategory_id"
                                            value="Provincia"
                                        />
                                        <div className="">
                                            <Select
                                                id="subCategory_id"
                                                name="subCategory_id"
                                                value={data.subCategory_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "subCategory_id",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full"
                                                required
                                            >
                                                <option value="">
                                                    Selecciona una Provincia
                                                </option>
                                                {subCategories &&
                                                    subCategories.map(
                                                        (cat, index) => (
                                                            <option
                                                                key={index}
                                                                value={cat.id}
                                                            >
                                                                {cat.name}
                                                            </option>
                                                        )
                                                    )}
                                            </Select>
                                        </div>

                                        <InputError
                                            message={errors.subCategory_id}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="company_name"
                                    value="Institución/Empresa/Persona Natural *"
                                />

                                <TextInput
                                    id="company_name"
                                    name="company_name"
                                    value={data.company_name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(event) =>
                                        handleChangeText("company_name", event)
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
                                    htmlFor="trade_name"
                                    value="Nombre Comercial *"
                                />

                                <TextInput
                                    id="trade_name"
                                    name="trade_name"
                                    value={data.trade_name}
                                    className="mt-1 block w-full"
                                    autoComplete="trade_name"
                                    onChange={(event) =>
                                        handleChangeText("trade_name", event)
                                    }
                                />

                                <InputError
                                    message={errors.trade_name}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="flex-1">
                                <InputLabel htmlFor="ruc" value="RUC *" />

                                <TextInput
                                    id="ruc"
                                    name="ruc"
                                    value={data.ruc}
                                    className="mt-1 block w-full"
                                    autoComplete="ruc"
                                    isFocused={true}
                                    onChange={(e) => {
                                        const re = /^[0-9\b]+$/;
                                        if (
                                            e.target.value === "" ||
                                            re.test(e.target.value)
                                        ) {
                                            setData("ruc", e.target.value);
                                        }
                                    }}
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="address"
                                    value="Dirección Fiscal"
                                />

                                <TextInput
                                    id="address"
                                    name="address"
                                    value={data.address}
                                    className="mt-1 block w-full"
                                    autoComplete="address"
                                    onChange={(event) =>
                                        handleChangeText("address", event)
                                    }
                                />

                                <InputError
                                    message={errors.address}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div
                            id="fileUpload"
                            className="mt-8 flex flex-col sm:flex-row gap-x-5 sm:items-center"
                        >
                            <div className="mb-2">
                                <Label
                                    htmlFor="file"
                                    value="Subir FICHA RUC actual *"
                                />
                            </div>

                            <FileInput
                                id="file"
                                required
                                className=""
                                onChange={(e) =>
                                    setData("ficha_ruc", e.target.files[0])
                                }
                            />
                        </div>

                        <p className="text-center mt-4 text-2xl font-bold text-gray-600">
                            Datos del Contacto
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="name"
                                    value="Nombre(s) *"
                                />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="w-full"
                                    isFocused={data.selectedType === "pNatural"}
                                    autoComplete="name"
                                    onChange={(event) =>
                                        handleChangeText("name", event)
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
                                    value="Apellidos *"
                                />

                                <TextInput
                                    id="last_name"
                                    name="last_name"
                                    value={data.last_name}
                                    className="w-full"
                                    autoComplete="last_name"
                                    onChange={(event) =>
                                        handleChangeText("last_name", event)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.last_name}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row mt-4 gap-4">
                            <div className="flex-1">
                                <InputLabel htmlFor="dni" value="DNI *" />

                                <TextInput
                                    id="dni"
                                    name="dni"
                                    value={data.dni}
                                    className="w-full"
                                    autoComplete="dni"
                                    onChange={(e) => {
                                        const re = /^[0-9\b]+$/;
                                        if (
                                            e.target.value === "" ||
                                            re.test(e.target.value)
                                        ) {
                                            setData("dni", e.target.value);
                                        }
                                    }}
                                    required
                                />

                                <InputError
                                    message={errors.dni}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="position"
                                    value="Cargo *"
                                />

                                <TextInput
                                    id="position"
                                    name="position"
                                    value={data.position}
                                    className="w-full"
                                    autoComplete="position"
                                    onChange={(event) =>
                                        handleChangeText("position", event)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.position}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row mt-4 gap-4">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="phone_number"
                                    value="Celular *"
                                />

                                <TextInput
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    value={data.phone_number}
                                    className="w-full"
                                    autoComplete="phone_number"
                                    onChange={(event) =>
                                        handleChangeText("phone_number", event)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.phone_number}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="email"
                                    value="Correo Electrónico *"
                                />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full"
                                    autoComplete="username"
                                    onChange={handleChangeEmail}
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="password"
                                    value="Contraseña *"
                                />

                                <div className="flex justify-between relative items-center">
                                    <div className="flex-grow">
                                        <TextInput
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={data.password}
                                            className="w-full"
                                            autoComplete="off"
                                            onChange={(event) =>
                                                handleChangeText(
                                                    "password",
                                                    event
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    {showPassword ? (
                                        <HiOutlineEyeOff
                                            className="text-gray-700 w-8 h-8 absolute right-0 hover:cursor-pointer"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    ) : (
                                        <HiOutlineEye
                                            className="text-gray-700 w-8 h-8 absolute right-0 hover:cursor-pointer"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    )}
                                </div>

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex-1">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirmar Contraseña *"
                                />
                                <div className="flex justify-between relative items-center ">
                                    <div className="flex-grow">
                                        <TextInput
                                            id="password_confirmation"
                                            type={
                                                showPasswordConfirmation
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="w-full"
                                            autoComplete="off"
                                            onChange={(event) =>
                                                handleChangeText(
                                                    "password_confirmation",
                                                    event
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    {showPasswordConfirmation ? (
                                        <HiOutlineEyeOff
                                            className="text-gray-700 w-8 h-8 absolute right-0 hover:cursor-pointer"
                                            onClick={() =>
                                                setShowPasswordConfirmation(
                                                    !showPasswordConfirmation
                                                )
                                            }
                                        />
                                    ) : (
                                        <HiOutlineEye
                                            className="text-gray-700 w-8 h-8 absolute right-0 hover:cursor-pointer"
                                            onClick={() =>
                                                setShowPasswordConfirmation(
                                                    !showPasswordConfirmation
                                                )
                                            }
                                        />
                                    )}
                                </div>

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="text-primary font-bold">
                            <p>
                                La contraseña solo puede contener letras y
                                números.
                            </p>
                        </div>

                        <div className="w-full border-b-4 text-gray-500 my-6"></div>
                        <ul className="text-gray-600 flex flex-col gap-2">
                            <li>
                                Nota: La aprobación de su cuenta tendrá un plazo
                                no mayor a 24 hrs
                            </li>
                            <li>"*" señala los campos obligatorios</li>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="accept"
                                    onChange={() =>
                                        setTermsAndConditions(
                                            !termsAndConditions
                                        )
                                    }
                                />
                                <Label htmlFor="accept" className="flex">
                                    Estoy de acuerdo con los &nbsp;
                                    <a
                                        href="#"
                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        términos y condiciones
                                    </a>
                                </Label>
                            </div>
                        </ul>

                        <div className="flex gap-8 items-center justify-end mt-4">
                            <Link
                                href={route("login")}
                                className="underline text-md font-bold text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Volver a iniciar sesión
                            </Link>

                            <Button
                                type="submit"
                                className="bg-primary text-xl text-white rounded-full"
                                disabled={processing || !termsAndConditions}
                            >
                                Registrar
                            </Button>
                        </div>
                    </form>
                </Card>
            </GuestLayout>
        </div>
    );
}
