import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
const MainContent = () => (_jsx("main", { className: "flex-1 overflow-y-auto bg-gray-100 p-6", children: _jsx("div", { className: "space-y-4", children: Array.from({ length: 50 }).map((_, i) => (_jsxs("div", { className: "rounded bg-white p-4 shadow", children: ["Content Block #", i + 1] }, i))) }) }));
const Dashboard = () => {
    return (_jsxs("div", { className: "flex h-screen w-screen overflow-x-hidden", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex w-full flex-col overflow-hidden", children: [_jsx(Header, {}), _jsx("main", { className: "bg-base flex-grow overflow-hidden", children: _jsx(Outlet, {}) })] })] }));
};
export default Dashboard;
