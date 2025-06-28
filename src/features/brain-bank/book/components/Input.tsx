import { Edit04FreeIcons, TickDouble01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface InputProps {
  name: string;
  submitHandler: () => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, changeHandler, submitHandler }) => {
  return (
    <div className="bg-background/50 px-1 pt-0 pb-1">
      <div className="bg-component border-border/40 flex items-center rounded-md border px-3 py-2 outline outline-transparent transition">
        <input
          type="text"
          value={name}
          onChange={changeHandler}
          placeholder="Enter book name..."
          className="placeholder:text-secondary h-6 flex-grow font-semibold focus:outline-0"
        />
        {name === "" ? (
          <div className="text-secondary p-1">
            <HugeiconsIcon className="h-5 w-5" icon={Edit04FreeIcons} />
          </div>
        ) : (
          <button onClick={submitHandler} className="hover:bg-background text-secondary rounded-full p-1">
            <HugeiconsIcon className="h-5 w-5" icon={TickDouble01FreeIcons} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
