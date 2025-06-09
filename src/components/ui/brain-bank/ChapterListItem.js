import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Book02FreeIcons, PlusSignFreeIcons, Delete02FreeIcons, ArrowRight01FreeIcons, } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, AnimatePresence } from "framer-motion";
import GroupListItem from "./GroupListItem";
// Single Chapter Item
const ChapterListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen((prev) => !prev);
    return (_jsxs("li", { className: `group flex cursor-pointer flex-col gap-2 rounded-md px-2 py-2 transition ${isOpen ? "bg-secondary-surface" : "hover:bg-secondary-surface"}`, children: [_jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "flex gap-2", children: [_jsxs("div", { className: "relative", onClick: toggleDropdown, children: [_jsx(HugeiconsIcon, { className: `transition ${isOpen ? "scale-0" : "group-hover:scale-0"}`, icon: Book02FreeIcons }), _jsx("button", { className: `hover:bg-secondary/7 absolute top-0.5 grid h-6 w-6 place-content-center rounded-md transition ${isOpen ? "scale-100" : "scale-0 group-hover:scale-100"}`, children: _jsx(HugeiconsIcon, { icon: ArrowRight01FreeIcons, className: `${isOpen && "rotate-90"} h-4.5 w-4.5 transition` }) })] }), _jsx("span", { className: "text-secondary", children: props.name })] }), _jsxs("div", { className: "text-secondary flex items-center gap-1", children: [_jsx("button", { className: `hover:bg-secondary/7 hidden h-6 w-6 place-content-center rounded-md transition ${isOpen ? "scale-100" : "group-hover:grid"}`, children: _jsx(HugeiconsIcon, { icon: Delete02FreeIcons, className: "h-4.5 w-4.5" }) }), _jsx("button", { className: `hover:bg-secondary/7 hidden h-6 w-6 place-content-center rounded-md transition ${isOpen ? "scale-100" : "group-hover:grid"}`, children: _jsx(HugeiconsIcon, { icon: PlusSignFreeIcons, className: "h-4.5 w-4.5" }) })] })] }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.25, ease: "easeInOut" }, className: "overflow-hidden", children: _jsx("ul", { className: "mt-1 rounded-md shadow", children: props.groups.map((item) => (_jsx(GroupListItem, { id: item.id, name: item.name }))) }) })) })] }));
};
export default ChapterListItem;
