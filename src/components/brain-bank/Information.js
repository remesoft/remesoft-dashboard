import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ChapterHeader from "@/components/ui/brain-bank/ChapterHeader";
import { ArrowDown01FreeIcons, Settings01FreeIcons, } from "@hugeicons/core-free-icons";
import { useSelector } from "react-redux";
import { HugeiconsIcon } from "@hugeicons/react";
// COMPONENT: preview component
const Preview = ({ type, content }) => {
    if (type === "video" && content) {
        return (_jsx("div", { className: "mt-4", children: _jsx("iframe", { src: content, title: "YouTube video player", className: "aspect-video w-full rounded-md", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerPolicy: "strict-origin-when-cross-origin", allowFullScreen: true }) }));
    }
    return null;
};
const InsertComponent = ({ type, content, onTypeChange, onContentChange, }) => {
    return (_jsxs("div", { className: "p-2", children: [_jsxs("div", { className: "relative inline-block w-full", children: [_jsxs("select", { value: type, onChange: (e) => onTypeChange(e.target.value), className: "bg-secondary-surface border-secondary/5 block w-full appearance-none rounded-md border px-4 py-2 pr-10 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none", children: [_jsx("option", { value: "video", children: "Video" }), _jsx("option", { value: "article", children: "Article" })] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700", children: _jsx(HugeiconsIcon, { className: "h-5 w-5", icon: ArrowDown01FreeIcons }) })] }), _jsx("input", { className: "bg-secondary-surface border-secondary/5 mt-2 w-full rounded-md border px-4 py-2 focus:outline-0", type: "text", placeholder: type === "video"
                    ? "https://youtube.com/embed/example"
                    : "Enter article link", value: content, onChange: (e) => onContentChange(e.target.value) })] }));
};
// COMPONENT: information component
const Information = () => {
    const [mode, setMode] = useState("insert");
    const [type, setType] = useState("video");
    const [content, setContent] = useState("");
    const { book, loading, error } = useSelector((state) => state.book);
    const headerOptions = {
        name: "Additional Info",
        options: [
            {
                label: "Edit",
                icon: Settings01FreeIcons,
                onClick: () => console.log("Edit clicked"),
            },
            {
                label: "Delete",
                icon: Settings01FreeIcons,
                onClick: () => console.log("Delete clicked"),
            },
        ],
    };
    return (_jsxs("section", { className: "bg-primary-surface relative w-76 rounded-md", children: [_jsx(ChapterHeader, { ...headerOptions }), _jsxs("div", { className: "bg-secondary-surface flex text-sm", children: [_jsx("button", { onClick: () => setMode("insert"), className: `${mode === "insert" && "active"} border-highlight flex-1 py-3 transition [.active]:border-b-3 [.active]:font-semibold`, children: "Insert" }), _jsx("button", { onClick: () => setMode("preview"), className: `${mode === "preview" && "active"} border-highlight flex-1 py-3 transition [.active]:border-b-3 [.active]:font-semibold`, children: "Preview" })] }), mode === "insert" && (_jsx(InsertComponent, { type: type, content: content, onTypeChange: setType, onContentChange: setContent })), mode === "preview" && _jsx(Preview, { type: type, content: content })] }));
};
export default Information;
