import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, FloatingLabel } from "flowbite-react";

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div
            className="bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/images/portada/feria_huancaro_portada.webp')",
            }}
        >
            <GuestLayout>
                <Head title="Log in" />

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <div className="flex rounded-3xl px-5 sm:px-0 sm:mx-3 w-full sm:w-7/12">
                    <div className="bg-primary justify-center items-center hidden md:flex px-10 rounded-l-3xl sm:flex-1 lg:flex-[4]">
                        <img
                            src="images/logos/logo_gore_blanco.png"
                            alt="logo gobierno regional del cusco"
                            className="w-9/12 lg:w-1/2"
                        />
                    </div>
                    <div className="w-full sm:max-w-md lg:max-w-4xl bg-white shadow-md overflow-hidden rounded-lg md:rounded-l-none md:rounded-r-3xl sm:flex-1 lg:flex-[3]">
                        <div className="my-7 bg-primary sm:rounded-r-full w-full sm:w-fit lg:w-8/12 py-1 flex justify-center">
                            <span className="text-2xl font-bold text-white">
                                Bienvenido
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-primary">Inicia Sesión</h4>
                        </div>
                        <div className=" px-6 py-2 ">
                            <form onSubmit={submit}>
                                <div>
                                    <FloatingLabel
                                        variant="standard"
                                        label="Correo Electrónico"
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="border-primary text-primary"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className=""
                                    />
                                </div>

                                <div className="mt-8">
                                    <div className="flex justify-between relative ">
                                        <div className="flex-grow ">
                                            <FloatingLabel
                                                variant="standard"
                                                label="Contraseña"
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                value={data.password}
                                                className="border-primary text-primary flex-grow"
                                                autoComplete="current-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        {showPassword ? (
                                            <HiOutlineEyeOff
                                                className="text-primary w-8 h-8 absolute right-0 hover:cursor-pointer"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                            />
                                        ) : (
                                            <HiOutlineEye
                                                className="text-primary w-8 h-8 absolute right-0 hover:cursor-pointer"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                            />
                                        )}
                                    </div>

                                    <InputError
                                        message={errors.password}
                                        className=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center mt-8 items-center">
                                    <Button
                                        type="submit"
                                        className="bg-primary text-white rounded-full px-5"
                                        disabled={processing}
                                    >
                                        Ingresar
                                    </Button>
                                    <Link
                                        href={route("client.register")}
                                        className="underline text-sm text-center text-gray-600 hover:text-gray-900 rounded-md mt-2"
                                    >
                                        Registrar nuevo usuario
                                    </Link>
                                </div>

                                {/* <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                    <Link
                                        href={route("client.register")}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Registrar
                                    </Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Log in
                                    </PrimaryButton>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </div>
    );
}
