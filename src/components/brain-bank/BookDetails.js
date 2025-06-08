import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pen01FreeIcons } from "@hugeicons/core-free-icons";
import BookUpload from "@/components/ui/brain-bank/BookUpload";
import TextInput from "@/components/ui/TextInput";
import BookInfo from "@/components/ui/brain-bank/BookInfo";
import { useSelector } from "react-redux";
const BookDetails = () => {
    const { book, loading, error } = useSelector((state) => state.book);
    return (_jsxs("section", { className: "bg-primary-surface text-secondary w-76 rounded-md p-1", children: [_jsxs("div", { className: "bg-secondary-surface rounded-md p-2", children: [_jsx(BookUpload, {}), _jsx(TextInput, { icon: Pen01FreeIcons, placeholder: "Enter your book name...", value: book.name })] }), _jsx(BookInfo, { createdAt: book.createdAt, updatedAt: book.updatedAt, published: book.isPublished, chapters: book.totalChapters, groups: book.totalGroups })] }));
};
export default BookDetails;
