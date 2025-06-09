import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
import { CommandFreeIcons, Search01FreeIcons, } from "@hugeicons/core-free-icons";
const Search = (props) => {
    return (_jsxs("form", { className: `${props.className} bg-header-search flex w-62 cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 transition-opacity duration-200 hover:opacity-80`, action: "", children: [_jsx(HugeiconsIcon, { icon: Search01FreeIcons, className: "text-header-item h-5 w-5" }), _jsx("p", { className: "text-header-item flex-grow", children: "Search now..." }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(HugeiconsIcon, { icon: CommandFreeIcons, className: "text-header-item ml-2 h-5 w-5" }), _jsx("span", { className: "text-header-item", children: "K" })] })] }));
};
export default Search;
