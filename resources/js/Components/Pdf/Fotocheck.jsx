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
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        width: "70%",
    },
    logo: {
        width: "90%",
        padding: 15,
        marginTop: 10
    },
    body: {
        flexDirection: "col",
        alignItems: "center"
    },
    name: {
        marginTop: 15,
        marginBottom: 15,
        color: "white",
        textAlign: "center",
    },

    fotocheckRev: {
        width: "50%",
        height: "50%",
        backgroundColor: "#A60D29",
        flexDirection: "col",
        alignItems: "center",
        justifyContent: "center",
    },
    bodyRev: {
        flexDirection: "col",
        alignItems: "center",
    },
    headerRev: {
        flexDirection: "row",
        justifyContent: "center",
    },
    qr: {
        width: "180rem",
        marginTop: 20
    },
});

// Create Document Component
const Fotocheck = ({ cliente }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.fotocheck}>
                <View style={styles.header}>
                    <Image
                        src={"../images/logo_gerepro.png"}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.body}>
                    <Text style={styles.name}>
                        {cliente.company_name
                            ? cliente.company_name
                            : cliente.name + " " + cliente.last_name}
                    </Text>
                    <View>
                        <Image
                            src={"../images/cod_QR.png"}
                            style={styles.qr}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.fotocheckRev}>
                <View style={styles.headerRev}>
                    <Image
                        src={"../images/logo_gerepro.png"}
                        style={styles.qr}
                    />
                </View>
                <View style={styles.bodyRev}>
                    <Text style={styles.name}>Organización</Text>
                    <Text style={styles.name}>Feria</Text>
                    <Text style={styles.name}># Edición</Text>
                    <Text style={styles.name}>Gore Gerepro Mypes</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default Fotocheck;
