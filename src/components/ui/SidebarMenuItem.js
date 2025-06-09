import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavLink } from "react-router-dom";
const SidebarMenuItem = ({ link, icon, label, }) => (_jsx("li", { children: _jsxs(NavLink, { to: link, className: ({ isActive }) => `sidebar-menu-item ${isActive ? "active" : ""}`, children: [_jsx(HugeiconsIcon, { icon: icon }), label] }) }));
export default SidebarMenuItem;
