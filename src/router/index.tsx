import { createBrowserRouter, Navigate } from "react-router-dom";
import CreateBook from "@/pages/brain_bank/CreateBook";
import ManageBook from "@/pages/brain_bank/ManageBook";
import Dashboard from "@/layout/Dashboard";
import BBDashboard from "@/pages/brain_bank/BBDashboard";
import Notification from "@/pages/brain_bank/ManageNotification";

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
    path: "/brain-bank/notification",
    element: <Notification />,
  },
  {
    path: "/brain-bank/book/:bookId",
    element: <ManageBook />,
  },
  {
    path: "/brain-bank/book/:bookId/group/:groupId",
    element: <ManageBook />,
  },
  {
    path: "/brain-bank/book/:bookId/group/:groupId/question/:questionId",
    element: <ManageBook />,
  },
  {
    path: "/brain-bank/book/:bookId/group/:groupId/question/:questionId",
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
