import React from "react";
import { RouterProvider } from "react-router";
import routes from "./router";

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
