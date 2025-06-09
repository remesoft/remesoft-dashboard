import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Book02FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
const BookUpload = () => {
    const [coverPreview, setCoverPreview] = useState(null);
    // handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            setCoverPreview(null);
        }
    };
    return (_jsxs("label", { htmlFor: "upload-cover", className: "block w-full cursor-pointer rounded-md", children: [_jsx("input", { type: "file", className: "hidden", id: "upload-cover", accept: "image/*", onChange: handleFileChange }), _jsx("div", { className: "border-secondary-border text-muted mb-2 flex h-56 w-full flex-col items-center justify-center overflow-hidden rounded-md border border-dashed", children: coverPreview ? (_jsx("img", { src: coverPreview, alt: "Book Cover Preview", className: "h-full w-full object-contain py-4 shadow-2xl shadow-black" })) : (_jsxs(_Fragment, { children: [_jsx(HugeiconsIcon, { icon: Book02FreeIcons, className: "mb-2 h-8 w-8" }), _jsx("h3", { className: "font-medium", children: "Drag & Drop Book Cover" }), _jsx("p", { className: "mt-1 text-sm", children: "Max file size 5mb" })] })) })] }));
};
export default BookUpload;
