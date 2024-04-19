import { useEffect } from "react"; // Importa useEffect

const ModalPagoOnline = () => {
    const handlePayment = () => {
        const Culqi = window.Culqi;

        Culqi.settings({
            title: "Culqi Store",
            currency: "PEN",
            amount: 1000,
            order: "ord_live_0CjjdWhFpEAZlxlz",
            publickey: "pk_test_d31d0bc237c6f16f",
        });

        const paymentMethods = {
            // las opciones se ordenan según se configuren
            tarjeta: true,
            yape: true,
            billetera: false,
            bancaMovil: false,
            agente: false,
            cuotealo: false,
        };

        Culqi.options({
            lang: "auto",
            installments: false,
            modal: true,
            container: "#culqi-container", // Opcional
            paymentMethods: paymentMethods,
            paymentMethodsSort: Object.keys(paymentMethods), // las opciones se ordenan según se configuren en paymentMethods
        });

        // Culqi.appearance({
        //     theme: "default",
        //     hiddenCulqiLogo: false,
        //     hiddenBannerContent: false,
        //     hiddenBanner: false,
        //     hiddenToolBarAmount: false,
        //     menuType: "sidebar", // default/sidebar / sliderTop / select
        //     buttonCardPayText: "Pagar tal monto", // hexadecimal
        //     logo: 'http://www.childrensociety.ms/wp-content/uploads/2019/11/MCS-Logo-2019-no-text.jpg',
        //     defaultStyle: {
        //     bannerColor: "blue", // hexadecimal
        //     buttonBackground: "yellow", // hexadecimal
        //     menuColor: "pink", // hexadecimal
        //     linksColor: "green", // hexadecimal
        //     buttonTextColor: "blue", // hexadecimal
        //     priceColor: "red",
        //     },
        //     variables: {
        //     fontFamily: "monospace",
        //     fontWeightNormal: "500",
        //     borderRadius: "8px",
        //     colorBackground: "#0A2540",
        //     colorPrimary: "#EFC078",
        //     colorPrimaryText: "#1A1B25",
        //     colorText: "white",
        //     colorTextSecondary: "white",
        //     colorTextPlaceholder: "#727F96",
        //     colorIconTab: "white",
        //     colorLogo: "dark",
        //     soyUnaVariable: "blue",
        //     },
        //      rules: {
        //           ".Culqi-Main-Container": {
        //               background: "red",
        //               fontFamily: "var(--fontFamily)",
        //           },
        //           ".Culqi-ToolBanner": {
        //               background: "blue",
        //               fontFamily: "var(--fontFamily)",
        //               color: "white",
        //           },
        //           // cambia el color del texto y del ícono
        //           ".Culqi-Toolbar-Price": {
        //               color: "red",
        //               fontFamily: "var(--fontFamily)",
        //           },
        //           // cambia el color solo del ícono
        //           ".Culqi-Toolbar-Price .Culqi-Icon": {
        //               color: "blue",
        //           },
        //           ".Culqi-Main-Method": {
        //               background: "orange",
        //               padding: "10px 20px",
        //               color: "blue",
        //           },
                  
        //           // aplica color al texto del link y al Icon del link
        //           ".Culqi-Text-Link": {
        //               color: "red",
        //           },
        //           // Solo aplica color al Icon del link
        //           ".Culqi-Text-Link .Culqi-Icon": {
        //               color: "blue",
        //           },
        //           // Message, color aplica para text e ícono
        //           ".Culqi-message": {
        //               color: "blue",
        //           },
        //           // cambia el color solo del ícono
        //           ".Culqi-message .Culqi-Icon": {
        //               color: "red",
        //           },
        //           ".Culqi-message-warning": {
        //               background: "white",
        //               color: "orange",
        //           },
        //           ".Culqi-message-info": {
        //               background: "white",
        //               color: "black",
        //           },
        //           ".Culqi-message-error": {
        //               background: "black",
        //               color: "yellow",
        //           },
        //           ".Culqi-message-error .Culqi-Icon": {
        //               color: "yellow",
        //           },
                  
        //           // aplica a los labels
        //           ".Culqi-Label": {
        //               color: "var(--soyUnaVariable)",
        //               marginBottom: "20px",
        //           },
        //           ".Culqi-Input": {
        //               border: "1px solid red",
        //               color: "var(--soyUnaVariable)",
        //           },
        //           ".Culqi-Input:focus": {
        //               border: "2px solid black",
        //           },
        //           ".Culqi-Input.input-valid": {
        //               border: "1px solid pink",
        //               background: "black",
        //               color: "var(--colorText)",
        //           },
        //           ".Culqi-Input-Icon-Spinner": {
        //               color: "red",
        //           },
        //           ".Culqi-Input-Select": {
        //               border: "1px solid red",
        //               color: "blue",
        //           },
        //           // aplica para al hacer hover en los options del select
        //           ".Culqi-Input-Select-Options-Hover": {  
        //               color: "red",
        //               background: "black",
        //           },
        //           // aplica para el seleccionado al ser activado
        //           ".Culqi-Input-Select-Selected":{  
        //               color: "green",
        //           },
        //           ".Culqi-Input-Select.active": { // utíl cuando le das click al control
        //               border: "1px solid red",
        //               background: "pink",
        //           },
        //           // aplica al listado de cuotas
        //           ".Culqi-Input-Select-Options": {
        //               background: "gray",
        //           },
        //           // aplica a los botones
        //           ".Culqi-Button": {
        //               background: "red",
        //           },
                  
        //           //--------Menu GENERALES----------------
        //           // el color se aplica para el texto y el ícono del menú
        //           ".Culqi-Menu": {
        //               color: "blue",
        //               //background: "white",
        //           },
                  
        //           // el color se aplica para el ícono del menú
        //           ".Culqi-Menu .Culqi-Icon": {
        //               color: "green",
        //           },
        //           //-------FIN Menu GENERALES----------------
                  
        //           //--------- MENU SELECT-------------
        //           // aplica cuando el select esta seleccionado
        //           ".Culqi-Menu-Selected": { 
        //               //background: "orange",
        //               color: "#D621A5",
        //               //border: "1px solid white",
        //           },
        //           ".Culqi-Menu-Selected .Culqi-Icon": { 
        //               //background: "orange",
        //               color: "red",
        //               //border: "1px solid white",
        //           },
        //           // aplica cuando para las opciones del select menú
        //           ".Culqi-Menu-Options": {
        //               background: "orange",
        //           },
        //           // aplica para las opciones del select menú cuando se hace hover
        //           ".Culqi-Menu-Options-Hover": { 
        //               background: "green",
        //               color: "red",
        //           },
        //           // aplica para los ICONOS de las opciones del select menú cuando se hace hover
        //           ".Culqi-Menu-Options-Hover .Culqi-Icon": {  
        //               color: "blue",
        //           },
                  
        //           //--------- FIN SELECT-------------
                  
        //           //----------------- MENU SLIDERTOP Y SIDEBAR----------------------
        //           /*
        //           ".Culqi-Menu-Item": { 
        //               background: "black",
        //               color: "red",
        //           },
              
        //           // cambia el color para el item menu, tanto texto e ícono seleccionado (no aplica en el select menu)
        //           ".Culqi-Menu-Item.active": { 
        //               color: "white",
        //               //border: "1px solid white",
        //           },
        //           // cambia el color para el ICONO del item menu seleccionado (no aplica en el select menu)
        //           ".Culqi-Menu-Item.active .Culqi-Icon": {
        //               color: "blue",
        //           },
                  
        //           // MODIFICA EL TEXTO DEL MENÚ(no aplica al menú select)
        //           ".Culqi-Menu-Item-Text": { // reemplaza a la clase .Culqi-Menu-Item 
        //               "font-size": "12px",
        //               color: "green",
        //           },
                  
        //           // cambia el color de los ICONOS ARROW DE sliderTop
        //           ".Culqi-Menu .Culqi-Icon-Arrow": {
        //               color: "blue",
        //           },
        //           // CAMBIA EL COLOR DE LA BARRA LATERAL DE SIDEBAR
        //           ".Culqi-Menu-Item.active .Culqi-Bar": { 
        //               background: "blue" 
        //           },
        //           */
        //       },
        //   });
        // console.log(Culqi.settings);
        console.log(Culqi);
        Culqi.open();
        // e.preventDefault();
    };

    useEffect(() => {
        window.culqi = () => {
            if (Culqi.token) {
                // ¡Objeto Token creado exitosamente!
                const token = Culqi.token.id;
                console.log("Se ha creado un Token: ", token);
                axios
                    .post(route("culqui"), { token })
                    .then((response) => {
                        if (response.data.body) {
                            console.log(response.data.body);
                            Culqi.close();
                        } else {
                            console.log(response.data.error);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (Culqi.order) {
                // ¡Objeto Order creado exitosamente!
                const order = Culqi.order;
            } else {
                console.log("Error : ", Culqi.error);
            }
        };
    }, []);

    return (
        <>
            {/* <Button onClick={handlePayment}>Pagar en linea</Button> */}
            <div
                className="cursor-pointer p-4 border-2 border-gray-500 hover:border-cyan-500 rounded-md"
                onClick={handlePayment}
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
