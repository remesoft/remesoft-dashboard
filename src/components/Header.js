import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../locales/i18n";
import zson from "@/assets/zson/logo.jpg";
import IconButton from "./ui/IconButton.js";
import { useAppDispatch } from "../hooks";
import { toggleMenu } from "../features/events/eventSlice";
import Search from "./ui/Search";
import { Menu02Icon, Search01Icon, Moon02FreeIcons, Notification03FreeIcons, DashboardCircleEditFreeIcons, } from "@hugeicons/core-free-icons";
const Header = () => {
    const dispatch = useAppDispatch();
    return (_jsxs("header", { className: "bg-header flex justify-between px-2 py-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: () => dispatch(toggleMenu()), className: "text-white", children: _jsx(IconButton, { icon: Menu02Icon }) }), _jsx(Search, { className: "hidden md:flex" })] }), _jsxs("div", { className: "flex items-center justify-between gap-2", children: [_jsx(IconButton, { className: "md:hidden", icon: Search01Icon }), _jsx(IconButton, { className: "hidden md:block", icon: DashboardCircleEditFreeIcons }), _jsx(IconButton, { icon: Notification03FreeIcons }), _jsx(IconButton, { className: "hidden md:block", icon: Moon02FreeIcons }), _jsx("div", { className: "ml-2", children: _jsx("img", { className: "h-8 w-8 rounded-full", src: zson, alt: "avatar" }) })] })] }));
};
export default Header;
