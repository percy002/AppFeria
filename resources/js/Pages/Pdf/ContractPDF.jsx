import { PDFViewer } from "@react-pdf/renderer";
import Contrato from "@/Components/Pdf/Contrato";
// Create Document Component
const ContractPDF = () => (
    <div className="w-screen h-screen">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
            <Contrato />
        </PDFViewer>
    </div>
);

export default ContractPDF;
