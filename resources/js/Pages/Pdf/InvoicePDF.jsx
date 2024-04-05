import { PDFViewer } from "@react-pdf/renderer";
import InvoicePdf from "@/Components/Pdf/InvoicePdf";
// Create Document Component
const InvoicePDF = ({client, stands, payment}) => (
    <div className="w-screen h-screen">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
            <InvoicePdf client={client} stands={stands} payment={payment}/>
        </PDFViewer>
    </div>
);

export default InvoicePDF;
