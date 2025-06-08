import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import TitleBar from "@/components/TitleBar";
import ChapterHeader from "@/components/ui/brain-bank/ChapterHeader";
import MetaBar from "@/components/ui/MetaBar";
import { Delete02FreeIcons, PlusSignFreeIcons, Settings01FreeIcons, } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { pdf } from "@react-pdf/renderer";
import InvoiceDocument from "@/components/pdf/InvoiceDocument";
const generateInvoiceNumber = () => {
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
};
const Invoice = () => {
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [date, setDate] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [deliveryCharge, setDeliveryCharge] = useState("130");
    const [notes, setNotes] = useState("");
    const [products, setProducts] = useState([
        { name: "Printed T-Shirt :", unitPrice: "350", quantity: "1" },
    ]);
    useEffect(() => {
        setInvoiceNumber(generateInvoiceNumber());
        const today = new Date();
        const formatted = today.toISOString().split("T")[0];
        setDate(formatted);
    }, []);
    const handleAddProduct = () => {
        setProducts([...products, { name: "", unitPrice: "0", quantity: "0" }]);
    };
    const handleRemoveProduct = (index) => {
        const updated = [...products];
        updated.splice(index, 1);
        setProducts(updated);
    };
    const handleProductChange = (index, field, value) => {
        const updated = [...products];
        updated[index][field] = value;
        setProducts(updated);
    };
    const handleDownloadInvoice = async () => {
        const computedProducts = products.map((p) => {
            const quantity = parseFloat(p.quantity) || 0;
            const unitPrice = parseFloat(p.unitPrice) || 0;
            const total = quantity * unitPrice;
            return {
                name: p.name,
                quantity: p.quantity,
                unitPrice: p.unitPrice,
                total: total.toFixed(2),
            };
        });
        const subtotal = computedProducts.reduce((acc, p) => acc + parseFloat(p.total), 0);
        const charge = parseFloat(deliveryCharge) || 0;
        const total = subtotal + charge;
        const blob = await pdf(_jsx(InvoiceDocument, { invoiceNumber: invoiceNumber, date: date, customerName: customerName, customerAddress: customerAddress, notes: notes, products: computedProducts, subtotal: subtotal.toFixed(2), deliveryCharge: charge.toFixed(2), total: total.toFixed(2) })).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `Invoice-${invoiceNumber || "zson"}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    };
    const headerOptions = {
        name: "Invoice Details",
        options: [
            {
                label: "Edit",
                icon: Settings01FreeIcons,
                onClick: () => console.log("Edit clicked"),
            },
            {
                label: "Delete",
                icon: Delete02FreeIcons,
                onClick: () => console.log("Delete clicked"),
            },
            {
                label: "Download",
                icon: Settings01FreeIcons,
                onClick: handleDownloadInvoice,
            },
        ],
    };
    const pageTitle = "Create Invoice";
    const pageBreadcrumbs = [
        { label: "Remesoft", link: "/" },
        { label: "zson", link: "/zson" },
        { label: "invoice", link: "/invoice" },
    ];
    return (_jsxs("div", { className: "text-text-primary h-full w-full", children: [_jsx(TitleBar, { title: pageTitle, breadcrumbs: pageBreadcrumbs }), _jsx("div", { className: "h-[85%] overflow-y-scroll px-3", children: _jsxs("section", { className: "bg-primary-surface border-secondary/20 relative mt-2 rounded-md border", children: [_jsx(ChapterHeader, { ...headerOptions }), _jsx(MetaBar, { value: products.length, message: "Products in this invoice." }), _jsxs("form", { className: "flex flex-col gap-4 p-4", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "font-semibold", children: "Invoice Number" }), _jsx("input", { type: "text", value: invoiceNumber, placeholder: "345445365324", onChange: (e) => setInvoiceNumber(e.target.value), className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 rounded-md border px-4 py-2" })] }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "font-semibold", children: "Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 w-full rounded-md border px-4 py-2" })] }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "font-semibold", children: "Customer Name" }), _jsx("input", { type: "text", value: customerName, placeholder: "ex. Jhon Smith", onChange: (e) => setCustomerName(e.target.value), className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 rounded-md border px-4 py-2" })] }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "font-semibold", children: "Customer Address" }), _jsx("textarea", { value: customerAddress, placeholder: "ex. Noyabazar Rd, Sylhet", onChange: (e) => setCustomerAddress(e.target.value), className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 rounded-md border px-4 py-2" })] }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "font-semibold", children: "Delivery Charge" }), _jsx("input", { type: "text", value: deliveryCharge, placeholder: "ex. 190.00", onChange: (e) => setDeliveryCharge(e.target.value), className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 rounded-md border px-4 py-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "font-semibold", children: "Products" }), products.map((p, i) => (_jsxs("div", { className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 mt-2 rounded-md border p-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h4", { className: "font-semibold", children: ["#", i + 1] }), _jsx("button", { type: "button", onClick: () => handleRemoveProduct(i), className: "hover:bg-primary-surface focus:outline-highlight/30 hover:border-secondary/5 rounded-full border border-transparent p-1", children: _jsx(HugeiconsIcon, { className: "h-5 w-5", icon: Delete02FreeIcons }) })] }), _jsxs("div", { className: "flex flex-col gap-2 pt-2", children: [_jsx("input", { type: "text", placeholder: "Product Name", value: p.name, onChange: (e) => handleProductChange(i, "name", e.target.value), className: "bg-primary-surface focus:outline-highlight/30 border-secondary/20 rounded-md border px-4 py-2" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", placeholder: "Quantity", value: p.quantity, onChange: (e) => handleProductChange(i, "quantity", e.target.value), className: "bg-primary-surface focus:outline-highlight/30 border-secondary/20 w-full rounded-md border px-4 py-2" }), _jsx("input", { type: "text", placeholder: "Unit Price", value: p.unitPrice, onChange: (e) => handleProductChange(i, "unitPrice", e.target.value), className: "bg-primary-surface focus:outline-highlight/30 border-secondary/20 w-full rounded-md border px-4 py-2" })] })] })] }, i))), _jsxs("button", { type: "button", onClick: handleAddProduct, className: "text-highlight mt-2 flex items-center gap-2 font-semibold", children: [_jsx(HugeiconsIcon, { className: "h-4 w-4", icon: PlusSignFreeIcons }), "Add new product"] })] }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "font-semibold", children: "Notes" }), _jsx("textarea", { placeholder: "Thank you for your business!", value: notes, onChange: (e) => setNotes(e.target.value), className: "bg-secondary-surface focus:outline-highlight/30 border-secondary/10 rounded-md border px-4 py-2" })] }), _jsx("button", { type: "button", onClick: handleDownloadInvoice, className: "bg-highlight w-full rounded-md px-4 py-2 font-semibold text-white", children: "Download" })] })] }) })] }));
};
export default Invoice;
