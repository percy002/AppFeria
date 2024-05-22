const ContentIndex2 = () => {
    return (
        <div className="">
            <section className="bg-manto bg-cover pt-4">
                <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-16 md:items-center">
                    <div className="flex-1 flex flex-col items-center">
                        <h3 className="text-primary text-center">HISTORIA</h3>
                        <p className="text-justify px-5 md:px-20">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ea neque ullam debitis mollitia, cumque in
                            nostrum sint. Voluptate dicta voluptas numquam,
                            ducimus autem atque quasi nobis! Fuga doloribus amet
                            quo?
                        </p>
                        <a href="#">
                            <button>Leer Mas</button>
                        </a>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-center">
                            <img
                                src="images/paginaPrincipal/logo_expoferia_2024.svg"
                                alt=""
                                className="object-cover w-[50vh] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ContentIndex2;
