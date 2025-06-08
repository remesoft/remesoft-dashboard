import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router";
const Test = () => {
    return (_jsxs("main", { className: "flex h-screen w-screen overflow-x-hidden", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex w-full flex-col overflow-hidden", children: [_jsx(Header, {}), _jsx("div", { className: "flex-grow overflow-hidden bg-slate-200", children: _jsx(Outlet, {}) })] })] }));
};
export default Test;
