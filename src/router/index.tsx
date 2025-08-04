import { createBrowserRouter, Navigate } from "react-router-dom";
import CreateBook from "@/pages/brain_bank/CreateBook";
import ManageBook from "@/pages/brain_bank/ManageBook";
import Dashboard from "@/layout/Dashboard";
import BBDashboard from "@/pages/brain_bank/BBDashboard";

/*----------------------------------
      Application Routes
----------------------------------*/
const BrainBankRoutes = [
  {
    path: "/brain-bank/dashboard",
    element: <BBDashboard />,
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
];

/*----------------------------------
      Application Routes
----------------------------------*/
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Navigate to="/brain-bank/dashboard" />,
      },
      ...BrainBankRoutes, // Brain Bank Routes
    ],
  },
]);

export default routes;
