import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MetaBar from "@/components/ui/MetaBar";
import ChapterHeader from "@/components/ui/brain-bank/ChapterHeader";
import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import { useSelector } from "react-redux";
import ChapterListItem from "@/components/ui/brain-bank/ChapterListItem";
const Chapter = () => {
    const { book, loading, error } = useSelector((state) => state.book);
    // header options
    const headerOptions = {
        name: "Chapters & Groups",
        options: [
            {
                label: "Edit",
                icon: Settings01FreeIcons, // Example icon (use a valid Hugeicons icon here)
                onClick: () => console.log("Edit clicked"),
            },
            {
                label: "Delete",
                icon: Settings01FreeIcons,
                onClick: () => console.log("Delete clicked"),
            },
        ],
    };
    return (_jsxs("section", { className: "bg-primary-surface relative w-76 rounded-md", children: [_jsx(ChapterHeader, { ...headerOptions }), _jsx(MetaBar, { value: 10, message: "Chapters in this book." }), _jsx("ul", { className: "flex flex-col gap-1 px-3 py-2", children: book.chapters.map((chapter) => (_jsx(ChapterListItem, { id: chapter.id, groups: chapter.groups, name: chapter.name }))) })] }));
};
export default Chapter;
