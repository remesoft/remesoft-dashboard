// For preview purposes only (e.g., in a separate route or debug panel)
import { PDFViewer } from "@react-pdf/renderer";
import InvoiceDocument from "@/components/pdf/InvoiceDocument";

// Wrap this in a separate dev/test component
const InvoicePreview = () => {
  return (
    <PDFViewer width="100%" height="800">
      <InvoiceDocument
        invoiceNumber="ZSON-2344546-3434"
        date="2025-06-08"
        customerName="John Doe"
        customerAddress="123 Example Street, City, Country"
        notes="Thank you for your business!"
        products={[
          {
            name: "Printed T-Shirt",
            unitPrice: "300",
            quantity: "3",
            total: "900", // 300 * 3 = 900
          },
          {
            name: "Hoodie",
            unitPrice: "500",
            quantity: "2",
            total: "1000", // 500 * 2 = 1000
          },
        ]}
        subtotal="1900.00" // 900 + 1000
        total="2090.00" // subtotal + tax
        deliveryCharge="190.00"
      />
    </PDFViewer>
  );
};

export default InvoicePreview;
