import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from "../hooks"; // adjust path as needed
import { useTranslation } from "react-i18next";
const Name = () => {
    const { t } = useTranslation();
    const { headingSize, paragraphSize } = useAppSelector((state) => state.theme);
    return (_jsxs("div", { className: "space-y-4 p-4", children: [_jsx("h2", { className: `${headingSize} font-bold`, children: "User Name Heading" }), _jsx("p", { className: `${paragraphSize}`, children: t("welcome") })] }));
};
export default Name;
