import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router";
import routes from "./router";
const App = () => {
    return _jsx(RouterProvider, { router: routes });
};
export default App;
