import React from "react";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

// props type
interface IconButtonProps {
  className?: string;
  icon: IconSvgElement;
}

// render component
const IconButton: React.FC<IconButtonProps> = (props) => {
  const { className, icon } = props;
  return (
    <button className={`${className} hover:bg-header-search rounded-full p-2`}>
      <HugeiconsIcon icon={icon} className="text-header-item hover:text-header-item-hover h-6 w-6" />
    </button>
  );
};

// export component
export default IconButton;
