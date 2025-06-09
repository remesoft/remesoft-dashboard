import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { File01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useDispatch } from "react-redux";
import { fetchGroup } from "@/features/brain-back/group-slice";
const GroupListItem = (props) => {
    // -------------------------------
    // Params & Redux Setup
    // -------------------------------
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(fetchGroup(props.id));
    };
    return (_jsxs("li", { title: props.name, onClick: handleClick, className: "hover:bg-secondary/7 text-secondary flex cursor-pointer items-center gap-2 rounded px-6 py-1.5 transition", children: [_jsx(HugeiconsIcon, { className: "h-5 shrink-0", icon: File01FreeIcons }), _jsx("span", { className: "truncate overflow-hidden whitespace-nowrap", children: props.name })] }));
};
export default GroupListItem;
