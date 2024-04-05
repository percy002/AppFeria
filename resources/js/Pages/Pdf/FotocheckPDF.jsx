import { PDFViewer } from "@react-pdf/renderer";
// import InvoicePdf from "@/Components/Pdf/InvoicePdf";
import Fotocheck from "@/Components/Pdf/Fotocheck";
// Create Document Component
const InvoicePDF = () => (
    <div className="w-screen h-screen">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
            <Fotocheck />
        </PDFViewer>
    </div>
);

export default InvoicePDF;
