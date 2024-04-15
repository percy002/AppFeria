import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "col",
        backgroundColor: "#FFFFFF",
        padding: 30,
        fontSize: 12,
        fontFamily: "Helvetica",
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    textBase: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
    },
    textCenter: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
    },
    signature: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
    },
    signatureBody: {
        flexDirection: "col",
        alignItems: "center",
    },
    signatureLine: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "200%",
    },
    signatureText: {
        textAlign: "center",
        marginTop: 10,
    },
    logo: {
        width: "30%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
});

// Create Document Component
const Contrato = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <View style={styles.header}>
                    <Image
                        src={"../images/logo_gerepro.png"}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.title}>CONTRATO DE CONCESIÓN</Text>
                <Text style={styles.textCenter}>SOBRE ESPACIO COMERCIAL</Text>
                <Text style={styles.title}>FERIA – 2024</Text>
                <Text style={styles.textBase}>
                    Entre los suscritos a saber FEDERICO ESTRADA GARCIA mayor de
                    edad y vecino de Medellín, quien actúa en nombre y
                    representación legal de la CORPORACIÓN LONJA DE PROPIEDAD
                    RAÍZ DE MEDELLÍN Y ANTIOQUIA, domiciliada en Medellín, la
                    cual acredita con el Certificado de Existencia y
                    Representación legal de la Cámara de Comercio de Medellín
                    que hace parte integrante del presente contrato, por una
                    parte, y que en lo sucesivo se declara como LA ORGANIZADORA,
                    y por la otra ______________________________________ mayor
                    de edad, vecino de Medellín, actuando en nombre y
                    representación legal de la firma
                    ___________________________________________ con domicilio en
                    ______________ y quien para todos los efectos del mismo se
                    denominará EL CONCESIONARIO, se celebra contrato mercantil
                    de concesión de espacio comercial, el cual se regulará por
                    la legislación mercantil colombiana y en especial por las
                    siguientes cláusulas:
                </Text>
                <Text style={styles.textBase}>
                    PRIMERA: OBJETO. LA ORGANIZADORA se obliga a conceder a EL
                    CONCESIONARIO, el uso de uno o varios stands previamente
                    determinado o determinados, dentro del Centro Comercial San
                    Nicolás, para que éste los destine exclusivamente a:
                    (indique cuál o cuáles) - Exhibición y venta de proyectos (
                    ) - Venta de vivienda usada ( ) - Arrendamientos ( ) - Otros
                    productos y servicios complementarios del sector. ¿Cuál?
                    _____________________
                </Text>

                <Text style={styles.textBase}>
                    La concesión del espacio únicamente da derecho a la
                    utilización del espacio contratado.
                </Text>

                <Text style={styles.textBase}>
                    En el recinto ferial, el (los) espacio(s) objeto de
                    concesión será(n) el(los) designado(s) con el(los) No.
                    __________ según la distribución del plano estipulada por LA
                    ORGANIZADORA de conformidad con su organización interna.
                </Text>
                <Text style={styles.textBase}>
                    Sólo mediante expresa autorización dada por EL CONCESIONARIO
                    y en casos de fuerza mayor, podrá variarse por parte de LA
                    ORGANIZADORA, la ubicación del espacio sin faltar a los
                    principios de equidad y sin que ello conlleve para EL
                    CONCESIONARIO derecho alguno de indemnización.
                </Text>
                <Text style={styles.textBase}>
                    De esta forma se acuerda entre las partes que el área de
                    exhibición y venta concedida será de _____x_____ ( _________
                    ) metros cuadrados aproximadamente
                </Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View>
                <View style={styles.header}>
                    <Image
                        src={"../images/logo_gerepro.png"}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.textBase}>
                    SEGUNDA: CONTRAPRESTACIÓN. EL CONCESIONARIO pagará a LA
                    ORGANIZADORA, como contraprestación por el espacio cedido a
                    título de concesión comercial, un valor de $
                    _______________________
                    (__________________________________________________) IVA del
                    19 % no incluido.
                </Text>
                <Text style={styles.textBase}>TERCERA: FORMA DE PAGO</Text>
                <Text style={styles.textBase}>
                    Se cancela el cien por ciento (100%) de la participación
                    antes del 28 de marzo de 2019.
                </Text>
                <Text style={styles.textBase}>
                    Nota: Se realizará solo una factura por el valor total de su
                    participación.
                </Text>
                <Text style={styles.textBase}>
                    El pago deberá hacerse a nombre de LA ORGANIZADORA – Lonja
                    de Propiedad Raíz de Medellín y Antioquia en la Cuenta de
                    Ahorros de Bancolombia No. 10030469845
                </Text>
                <Text style={styles.textBase}>
                    Cuando se realice el pago, el comprobante debe ser enviado a
                    los correos electrónicos ejecutivo.comercial@lonja.org.co,
                    eventos@lonja.org.co, y secretaria.eventos@lonja.org.co
                </Text>
                <Text style={styles.textBase}>
                    PARÁGRAFO 1: Sólo tendrán el carácter de reserva en firme
                    aquellos contratos que estén acompañados del pago con base
                    en lo ya estipulado.
                </Text>
                <Text style={styles.textBase}>
                    CUARTA: CESIÓN. Los espacios comerciales son indivisibles,
                    por lo que en ningún caso podrá EL CONCESIONARIO ceder total
                    o parcialmente los derechos y obligaciones adquiridas en
                    virtud del presente contrato, ni celebrar contrataciones
                    para uso del espacio concedido, con empresas que desarrollen
                    su misma actividad o actividades o servicios diferentes.
                </Text>
                <Text style={styles.textBase}>
                    QUINTA: INCUMPLIMIENTO O RENUNCIA. El incumplimiento o
                    renuncia por parte de EL CONCESIONARIO, debe ser realizada
                    por escrito y dará lugar al pago de una indemnización a LA
                    ORGANIZADORA de la siguiente manera:
                </Text>
                <Text style={styles.textBase}>
                    Desde el momento de la firma del contrato hasta el
                    veintiocho (28) de marzo de 2019, la indemnización será
                    equivalente al setenta (70%) del valor total de la
                    participación. A partir del veintinueve (29) de marzo de
                    2019, la indemnización será equivalente al cien por ciento
                    (100%) del valor de la participación, montos que podrán ser
                    descontados automáticamente por parte de LA ORGANIZADORA, de
                    los valores cancelados por EL CONCESIONARIO o en caso de no
                    haberse realizado pagos, se facturará el valor
                    correspondiente a la indemnización
                </Text>
                <Text style={styles.textBase}>
                    En caso de incumplimiento o inasistencia a uno, varios o
                    todos los días del evento ferial por parte de EL
                    CONCESIONARIO no habrá lugar a devolución del dinero
                    cancelado ni indemnización alguna por parte de LA
                    ORGANIZADORA.
                </Text>
            </View>

            <View style={styles.signature}>
                <View style={styles.signatureBody}>
                    <View style={styles.signatureLine} />
                    <Text style={styles.signatureText}>La Organizadora</Text>
                </View>
                <View style={styles.signatureBody}>
                    <View style={styles.signatureLine} />
                    <Text style={styles.signatureText}>El Beneficiario</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default Contrato;
