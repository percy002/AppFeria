import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import { Select } from "flowbite-react";
import Swal from "sweetalert2";

export default function ClientRegister() {
    const [categories, setCategories] = useState();
    const [subCategories, setSubCategories] = useState([]);
    const { data, setData, post, processing, errors, reset } = useForm({
        selectedType: "personaJuridica",
        ruc: "",
        company_name: "",
        category_id: "",
        subCategory_id: "",
        name: "",
        last_name: "",
        dni: "",
        position: "",
        phone_number: "",
        email: "",
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

    // useEffect(() => {
    //     if (Object.keys(errors).length > 0) {
    //         let errorMessage = "";
    //         for (let key in errors) {
    //             errorMessage += `${errors[key]} `;
    //         }

    //         Swal.fire("Error", errorMessage, "error");
    //         console.log(errors);
    //     }
    // }, [errors]);

    const submit = (e) => {
        e.preventDefault();
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

    const handleTypeChange = (event) => {
        const { value } = event.target;
        setData({
            selectedType: value,
            ruc: "",
            company_name: "",
            category_id: "",
            subCategory_id: "",
            name: "",
            last_name: "",
            dni: "",
            position: "",
            phone_number: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
    };

    const handleSelectCategory = (event) => {
        const { value } = event.target;
        setData("category_id", value);
        if (value === "0") {
            setSubCategories([]);
            return;
        }
        getSubCategories(value);
        console.log(subCategories);
    };

    return (
        <div className="bg-gray-400">
            <GuestLayout type={"register"}>
                <Head title="Registro" />

                <form onSubmit={submit} className="">
                    <div className="flex justify-around my-2">
                        <div className="">
                            <input
                                type="radio"
                                id="personaJuridica"
                                name="identificationType"
                                value="personaJuridica"
                                checked={
                                    data.selectedType === "personaJuridica"
                                }
                                onChange={handleTypeChange}
                                className="mx-1"
                            />
                            <label htmlFor="personaJuridica">
                                Persona Juridica
                            </label>
                        </div>
                        <div className="">
                            <input
                                type="radio"
                                id="personaNatural"
                                name="identificationType"
                                value="personaNatural"
                                checked={data.selectedType === "personaNatural"}
                                onChange={handleTypeChange}
                                className="mx-1"
                            />
                            <label htmlFor="personaNatural">
                                Persona Natural
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <div className="flex-1">
                            <InputLabel
                                htmlFor="category_id"
                                value="Categoría"
                            />
                            <div className={`${subCategories && Array.isArray(subCategories) && subCategories.length == 0 ? "w-1/2" : ""}`}>
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
                                            <option key={index} value={cat.id}>
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
                        {subCategories && Array.isArray(subCategories) && subCategories.length > 0 && (
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
                                        onChange={(e) => setData("subCategory_id", e.target.value)}
                                        className="mt-1 block w-full"
                                        required
                                    >
                                        <option value="">
                                            Selecciona una Provincia
                                        </option>
                                        {subCategories &&
                                            subCategories.map((cat, index) => (
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
                                    message={errors.subCategory_id}
                                    className="mt-2"
                                />
                            </div>
                        )}
                    </div>
                    {data.selectedType == "personaJuridica" && (
                        <>
                            <div className="flex gap-4 mt-4">
                                <div className="flex-1">
                                    <InputLabel htmlFor="ruc" value="RUC" />

                                    <TextInput
                                        id="ruc"
                                        name="ruc"
                                        value={data.ruc}
                                        className="mt-1 block w-full"
                                        autoComplete="ruc"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("ruc", e.target.value)
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
                                        htmlFor="company_name"
                                        value="Razón Social"
                                    />

                                    <TextInput
                                        id="company_name"
                                        name="company_name"
                                        value={data.company_name}
                                        className="mt-1 block w-full"
                                        autoComplete="company_name"
                                        onChange={(e) =>
                                            setData(
                                                "company_name",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.company_name}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <p className="text-center mt-4">
                                Datos del Representante
                            </p>
                        </>
                    )}

                    <div className="flex gap-4 mt-4">
                        <div className="flex-1">
                            <InputLabel htmlFor="name" value="Nombre(s)" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="w-full"
                                isFocused={data.selectedType === "pNatural"}
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
                            <InputLabel htmlFor="last_name" value="Apellidos" />

                            <TextInput
                                id="last_name"
                                name="last_name"
                                value={data.last_name}
                                className="w-full"
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

                    <div className="flex mt-4 gap-4">
                        <div className="flex-1">
                            <InputLabel htmlFor="dni" value="DNI" />

                            <TextInput
                                id="dni"
                                name="dni"
                                value={data.dni}
                                className={`${
                                    data.selectedType !== "personaJuridica"
                                        ? "w-1/2 pl-3"
                                        : "w-full"
                                }`}
                                autoComplete="dni"
                                onChange={(e) => setData("dni", e.target.value)}
                                required
                            />

                            <InputError message={errors.dni} className="mt-2" />
                        </div>
                        {data.selectedType == "personaJuridica" && (
                            <div className="flex-1">
                                <InputLabel htmlFor="position" value="Cargo" />

                                <TextInput
                                    id="position"
                                    name="position"
                                    value={data.position}
                                    className="w-full"
                                    autoComplete="position"
                                    onChange={(e) =>
                                        setData("position", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.position}
                                    className="mt-2"
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex mt-4 gap-4">
                        <div className="flex-1">
                            <InputLabel
                                htmlFor="phone_number"
                                value="Celular"
                            />

                            <TextInput
                                id="phone_number"
                                name="phone_number"
                                value={data.phone_number}
                                className="w-full"
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
                                className="w-full"
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
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex-1">
                            <InputLabel htmlFor="password" value="Contraseña" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full"
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
                                className="w-full"
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

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ¿Ya esta registrado ?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Registrar
                        </PrimaryButton>
                    </div>
                </form>
            </GuestLayout>
        </div>
    );
}
