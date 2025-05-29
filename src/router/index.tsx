import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home";
import CreateBook from "../pages/brain_bank/CreateBook";
import Test from "../layout/Test";

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
        path: "/brain-bank/create-book",
        element: <CreateBook />,
      },
      //   {
      //     path: "/products",
      //     element: <Products />,
      //   },
      //   {
      //     path: "/orders",
      //     element: <Orders />,
      //   },
      //   {
      //     path: "/books",
      //     element: <Books />,
      //   },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default routes;
