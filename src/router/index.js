import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home";
import CreateBook from "../pages/brain-bank/CreateBook";
import Test from "../layout/Test";
import Book from "@/pages/brain-bank/Book";
import Invoice from "@/pages/zson/Invoice";
import InvoicePreview from "@/pages/zson/InvoicePreview";
const routes = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Dashboard, {}),
        children: [
            {
                path: "/",
                element: _jsx(Home, {}),
            },
            {
                path: "/brain-bank/book/:id",
                element: _jsx(Book, {}),
            },
            {
                path: "/brain-bank/create-book",
                element: _jsx(CreateBook, {}),
            },
            {
                path: "/zson/create-invoice",
                element: _jsx(Invoice, {}),
            },
            {
                path: "/zson/preview-invoice",
                element: _jsx(InvoicePreview, {}),
            },
        ],
    },
    {
        path: "/test",
        element: _jsx(Test, {}),
    },
]);
export default routes;
