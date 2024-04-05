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
        width: "50%",
        padding: 15,
    },
    body: {
        flexDirection: "col",
    },
    name: {
        marginTop: 15,
        color: "white",
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
});

// Create Document Component
const Fotocheck = ({ cliente }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.fotocheck}>
                <View style={styles.header}>
                    <Image src={"images/example.jpg"} style={styles.logo} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.name}>
                        {cliente.company_name
                            ? cliente.company_name
                            : cliente.name + " " + cliente.last_name}
                    </Text>
                </View>
            </View>
            <View style={styles.fotocheckRev}>
                <View style={styles.headerRev}>
                    <Image src={"images/example.jpg"} style={styles.logo} />
                </View>
                <View style={styles.bodyRev}>
                    <Text style={styles.name}>Organización</Text>
                    <Text style={styles.name}>Feria Huancaro</Text>
                    <Text style={styles.name}>59 Edición</Text>
                    <Text style={styles.name}>Gore Gerepro Mypes</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default Fotocheck;
