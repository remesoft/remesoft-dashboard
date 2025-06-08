import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MetaBar from "../ui/MetaBar";
import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import ChapterHeader from "../ui/brain-bank/ChapterHeader";
import { useSelector } from "react-redux";
import GroupQuestion from "../ui/brain-bank/GroupQuestion";
const Group = () => {
    const { group, loading, error } = useSelector((state) => state.group);
    const isOpen = group.questions.length > 0;
    if (!isOpen)
        return null;
    // header options
    const headerOptions = {
        name: group.name,
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
    return (_jsxs("section", { className: "bg-primary-surface relative w-76 rounded-md", children: [_jsx(ChapterHeader, { ...headerOptions }), _jsx(MetaBar, { value: 10, message: "Chapters in this book." }), _jsx("ul", { className: "flex flex-col gap-1 p-2", children: group.questions.map((question, index) => (_jsx(GroupQuestion, { id: question.id, serial: index, answer: question.answer, info: question.info }))) })] }));
};
export default Group;
