import { jsx as _jsx } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
const MenuIconButton = (props) => {
    const { icon, handleClick } = props;
    return (_jsx("button", { onClick: handleClick, className: "hover:bg-secondary/7 grid h-6 w-6 place-content-center rounded-md transition", children: _jsx(HugeiconsIcon, { icon: icon, className: "h-5 w-5" }) }));
};
export default MenuIconButton;
