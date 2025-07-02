import React, { useEffect, useRef, useState } from "react";
import {
  Add01FreeIcons,
  CloudDownloadFreeIcons,
  Delete02FreeIcons,
  Download01FreeIcons,
  MoreVerticalFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ActionPanelProps } from "@/types";
import ActionPanel from "@/components/ActionPanel";

const actions: ActionPanelProps[] = [
  {
    label: "Add Questation",
    icon: Add01FreeIcons,
    onClick: () => {
      console.log("Hello World");
    },
  },
  {
    label: "Dwonload QR code",
    icon: CloudDownloadFreeIcons,
    onClick: () => {
      console.log("Hello World");
    },
  },
  {
    label: "Delete Group",
    icon: Delete02FreeIcons,
    onClick: () => {
      console.log("Hello World");
    },
  },
];

const Header: React.FC = () => {
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
    <section ref={dropdownRef} className="relative flex items-center px-4 py-3 font-semibold">
      <input type="text" value="Group Name" className="flex-grow bg-transparent" readOnly />
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
