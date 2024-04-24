import { useEffect } from "react"; // Importa useEffect
import Swal from "sweetalert2";
const ModalPagoOnline = ({ data }) => {
    // console.log(data);
    const handleCulqiAction = (Culqi, data) => {
        if (Culqi?.token) {
            // ¡Objeto Token creado exitosamente!
            const token = Culqi.token.id;
            // Culqi.close();
            const dataPayment = {
                token,
                amount: data.amount,
                email: data.email,
            };
            Culqi.close();

            axios
                .post(route("culqui"), dataPayment)
                .then((response) => {
                    if (response.status == 201) {
                        // Culqi.close();

                        Swal.fire({
                            icon: "success",
                            title: "¡Éxito!",
                            text: "El pago se realizó correctamente",
                            timer: 1000
                        });

                        console.log(response);
                    } else {
                        // Culqi.close();

                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: response.data.message.user_message,
                            timer: 1000

                        });
                        Culqi.close();

                        console.log(response);
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Algo salió mal!",
                        footer: `<a href>${
                            error.response ? error.response.data.message : ""
                        }</a>`,
                        timer: 1000

                    });
                    console.log(error);
                });
        } else if (Culqi.order) {
            // ¡Objeto Order creado exitosamente!
            const order = Culqi.order;
        } else {
            console.log("Error : ", Culqi.error);
        }
    };

    const handlePayment = (data) => {
        const settings = {
            title: "Culqi Store",
            currency: "PEN",
            amount: data.amount,
            order: "ord_live_0CjjdWhFpEAZlxlz",
            // publickey: "pk_test_d31d0bc237c6f16f",
        };

        const paymentMethods = {
            // las opciones se ordenan según se configuren
            tarjeta: true,
            yape: true,
            billetera: false,
            bancaMovil: false,
            agente: false,
            cuotealo: false,
        };

        const options = {
            lang: "auto",
            installments: false,
            modal: true,
            container: "#culqi-container", // Opcional
            paymentMethods: paymentMethods,
            paymentMethodsSort: Object.keys(paymentMethods), // las opciones se ordenan según se configuren en paymentMethods
        };

        const appearance = {
            theme: "default",
            hiddenCulqiLogo: true,
            hiddenBannerContent: true,
            hiddenBanner: false,
            hiddenToolBarAmount: true,
            menuType: "sidebar", // default/sidebar / sliderTop / select
            buttonCardPayText: "Pagar ", // hexadecimal
            logo: "http://localhost:8000/images/logo_gerepro.png",
            defaultStyle: {
                bannerColor: "black", // hexadecimal
                buttonBackground: "black", // hexadecimal
                menuColor: "white", // hexadecimal
                linksColor: "white", // hexadecimal
                buttonTextColor: "black", // hexadecimal
                priceColor: "black",
            },
            variables: {
                fontFamily: "monospace",
                fontWeightNormal: "500",
                borderRadius: "8px",
                colorBackground: "#0A2540",
                colorPrimary: "#EFC078",
                colorPrimaryText: "#1A1B25",
                colorText: "white",
                colorTextSecondary: "white",
                colorTextPlaceholder: "#727F96",
                colorIconTab: "white",
                colorLogo: "dark",
            },
            rules: {
                ".Culqi-Main-Container": {
                    background: "#c8c8c8",
                    // fontFamily: "var(--fontFamily)",
                },
                ".Culqi-ToolBanner": {
                    background: "#049DD9",
                    // fontFamily: "var(--fontFamily)",
                    color: "white",
                },
                // cambia el color del texto y del ícono
                ".Culqi-Toolbar-Price": {
                    color: "red",
                    // fontFamily: "var(--fontFamily)",
                },
                // cambia el color solo del ícono
                ".Culqi-Toolbar-Price .Culqi-Icon": {
                    color: "blue",
                },
                ".Culqi-Main-Method": {
                    background: "white",
                    padding: "10px 20px",
                    color: "black",
                },

                // aplica color al texto del link y al Icon del link
                ".Culqi-Text-Link": {
                    color: "red",
                },
                // Solo aplica color al Icon del link
                ".Culqi-Text-Link .Culqi-Icon": {
                    color: "blue",
                },
                // Message, color aplica para text e ícono
                ".Culqi-message": {
                    color: "blue",
                },
                // cambia el color solo del ícono
                ".Culqi-message .Culqi-Icon": {
                    color: "red",
                },
                ".Culqi-message-warning": {
                    background: "white",
                    color: "orange",
                },
                ".Culqi-message-info": {
                    background: "white",
                    color: "black",
                },
                ".Culqi-message-error": {
                    background: "black",
                    color: "yellow",
                },
                ".Culqi-message-error .Culqi-Icon": {
                    color: "yellow",
                },

                // aplica a los labels
                ".Culqi-Label": {
                    color: "black",
                    marginBottom: "15px",
                    "font-size": "0.8rem",
                    // "white-space": "nowrap",
                },
                ".Culqi-Input": {
                    border: "1px solid gray",
                    color: "black",
                },
                ".Culqi-Input:focus": {
                    border: "2px solid black",
                },
                ".Culqi-Input.input-valid": {
                    border: "1px solid pink",
                    background: "#049DD9",
                    color: "var(--colorText)",
                },
                ".Culqi-Input-Icon-Spinner": {
                    color: "red",
                },
                ".Culqi-Input-Select": {
                    border: "1px solid red",
                    color: "blue",
                },
                // aplica para al hacer hover en los options del select
                ".Culqi-Input-Select-Options-Hover": {
                    color: "red",
                    background: "black",
                },
                // aplica para el seleccionado al ser activado
                ".Culqi-Input-Select-Selected": {
                    color: "green",
                },
                ".Culqi-Input-Select.active": {
                    // utíl cuando le das click al control
                    border: "1px solid red",
                    background: "pink",
                },
                // aplica al listado de cuotas
                ".Culqi-Input-Select-Options": {
                    background: "gray",
                },
                // aplica a los botones
                ".Culqi-Button": {
                    background: "#049DD9",
                },

                //--------Menu GENERALES----------------
                // el color se aplica para el texto y el ícono del menú
                ".Culqi-Menu": {
                    color: "black",
                    //background: "white",
                },

                // el color se aplica para el ícono del menú
                ".Culqi-Menu .Culqi-Icon": {
                    color: "green",
                },
                //-------FIN Menu GENERALES----------------

                //--------- MENU SELECT-------------
                // aplica cuando el select esta seleccionado
                ".Culqi-Menu-Selected": {
                    //background: "orange",
                    color: "#D621A5",
                    //border: "1px solid white",
                },
                ".Culqi-Menu-Selected .Culqi-Icon": {
                    //background: "orange",
                    color: "red",
                    //border: "1px solid white",
                },
                // aplica cuando para las opciones del select menú
                ".Culqi-Menu-Options": {
                    background: "orange",
                },
                // aplica para las opciones del select menú cuando se hace hover
                ".Culqi-Menu-Options-Hover": {
                    background: "green",
                    color: "red",
                },
                // aplica para los ICONOS de las opciones del select menú cuando se hace hover
                ".Culqi-Menu-Options-Hover .Culqi-Icon": {
                    color: "blue",
                },

                //--------- FIN SELECT-------------

                //----------------- MENU SLIDERTOP Y SIDEBAR----------------------

                // cambia el color para el item menu, tanto texto e ícono seleccionado (no aplica en el select menu)
                ".Culqi-Menu-Item.active": {
                    color: "black",
                    "font-weight": "bold",
                    //   border: "1px solid white",
                },
                // cambia el color para el ICONO del item menu seleccionado (no aplica en el select menu)
                ".Culqi-Menu-Item.active .Culqi-Icon": {
                    color: "black",
                    "font-size": "2rem",
                    height: "2rem",
                },

                // MODIFICA EL TEXTO DEL MENÚ(no aplica al menú select)
                ".Culqi-Menu-Item-Text": {
                    // reemplaza a la clase .Culqi-Menu-Item
                    "font-size": "14px",

                    color: "black",
                },

                // cambia el color de los ICONOS ARROW DE sliderTop
                ".Culqi-Menu .Culqi-Icon-Arrow": {
                    color: "blue",
                },
                // CAMBIA EL COLOR DE LA BARRA LATERAL DE SIDEBAR
                ".Culqi-Menu-Item.active .Culqi-Bar": {
                    background: "blue",
                    height: "3rem",
                },
            },
        };

        const client = {
            email: data.email,
        };
        const publicKey = "pk_test_d31d0bc237c6f16f";

        const config = {
            settings,
            client,
            options,
            appearance,
        };
        const Culqi = new CulqiCheckout(publicKey, config);
        Culqi.culqi = () => handleCulqiAction(Culqi, data);

        // console.log(Culqi.settings);
        Culqi.open();
        // e.preventDefault();
    };

    return (
        <>
            <div
                className="flex-1 cursor-pointer px-3 py-1 border-4 border-gray-500 hover:border-cyan-500 rounded-md flex flex-col items-center"
                onClick={() => handlePayment(data)}
            >
                <p>Pago en linea</p>
                <div className="flex">
                    <img
                        src="/images/paymentMethods/credi-cards.png"
                        alt="logos de tarjetas de debito / credito"
                        className="flex-1"
                    />
                    <img
                        src="/images/paymentMethods/yape.png"
                        alt="logos de YAPE"
                        className="flex-1 h-16"
                    />
                </div>
            </div>
        </>
    );
};

export default ModalPagoOnline;
