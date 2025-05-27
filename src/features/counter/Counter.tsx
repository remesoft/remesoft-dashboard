import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "./counterSlice";

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
