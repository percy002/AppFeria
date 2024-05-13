import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children, type }) {
    return (
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 justify-center sm:justify-evenly ">
            <div>
                <Link href="/">
                    <img
                        src="../images/logos/feria_huancaro.png"
                        alt="logo feria"
                        className="w-48"
                    />
                    {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                </Link>
            </div>

            {type === "register" ? (
                <div className="w-full sm:max-w-md lg:max-w-4xl mt-6 px-6 py-2 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            ) : (
                <>
                    {children}
                    <div className="flex justify-center mt-6">
                        <img src="/images/logos/logo_historia_blanco.png" alt="" className="w-9/12" />
                    </div>
                </>
            )}
        </div>
    );
}
