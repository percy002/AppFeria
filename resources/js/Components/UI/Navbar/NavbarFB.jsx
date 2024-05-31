import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";
import { HiHome } from "react-icons/hi";
import { usePage } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

function NavbarFB() {
    const { auth } = usePage().props;
    return (
        <Navbar fluid className="bg-primary z-100 md:px-16">
            <Navbar.Brand as={Link} href="/" className="">
                <HiHome className="h-10 w-10 text-white p-1" />
            </Navbar.Brand>
            <Navbar.Toggle className="text-white hover:bg-transparent" />
            <Navbar.Collapse>
                {!auth.user && (
                    <>
                        <div className="bg-white text-primary py-1 px-4 sm:rounded-full font-bold text-base">
                            <Link href="/login" className="text-center">
                                Iniciar Sesión
                            </Link>
                        </div>
                        <div className="bg-white text-primary py-1 px-4 sm:rounded-full font-bold text-base">
                            <Link href="/cliente/registro">Registrarse</Link>
                        </div>
                    </>
                )}
                {auth.user && (
                    <>
                        <div className="hidden md:block">
                            <Dropdown
                                label=""
                                inline
                                renderTrigger={() => (
                                    <span className="bg-white text-primary py-1 px-4 sm:rounded-full font-bold text-base hover:cursor-pointer">
                                        {auth.user.name} &#9662;
                                    </span>
                                )}
                            >
                                <Dropdown.Item as="div">
                                    <Link
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Cerrar Sesión
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="md:hidden">
                            <Navbar.Link
                                href="#"
                                className="hover:bg-primary text-white text-center"
                            >
                                {auth.user.name}
                            </Navbar.Link>

                            <Navbar.Link
                                className="hover:bg-primary w-full "
                                as={"div"}
                            >
                                <form method="post" action={route("logout")} className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="text-white flex justify-center"
                                    >
                                        <span className="text-center">
                                            Cerrar Sesion2
                                        </span>
                                    </button>
                                </form>
                            </Navbar.Link>
                        </div>
                    </>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarFB;
