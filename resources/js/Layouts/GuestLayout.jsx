import ApplicationLogo from "@/Components/ApplicationLogo";
// import NavbarFB from "@/Components/UI/Navbar/NavbarFB";
import { Link } from "@inertiajs/react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Guest({ children, type }) {
    return (
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 justify-center sm:justify-evenly ">
            <div>
                {type === "register" && (
                    <>
                        {/* navbar */}
                        <div className="flex w-screen justify-between  px-4 md:px-16 bg-primary py-4">
                            {/* redes sociales */}
                            <div className="flex gap-8 text-white">
                                <FaFacebook className="h-6 w-6" />
                                <FaYoutube className="h-6 w-6" />
                            </div>
                            {/* opciones */}
                            <div className="flex gap-8">
                                <Link
                                    href="/login"
                                    className="bg-white rounded-full px-4"
                                >
                                    <a className="text-primary font-bold">
                                        Iniciar sesión
                                    </a>
                                </Link>
                                <Link
                                    href="/cliente/registro"
                                    className="bg-white rounded-full px-4"
                                >
                                    <a className="text-primary font-bold">
                                        Registrarse
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                <div className={` flex justify-between w-screen md:px-16 px-4 pt-4 ${type === "register" && 'bg-background-image bg-center bg-cover' } `}>
                    <Link href="/">
                        <img
                            src="../images/logos/logo_gore2.png"
                            alt="logo feria"
                            className="w-48"
                        />
                    </Link>
                    <Link href="/">
                        <img
                            src="../images/logos/logo_expoferia_2024.png"
                            alt="logo feria"
                            className="w-48"
                        />
                    </Link>
                </div>
            </div>

            {type === "register" ? (
                <div className="w-full px-2 md:px-36 py-2 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            ) : (
                <>
                    {children}
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/logos/logo_historia_blanco.png"
                            alt=""
                            className="w-9/12"
                        />
                    </div>
                </>
            )}
        </div>
    );
}
