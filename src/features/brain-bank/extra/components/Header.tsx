import ActionPanel from "@/components/ActionPanel";
import { ActionPanelProps } from "@/types";
import { MoreVerticalFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useRef, useState } from "react";

interface HeaderProps {
  actions: ActionPanelProps[];
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ actions, isOpen, setOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <section ref={dropdownRef} className="py relative flex items-center justify-between px-4 py-3 font-semibold">
      <h2>Extra Information</h2>
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
      >
        <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
      </button>
      {isOpen && <ActionPanel triggerRef={buttonRef} onClose={() => setOpen(false)} className="" actions={actions} />}
    </section>
  );
};

export default Header;
