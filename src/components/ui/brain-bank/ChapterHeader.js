import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
const ChapterHeader = ({ options, name }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    return (_jsxs("div", { className: "flex items-center justify-between px-3 py-3", children: [_jsx("h3", { className: "text-md font-semibold", children: name }), _jsxs("div", { className: "relative", children: [_jsx("button", { onClick: toggleDropdown, className: "hover:bg-secondary-surface rounded-full p-1.5 transition", children: _jsx(HugeiconsIcon, { icon: Settings01FreeIcons, className: "text-details h-4.5 w-4.5" }) }), isDropdownOpen && (_jsx("div", { className: "bg-primary-surface absolute right-0 z-10 mt-2 w-40 rounded-md shadow-md", children: _jsx("ul", { className: "text-primary p-1 text-sm", children: options.map((option, index) => (_jsxs("li", { onClick: () => {
                                    option.onClick?.();
                                    setIsDropdownOpen(false); // Optional: close dropdown after click
                                }, className: "hover:bg-secondary-surface flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5", children: [_jsx(HugeiconsIcon, { icon: option.icon, className: "h-4 w-4" }), option.label] }, index))) }) }))] })] }));
};
export default ChapterHeader;
