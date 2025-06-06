import { TextInputProps } from "@/types/brain-bank/props-type";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div className="bg-primary-surface flex rounded-md px-3 py-2.5">
      <input
        type="text"
        className="text-text flex-1 bg-transparent font-semibold focus:outline-none"
        placeholder={props.placeholder || ""}
        value={props.value || ""}
        onChange={props.onChange}
      />
      {props.icon && (
        <HugeiconsIcon
          icon={props.icon}
          className="text-component-background-text"
        />
      )}
    </div>
  );
};

export default TextInput;
