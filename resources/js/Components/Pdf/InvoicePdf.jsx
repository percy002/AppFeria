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
    },
    section: {
        flexGrow: 1,
        marginTop: 25,
    },
    header: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "space-between",
    },
    logo: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        backgroundColor: "#A60D29",
        color: "#E4E4E4",
    },
    body: {
        fontSize: 11,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    textBase: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
    },
    textCenter: {
        textAlign: "center",
    },
    ticket: {
        backgroundColor: "#A60D29",
        color: "#E4E4E4",
        flexDirection: "col",
        justifyContent: "center",
        padding: 10,
    },
    stands: {
        flexDirection: "row",
        gap: 2,
        justifyContent: "space-between",
    },
    standsCell: {
        flex: 1,
        marginTop: 5
    },
    sectionTitle: {
        fontWeight: "bold",
        paddingBottom: 5,
    },
    tableTitle: {
        textAlign: "center",
        backgroundColor: "#A60D29",
        padding: 5,
        fontWeight: "600",
        color: "#E4E4E4",
    },
    tableHeader: {
        flexDirection: "row",
    }
});

// Create Document Component
const InvoicePdf = ({ client, stands, payment }) => {
    console.log(stands);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.title}>Nota de Venta</Text>
                </View>
                <View style={styles.header}>
                    <Image src={"images/example.jpg"} style={styles.logo} />
                    <View>
                        <Text style={styles.textBase}>
                            Razón Social: Feria de Huancaro{" "}
                        </Text>
                        <Text style={styles.textBase}>RUC: 15165161</Text>
                        <Text style={styles.textBase}>Teléfono: 957515966</Text>
                    </View>
                    <View style={styles.ticket}>
                        <Text style={styles.textCenter}>Numero de Boleta</Text>
                        <Text>758521256244</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Información de los locales
                        </Text>  
                        <View style={styles.tableHeader}>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Categoría</Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Bloque</Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Nombre</Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Precio</Text>
                            </View>
                        </View>                      
                        {stands &&
                            stands.map((stand, index) => (
                                <View style={styles.stands} key={stand.id}>
                                    <View style={styles.standsCell}>
                                        <Text style={styles.textCenter}>
                                            {stand.category.name}
                                        </Text>
                                    </View>
                                    <View style={styles.standsCell}>
                                        <Text style={styles.textCenter}>
                                            {stand.block}
                                        </Text>
                                    </View>
                                    <View style={styles.standsCell}>
                                        <Text style={styles.textCenter}>
                                            {stand.name}
                                        </Text>
                                    </View>
                                    <View style={styles.standsCell}>
                                        <Text style={styles.textCenter}>
                                            s/. {stand.price}.00
                                        </Text>
                                    </View>
                                </View>
                            ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Detalles de pago
                        </Text>
                        <View style={styles.stands}>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Tarifa</Text>
                                <Text style={styles.textCenter}>
                                    s./ {payment.total}.00
                                </Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>IGV</Text>
                                <Text style={styles.textCenter}>s/. 18.05</Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Total</Text>
                                <Text style={styles.textCenter}>
                                    s./{payment.total}.00
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Información del pago
                        </Text>
                        <View style={styles.stands}>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>Pagador</Text>
                                <Text style={styles.textCenter}>
                                    {client.company_name
                                        ? client.company_name
                                        : client.name + " " + client.last_name}
                                </Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>
                                    Fecha de pago
                                </Text>
                                <Text style={styles.textCenter}>
                                    {payment.date}
                                </Text>
                            </View>
                            <View style={styles.standsCell}>
                                <Text style={styles.tableTitle}>
                                    Medio de pago
                                </Text>
                                <Text style={styles.textCenter}>Efectivo</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default InvoicePdf;
