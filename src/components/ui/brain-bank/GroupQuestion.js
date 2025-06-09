import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useSelector } from "react-redux";
import { bnDigit } from "@/utils";
import MenuIconButton from "../MenuIconButton";
import { MoreHorizontalFreeIcons } from "@hugeicons/core-free-icons";
import CircularOption from "./CircularOption";
// COMPONENT: question options
const QuestionInterface = (props) => {
    const { id, serial, options, selectedIndex, onSelect } = props;
    return (_jsxs("div", { className: "flex items-center px-2 py-1", children: [_jsx("p", { className: "font-hind-siliguri", children: bnDigit(serial) }), _jsx("div", { className: "flex flex-1 justify-center gap-2", children: options.map((option, index) => (_jsx(CircularOption, { label: option, selected: selectedIndex === index, handleClick: () => onSelect(index) }, index))) }), _jsx(MenuIconButton, { icon: MoreHorizontalFreeIcons })] }));
};
// COMPONENT : group row
const GroupQuestion = (props) => {
    // destructure props
    const { id, serial, answer, info } = props;
    const { group } = useSelector((state) => state.group);
    // handle selection
    const [selectedIndex, setSelectedIndex] = React.useState(answer ?? null);
    return (_jsx("div", { children: _jsx(QuestionInterface, { id: id, serial: serial, info: info, options: group.options, answer: answer, selectedIndex: selectedIndex, onSelect: setSelectedIndex }) }));
};
export default GroupQuestion;
