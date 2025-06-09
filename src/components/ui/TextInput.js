import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HugeiconsIcon } from "@hugeicons/react";
const TextInput = (props) => {
    return (_jsxs("div", { className: "bg-primary-surface flex rounded-md px-3 py-2.5", children: [_jsx("input", { type: "text", className: "text-text flex-1 bg-transparent font-semibold focus:outline-none", placeholder: props.placeholder || "", value: props.value || "", onChange: props.onChange }), props.icon && (_jsx(HugeiconsIcon, { icon: props.icon, className: "text-component-background-text" }))] }));
};
export default TextInput;
