import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import React from "react";

interface MenuIconButtonProps {
  icon: IconSvgElement;
  handleClick?: () => void;
}

const MenuIconButton: React.FC<MenuIconButtonProps> = (props) => {
  const { icon, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className="hover:bg-secondary/7 grid h-6 w-6 place-content-center rounded-md transition"
    >
      <HugeiconsIcon icon={icon} className="h-5 w-5" />
    </button>
  );
};

export default MenuIconButton;
