const ContentIndex = () => {
    return (
        <>
            <section className="nosotros" id="nosotros">
                <div className="row">
                    <div className="content">
                        <h3>HISTORIA</h3>
                        <p>
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
                    <div className="imagen">
                        <img src="images/paginaPrincipal/logo_expoferia_2024.svg" alt="" />
                    </div>
                </div>
            </section>

            <section className="video" id="video">
                <div className="row">
                    <div className="imagen">
                        <img src="images/paginaPrincipal/video.png" alt="" />
                    </div>
                    <div className="content">
                        <h3>
                            Video promocional Feria Internacional Huancaro 2024{" "}
                        </h3>
                        <p>
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
                </div>
            </section>

            <section className="noticias">
                <div className="container">
                    <div className="blog-seccion">
                        <div className="titulo">
                            <h2>Noticias de Eventos</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.{" "}
                            </p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="imagen-seccion">
                                    <img src="images/paginaPrincipal/noticias1.jpg" alt="" />
                                </div>
                                <div className="contenido">
                                    <h4>Titulo 1</h4>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Provident porro fugit
                                        distinctio dolore culpa rem sint est
                                        labore magni facere officia aut, fugiat
                                        sunt modi veritatis hic error ullam. Ut.
                                    </p>
                                    <a href="">Leer Mas...</a>
                                </div>
                                <div className="dia">
                                    <p>Junio 20, 2024</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="imagen-seccion">
                                    <img src="images/paginaPrincipal/noticias2.jpg" alt="" />
                                </div>
                                <div className="contenido">
                                    <h4>Titulo 2</h4>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Provident porro fugit
                                        distinctio dolore culpa rem sint est
                                        labore magni facere officia aut, fugiat
                                        sunt modi veritatis hic error ullam. Ut.
                                    </p>
                                    <a href="">Leer Mas...</a>
                                </div>
                                <div className="dia">
                                    <p>Junio 20, 2024</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="imagen-seccion">
                                    <img src="images/paginaPrincipal/noticias3.jpg" alt="" />
                                </div>
                                <div className="contenido">
                                    <h4>Titulo 3</h4>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Provident porro fugit
                                        distinctio dolore culpa rem sint est
                                        labore magni facere officia aut, fugiat
                                        sunt modi veritatis hic error ullam. Ut.
                                    </p>
                                    <a href="">Leer Mas...</a>
                                </div>
                                <div className="dia">
                                    <p>Junio 20, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div>
                    <ul className="social_icon">
                        <li>
                            <a href=""></a>
                            <i className="fa-brands fa-facebook"></i>
                        </li>
                        <li>
                            <a href=""></a>
                            <i className="fa-brands fa-tiktok"></i>
                        </li>
                        <li>
                            <a href=""></a>
                            <i className="fa-brands fa-youtube"></i>
                        </li>
                    </ul>
                </div>
                <section>
                    <div className="grupo-2">
                        <div className="container" id="container_Logos_Gore">
                            <img
                                className="logo_gore"
                                src="images/paginaPrincipal/historia-footer.png"
                                alt="Logo_Gobierno_Regional_Cusco"
                            />
                        </div>
                        <div className="par2">
                            <small>
                                &copy; 2024{" "}
                                
                                - Todos los Derechos Reservados.
                            </small>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};
export default ContentIndex;
