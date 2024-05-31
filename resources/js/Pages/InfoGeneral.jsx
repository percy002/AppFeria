import MunisLogos from "@/Components/UI/MunisLogos";
import GuestLayout from "@/Layouts/GuestLayout";

const InfoGeneral = () => {
    return (
        <GuestLayout type={"reseña"}>
            <div className="">
                <section className="container mx-auto ">
                    <div className="flex flex-col lg:flex-row sm:items-center">
                        <div className="flex-1">
                            <img
                                src="/images/resenas/promocion_huancaro.png"
                                alt="promocion Expo Cusco Huancaro 2024"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-primary text-center">
                                Expo Cusco Huancaro 2024
                            </h1>
                            <p className="text-justify text-lg px-2 sm:px-0">
                                En el marco del mes jubilar de la Ciudad
                                imperial se lleva a cabo una serie de eventos
                                protocolares, artísticos y culturales, los
                                mismos que revaloran, preservan y difunden las
                                tradiciones culturales de Cusco. En este
                                contexto; desde hace más de 50 años se
                                desarrolla la Gran . Con la finalidad de
                                reactivar nuestra economía, el Gobierno Regional
                                de Cusco ha decidido asumir este reto a través
                                de la Comisión Organizadora EXPO CUSCO HUANCARO
                                2024, que conlleva a la recuperación de este
                                importante evento para alcanzar el significado
                                que tiene para la Región de Cusco, esperando
                                dejar un precedente que nos permita hacer
                                historia, dando realce a las fiestas jubilares
                                de Cusco, Patrimonio Cultural de la Humanidad y
                                Capital Histórica del Perú.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full container mx-auto mt-8">
                    <div className="w-full flex justify-center">
                        <div className="flex justify-center gap-2 md:gap-10 w-full md:w-4/6">
                            <div className="flex-1">
                                <img
                                    src="/images/resenas/suyos.png"
                                    alt="Texto desde los 4 suyos"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/logos/hagamos_historia_rojo.png"
                                    alt="Logo hagamos historia Gobierno Regional del Cusco"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-primary">
                            Galeria de fotos 2023
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_1.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_2.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_3.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 mt-8">
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_4.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_5.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_6.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            
                        </div>
                    </div>
                </section>
                <MunisLogos />
            </div>
        </GuestLayout>
    );
};
export default InfoGeneral;
