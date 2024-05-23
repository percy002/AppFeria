const Footer = () => {
    return (
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
                            src="/images/paginaPrincipal/historia-footer.png"
                            alt="Logo_Gobierno_Regional_Cusco"
                        />
                    </div>
                    <div className="par2">
                        <small>
                            &copy; 2024 - Todos los Derechos Reservados.
                        </small>
                    </div>
                </div>
            </section>
        </footer>
    );
};
export default Footer;
