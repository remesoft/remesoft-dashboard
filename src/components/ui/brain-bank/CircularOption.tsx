import { CircularOptionProps } from "@/types/brain-bank/props-type";
import React from "react";

const CircularOption: React.FC<CircularOptionProps> = (props) => {
  const { label, selected, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className={`${selected && "active"} [.active]:bg-highlight [.active]:text-primary-surface font-hind-siliguri bg-tertiary-surface hover:bg-tertiary-surface/60 grid h-9 w-9 place-content-center rounded-full leading-0 font-semibold transition`}
    >
      {label}
    </button>
  );
};

export default CircularOption;
