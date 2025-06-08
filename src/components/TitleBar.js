import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TitleBar = (props) => {
    return (_jsxs("section", { className: "bg-primary-surface flex items-center justify-between px-4 py-2", children: [_jsx("h2", { className: "text-header text-lg font-semibold", children: props.title }), _jsx("ul", { className: "flex items-center gap-2", children: props.breadcrumbs.map((breadcrumb, index) => (_jsxs("li", { className: "flex items-center text-sm", children: [index > 0 && _jsx("span", { className: "text-muted mr-2", children: "/" }), index === props.breadcrumbs.length - 1 ? (_jsx("span", { className: "text-muted text-md", children: breadcrumb.label })) : (_jsx("a", { href: breadcrumb.link, className: "text-primary hover:text-highlight text-md hover:text-active", children: breadcrumb.label }))] }, index))) })] }));
};
export default TitleBar;
