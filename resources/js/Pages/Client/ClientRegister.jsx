import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function ClientRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        selectedType: "personaJuridica",
        ruc: "",
        company_name: "",
        name: "",
        last_name: "",
        dni: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("client.register"));
    };

    const handleTypeChange = (event) => {
        const { value } = event.target;
        setData({
            selectedType: value,
            ruc: "",
            company_name: "",
            name: "",
            last_name: "",
            dni: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
        // setData("selectedType", value);
        
    };

    return (
        <GuestLayout>
            <Head title="Registro" />

            <form onSubmit={submit}>
                <div className="flex gap-6 my-2">
                    <div className="">
                        <input
                            type="radio"
                            id="personaJuridica"
                            name="identificationType"
                            value="personaJuridica"
                            checked={data.selectedType === "personaJuridica"}
                            onChange={handleTypeChange}
                            className="mx-1"
                        />
                        <label htmlFor="personaJuridica">Persona Juridica</label>
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
                        <label htmlFor="personaNatural">Persona Natural</label>
                    </div>
                </div>
                {data.selectedType == "personaJuridica" && (
                    <>
                        <div>
                            <InputLabel htmlFor="ruc" value="RUC" />

                            <TextInput
                                id="ruc"
                                name="ruc"
                                value={data.ruc}
                                className="mt-1 block w-full"
                                
                                autoComplete="ruc"
                                isFocused={true}
                                onChange={(e) => setData("ruc", e.target.value)}
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div>
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
                                    setData("company_name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.company_name}
                                className="mt-2"
                            />
                        </div>

                        <p className="text-center mt-4">Persona Registrante</p>
                    </>
                )}

                <div className="">
                    <InputLabel htmlFor="name" value="Nombre(s)" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={data.selectedType === "pNatural"}
                        autoComplete="name"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="last_name" value="Apellidos" />

                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="last_name"
                        onChange={(e) => setData("last_name", e.target.value)}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="dni" value="DNI" />

                    <TextInput
                        id="dni"
                        name="dni"
                        value={data.dni}
                        className="mt-1 block w-full"
                        autoComplete="dni"
                        onChange={(e) => setData("dni", e.target.value)}
                        required
                    />

                    <InputError message={errors.dni} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Correo Electronico" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
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
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("client.login")}
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
    );
}
