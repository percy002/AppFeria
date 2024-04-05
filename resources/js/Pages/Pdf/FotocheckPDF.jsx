import { PDFViewer } from "@react-pdf/renderer";
import Fotocheck from "@/Components/Pdf/Fotocheck";
// Create Document Component
const InvoicePDF = ({client}) => {
    return (
    <div className="w-screen h-screen">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
            <Fotocheck cliente = {client} />
        </PDFViewer>
    </div>
    )
};

export default InvoicePDF;
