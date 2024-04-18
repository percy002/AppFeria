import { Button } from "flowbite-react";
import { useEffect } from "react"; // Importa useEffect
import PaymentForm from "../Izipay/PaymentForm";

const ModalPagoOnline = () => {
    // Función para manejar el pago
    const handlePayment = () => {
        Culqi.settings({
            title: "Culqi Store",
            currency: "PEN",
            amount: 1000,
            order: "ord_live_0CjjdWhFpEAZlxlz",
            publickey: "pk_test_d31d0bc237c6f16f",
        });

        // Abre el formulario de Culqi
        Culqi.open();
    };

    // Inicializa Culqi cuando se monta el componente
    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = "https://checkout.culqi.com/js/v4";
        // script.onload = () => {
        //     Culqi.publicKey = "pk_test_d31d0bc237c6f16f";
        // };
        // document.body.appendChild(script);
    }, []);

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

                // En esta línea de código debemos enviar el "Culqi.token.id"
                // hacia tu servidor con Ajax
            } else if (Culqi.order) {
                // ¡Objeto Order creado exitosamente!
                const order = Culqi.order;
                console.log("Se ha creado el objeto Order: ", order);
            } else {
                // Mostramos JSON de objeto error en consola
                console.log("Error : ", Culqi.error);
            }
        };
    }, []);

    return (
        <>
            <Button onClick={handlePayment}>Pagar en linea</Button>

            <PaymentForm />
        </>
    );
};

export default ModalPagoOnline;
