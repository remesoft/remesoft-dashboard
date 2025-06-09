import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setHeadingSize, setParagraphSize } from './themeSlice';
const Theme = () => {
    const dispatch = useAppDispatch();
    const { headingSize, paragraphSize } = useAppSelector(state => state.theme);
    return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block font-semibold", children: "Heading Size" }), _jsxs("select", { value: headingSize, onChange: (e) => dispatch(setHeadingSize(e.target.value)), className: "border p-2 rounded", children: [_jsx("option", { value: "text-xl", children: "text-xl" }), _jsx("option", { value: "text-2xl", children: "text-2xl" }), _jsx("option", { value: "text-3xl", children: "text-3xl" }), _jsx("option", { value: "text-4xl", children: "text-4xl" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-semibold", children: "Paragraph Size" }), _jsxs("select", { value: paragraphSize, onChange: (e) => dispatch(setParagraphSize(e.target.value)), className: "border p-2 rounded", children: [_jsx("option", { value: "text-sm", children: "text-sm" }), _jsx("option", { value: "text-base", children: "text-base" }), _jsx("option", { value: "text-lg", children: "text-lg" }), _jsx("option", { value: "text-xl", children: "text-xl" })] })] })] }));
};
export default Theme;
