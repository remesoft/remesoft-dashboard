import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { IconButtonProps } from "../../types/index.js";

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button className={`${props.className} hover:bg-header-search rounded-full p-2`}>
      <HugeiconsIcon icon={props.icon} className="text-header-item hover:text-header-item-hover h-6 w-6" />
    </button>
  );
};

export default IconButton;
