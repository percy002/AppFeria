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
        flexDirection: "row",
    },
    fotocheck: {
        width: "50%",
        height: "50%",
        backgroundColor: "#A60D29",
        flexDirection: "col",
        alignItems: "center",
        paddingTop: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        width: "70%",
    },
    logo: {
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 5,
    },
    body: {
        flexDirection: "col",
        alignItems: "center",
        width: "100%",
    },
    name: {
        width: "70%",
        marginVertical: 12,
        backgroundColor: "white",
        color: "#A60D29",
        textAlign: "center",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: "bold",
    },

    fotocheckRev: {
        width: "50%",
        height: "50%",
        flexDirection: "col",
        alignItems: "center",
        justifyContent: "center",
    },
    bodyRev: {
        flexDirection: "col",
        alignItems: "center",
        width: "100%",
    },
    headerRev: {
        flexDirection: "row",
        justifyContent: "center",
    },
    qr: {
        width: "160rem",
        marginTop: 8,
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
        color: "#A60D29",
    },
    base:{
        fontSize: 15,
        marginVertical: 5,
        color: "#545C63",
    }
});

// Create Document Component
const Fotocheck = ({ cliente }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.fotocheck}>
                <View style={styles.header}>
                    <Image
                        src={"../images/logos/logo_expoferia_2024.png"}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.body}>
                    <View>
                        <Image src={"../images/cod_QR.png"} style={styles.qr} />
                    </View>
                    <Text style={styles.name}>
                        {cliente.company_name
                            ? cliente.company_name
                            : cliente.name + " " + cliente.last_name}
                    </Text>
                    <View style={styles.header}>
                        <Image
                            src={"../images/logos/logo_gore2.png"}
                            style={styles.logo}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.fotocheckRev}>
                <View style={styles.headerRev}>
                    <Image
                        src={"../images/logos/logo_expoferia_2024.png"}
                        style={styles.qr}
                    />
                </View>
                <View style={styles.bodyRev}>
                    <Text style={styles.title}>Categoría</Text>
                    <Text style={styles.base}>Gobierno Regional</Text>
                    <Text style={styles.title}>Usuario</Text>
                    <Text style={styles.base}>Gobierno Reginal</Text>
                    <Text style={styles.base}>Bloque: II</Text>
                    <Text style={styles.base}>Stand: II-A</Text>
                    
                    <View style={styles.header}>
                        <Image
                            src={"../images/logos/logo_gore_cusco.png"}
                            style={styles.logo}
                        />
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default Fotocheck;
