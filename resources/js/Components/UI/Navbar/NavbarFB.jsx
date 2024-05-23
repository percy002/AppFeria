"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "@inertiajs/react";
import DefaultButton from "../DefaultButton";
import { HiHome } from "react-icons/hi";

function NavbarFB() {
    return (
        <Navbar fluid className="bg-primary z-100">
            <Navbar.Brand as={Link} href="/">
                <HiHome className="h-10 w-10 text-white" />
            </Navbar.Brand>
            <Navbar.Toggle className="text-white hover:bg-transparent"/>
            <Navbar.Collapse>
                <div className="bg-white text-primary py-1 px-4 sm:rounded-full font-bold text-base">
                    <Link href="/login" className="text-center">Iniciar Sesion</Link>
                </div>
                <div className="bg-white text-primary py-1 px-4 sm:rounded-full font-bold text-base">
                    <Link href="/cliente/registro">Registrarse</Link>
                </div>
                {/* <Link href="/cliente/registro">Registrarse</Link> */}
                {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarFB;
