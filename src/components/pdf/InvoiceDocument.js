import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Document, Page, Text, View, Image, StyleSheet, } from "@react-pdf/renderer";
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
// Styles (same as before, omitted here for brevity)
// Component
const InvoiceDocument = ({ invoiceNumber, date, customerName, customerAddress, notes, products, subtotal, total, deliveryCharge, }) => {
    return (_jsx(Document, { children: _jsxs(Page, { size: "A4", style: styles.page, children: [_jsxs(View, { style: styles.header, children: [_jsx(Image, { src: logo, style: styles.logo }), _jsxs(View, { style: styles.invoiceInfo, children: [_jsx(Text, { style: [styles.invoiceText, { fontSize: 20, fontWeight: "700" }], children: "Invoice" }), _jsx(Text, { style: styles.invoiceText, children: invoiceNumber }), _jsxs(Text, { style: styles.invoiceText, children: ["Date: ", date] })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: { color: "gray" }, children: "BILL TO :" }), _jsx(Text, { style: { fontWeight: "800", fontSize: "12px" }, children: customerName }), _jsx(Text, { children: customerAddress })] }), _jsxs(View, { style: styles.table, children: [_jsxs(View, { style: styles.tableRow, children: [_jsx(View, { style: styles.tableColHeader1, children: _jsx(Text, { style: styles.tableCell, children: "Description" }) }), _jsx(View, { style: styles.tableColHeader, children: _jsx(Text, { style: styles.tableCell, children: "Quantity" }) }), _jsx(View, { style: styles.tableColHeader, children: _jsx(Text, { style: styles.tableCell, children: "Price" }) }), _jsx(View, { style: [styles.tableColHeader, styles.tableColHeaderEnd], children: _jsx(Text, { style: styles.tableCell, children: "Total" }) })] }), products.map((product, index) => (_jsxs(View, { style: styles.tableRow, children: [_jsx(View, { style: styles.tableCol1, children: _jsx(Text, { style: styles.tableCell, children: product.name }) }), _jsx(View, { style: styles.tableCol, children: _jsx(Text, { style: styles.tableCell, children: product.quantity }) }), _jsx(View, { style: styles.tableCol, children: _jsx(Text, { style: styles.tableCell, children: product.unitPrice }) }), _jsx(View, { style: [styles.tableCol, styles.tableColEnd], children: _jsx(Text, { style: styles.tableCell, children: product.total }) })] }, index)))] }), _jsxs(View, { style: styles.totalContainer, children: [_jsxs(View, { style: styles.totalRow, children: [_jsx(Text, { children: "Subtotal:" }), _jsx(Text, { style: { fontWeight: "700" }, children: subtotal })] }), _jsxs(View, { style: styles.totalRow, children: [_jsx(Text, { children: "Delivery Charge:" }), _jsx(Text, { style: { fontWeight: "700" }, children: deliveryCharge })] })] }), _jsxs(View, { style: styles.totalFinalRow, children: [_jsx(Text, { style: styles.totalTextBold, children: "Total Amount" }), _jsx(Text, { style: styles.totalTextBold, children: total })] }), _jsxs(View, { style: styles.notesSection, children: [_jsx(Text, { style: styles.boldText, children: "Notes:" }), _jsx(Text, { children: notes })] })] }) }));
};
export default InvoiceDocument;
