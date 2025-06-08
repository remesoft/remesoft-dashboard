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
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brain-bank/book/:id",
        element: <Book />,
      },
      {
        path: "/brain-bank/create-book",
        element: <CreateBook />,
      },
      {
        path: "/zson/create-invoice",
        element: <Invoice />,
      },
      {
        path: "/zson/preview-invoice",
        element: <InvoicePreview />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default routes;
