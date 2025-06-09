import { jsx as _jsx } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
const IconButton = (props) => {
    return (_jsx("button", { className: `${props.className} hover:bg-header-search rounded-full p-2`, children: _jsx(HugeiconsIcon, { icon: props.icon, className: "text-header-item hover:text-header-item-hover h-6 w-6" }) }));
};
export default IconButton;
