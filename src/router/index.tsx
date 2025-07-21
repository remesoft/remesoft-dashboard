import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import CreateBook from "@/pages/brain_bank/CreateBook";
import ManageBook from "@/pages/brain_bank/ManageBook";
import BrainBankDashboard from "@/pages/brain_bank/BrainBankDashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Navigate to="/brain-bank/dashboard" />,
      },
      {
        path: "/brain-bank/dashboard",
        element: <BrainBankDashboard />,
      },
      {
        path: "/brain-bank/create-book",
        element: <CreateBook />,
      },
      {
        path: "/brain-bank/books/:bookId",
        element: <ManageBook />,
      },
      {
        path: "/brain-bank/books/:bookId/groups/:groupId",
        element: <ManageBook />,
      },
      {
        path: "/brain-bank/books/:bookId/groups/:groupId/questions/:questionId",
        element: <ManageBook />,
      },
    ],
  },
]);

export default routes;
