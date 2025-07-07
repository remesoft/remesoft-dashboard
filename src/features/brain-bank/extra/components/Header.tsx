import ActionPanel from "@/components/ActionPanel";
import { ActionPanelProps } from "@/types";
import { MoreVerticalFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useRef, useState } from "react";

interface HeaderProps {
  actions: ActionPanelProps[];
}

const Header: React.FC<HeaderProps> = ({ actions }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section ref={dropdownRef} className="py relative flex items-center justify-between px-4 py-3 font-semibold">
      <h2>Extra Information</h2>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
      >
        <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
      </button>
      {open && <ActionPanel className="" actions={actions} />}
    </section>
  );
};

export default Header;
