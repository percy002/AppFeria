import Footer from "@/Components/UI/Footer";
import NavbarFB from "@/Components/UI/Navbar/NavbarFB";
import { Link } from "@inertiajs/react";

export default function Guest({ children, type }) {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center sm:pt-0 justify-start">
                <div>
                    <NavbarFB />

                    <div
                        className={` flex justify-between w-screen md:px-16 px-4 pt-4 ${
                            (type === "register" || type === "reseña") &&
                            "bg-background-image bg-center bg-cover"
                        } `}
                    >
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
                    <div className="w-full px-2 md:px-36 py-2 bg-white shadow-md overflow-hidden">
                        {children}
                    </div>
                ) : type === "reseña" ? (
                    <div className="w-full px-2 md:px-36 py-2 bg-concrete-50 shadow-md overflow-hidden">
                        {/* Asegúrate de personalizar este div para que se ajuste a tus necesidades */}
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
            <Footer />
        </>
    );
}
