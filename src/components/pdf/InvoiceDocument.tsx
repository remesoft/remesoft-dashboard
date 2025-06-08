import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "@/assets/zson/logo.png";

// Styles (same as your code – unchanged)
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  logo: {
    width: 55,
    height: 55,
  },
  invoiceInfo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  invoiceText: {
    marginBottom: 4,
  },
  section: {
    paddingVertical: 20,
    flexDirection: "column",
    gap: "5px",
  },
  table: {
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
    textAlign: "right",
  },

  tableColHeader: {
    width: "25%",
    backgroundColor: "#eee",
    padding: 5,
    textAlign: "center",
  },
  tableColHeader1: {
    width: "55%",
    backgroundColor: "#eee",
    padding: 5,
    textAlign: "left",
  },
  tableColHeaderEnd: {
    textAlign: "right",
  },
  tableCol: {
    width: "25%",
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 5,
    textAlign: "center",
  },
  tableCol1: {
    width: "55%",
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 5,
    textAlign: "left",
  },
  tableColEnd: {
    textAlign: "right",
  },
  tableCell: {
    fontSize: 10,
  },
  totalContainer: {
    width: "250px",
    marginLeft: "auto",
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: "#gray",
    padding: "5px 5px",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalFinalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "250px",
    marginLeft: "auto",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  totalTextBold: {
    fontWeight: "700",
    fontSize: 11,
  },
  notesSection: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  boldText: {
    fontWeight: "600",
    marginBottom: 5,
  },
});

// Types
interface Product {
  name: string;
  quantity: string;
  unitPrice: string;
  total: string;
}

interface InvoiceDocumentProps {
  invoiceNumber: string;
  date: string;
  customerName: string;
  customerAddress: string;
  notes: string;
  products: Product[];
  subtotal: string;
  total: string;
  deliveryCharge: string;
}

// Styles (same as before, omitted here for brevity)

// Component
const InvoiceDocument: React.FC<InvoiceDocumentProps> = ({
  invoiceNumber,
  date,
  customerName,
  customerAddress,
  notes,
  products,
  subtotal,
  total,
  deliveryCharge,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
          <View style={styles.invoiceInfo}>
            <Text
              style={[styles.invoiceText, { fontSize: 20, fontWeight: "700" }]}
            >
              Invoice
            </Text>
            <Text style={styles.invoiceText}>{invoiceNumber}</Text>
            <Text style={styles.invoiceText}>Date: {date}</Text>
          </View>
        </View>

        {/* Customer Info */}
        <View style={styles.section}>
          <Text style={{ color: "gray" }}>BILL TO :</Text>
          <Text style={{ fontWeight: "800", fontSize: "12px" }}>
            {customerName}
          </Text>
          <Text>{customerAddress}</Text>
        </View>

        {/* Product Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader1}>
              <Text style={styles.tableCell}>Description</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCell}>Quantity</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCell}>Price</Text>
            </View>
            <View style={[styles.tableColHeader, styles.tableColHeaderEnd]}>
              <Text style={styles.tableCell}>Total</Text>
            </View>
          </View>

          {/* Table Body */}
          {products.map((product, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{product.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.unitPrice}</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColEnd]}>
                <Text style={styles.tableCell}>{product.total}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Totals (as strings) */}
        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <Text>Subtotal:</Text>
            <Text style={{ fontWeight: "700" }}>{subtotal}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text>Delivery Charge:</Text>
            <Text style={{ fontWeight: "700" }}>{deliveryCharge}</Text>
          </View>
        </View>

        <View style={styles.totalFinalRow}>
          <Text style={styles.totalTextBold}>Total Amount</Text>
          <Text style={styles.totalTextBold}>{total}</Text>
        </View>

        {/* Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.boldText}>Notes:</Text>
          <Text>{notes}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocument;
