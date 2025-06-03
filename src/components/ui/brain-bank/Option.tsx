import { OptionProps } from "@/types";
import React from "react";

const Option: React.FC<OptionProps> = ({ isSelected, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={` ${isSelected ? "active" : ""} ${disabled ? "pointer-events-none opacity-50" : ""} bg-tertiary-surface [.active]:bg-highlight [.active]:text-primary-surface grid h-9 w-9 place-content-center rounded-full leading-0 font-semibold`}
    >
      ক
    </button>
  );
};

export default Option;
