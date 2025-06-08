import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const MetaBar = (props) => {
    return (_jsxs("p", { className: "bg-secondary-surface py-3 text-center text-sm", children: [_jsx("span", { className: "font-semibold", children: props.value }), " ", props.message] }));
};
export default MetaBar;
