import { BrowserRouter } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home";

// import AdminTemplate from "../pages/templates/AdminTemplate";
// import Login from "../pages/admin/Login";
// import Products from "../pages/admin/Products";
// import Books from "../pages/admin/Books";
// import Orders from "../pages/admin/Orders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
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
]);

export default routes;
