import DefaultButton from "./DefaultButton";
import ReactPlayer from "react-player";
import { useState } from "react";
import ContentIndex from "./ContentIndex";
import Footer from "./Footer";
import MunisLogos from "./MunisLogos";
const ContentIndex2 = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <section className="py-10 bg-concrete-50 text-lg ">
                <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-5 md:items-center">
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-primary">Reseña</h3>
                        <p className="text-justify text-gray-700">
                            Desde hace más de 50 años se desarrolla la Gran
                            “Expo Feria HUANCARO”, que es un evento muy esperado
                            por la población Cusqueña, reconocida a nivel
                            regional, nacional e internacional, la misma que se
                            desarrolla en el mes de junio.
                        </p>
                        <DefaultButton text={"Leer Mas"} url={"/reseña"} />
                        {/* <a href="#">
                            <button>Leer Mas</button>
                        </a> */}
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-center">
                            <img
                                src="images/paginaPrincipal/piedra_expo.png"
                                alt=""
                                className="object-cover w-[50vh] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-[#734524] bg-opacity-70 text-lg">
                <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row px-5 gap-x-10 gap-y-8 md:items-center ">
                    <div className="flex-1">
                        <div className="flex justify-center">
                            <ReactPlayer
                                url="/images/paginaPrincipal/huancaro.mp4"
                                controls={true}
                                className="object-cover w-[50vh] h-auto"
                                // playing={isPlaying}
                                // onPlay={() => setIsPlaying(true)}
                                // onPause={() => setIsPlaying(false)}
                                // onEnded={() => setIsPlaying(false)}
                            />
                            {/* {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white bg-opacity-50 flex items-center justify-center text-gray-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-12 h-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 19V5l12 7-12 7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white">Video</h3>
                        <p className="text-justify text-white">
                            Con la participación de los mejores exponentes de la
                            producción agropecuaria, agroindustrial y artesanal
                            regional, inició la “Expo Feria HUANCARO”, actividad
                            organizada por las gerencias del Gobierno Regional y
                            el Comité Organizador que incorpora la tecnología
                            aplicada a la producción.
                        </p>
                    </div>
                </div>
            </section>
            <ContentIndex />
            <MunisLogos/>
            <Footer />
        </>
    );
};
export default ContentIndex2;
