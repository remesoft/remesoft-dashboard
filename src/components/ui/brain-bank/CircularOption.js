import { jsx as _jsx } from "react/jsx-runtime";
const CircularOption = (props) => {
    const { label, selected, handleClick } = props;
    return (_jsx("button", { onClick: handleClick, className: `${selected && "active"} [.active]:bg-highlight [.active]:text-primary-surface font-hind-siliguri bg-tertiary-surface hover:bg-tertiary-surface/60 grid h-9 w-9 place-content-center rounded-full leading-0 font-semibold transition`, children: label }));
};
export default CircularOption;
