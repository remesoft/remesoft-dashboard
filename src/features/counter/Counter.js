import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "./counterSlice";
const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (_jsxs("div", { children: [_jsxs("h2", { children: ["Count: ", count] }), _jsx("button", { onClick: () => dispatch(increment()), children: "+" }), _jsx("button", { onClick: () => dispatch(decrement()), children: "-" })] }));
};
export default Counter;
