import React, { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02FreeIcons, MoreVerticalFreeIcons } from "@hugeicons/core-free-icons";
import Option from "./Option";
import { useBengaliNumber } from "@/hooks";
import ActionPanel from "@/components/ActionPanel";
import { ActionPanelProps } from "@/types";

interface OptionsProps {
  index: number;
  selected: string;
  onSelect: (index: number) => void;
  labels: string[];
  loading?: boolean; // ✅ optional loading flag
}

const actions: ActionPanelProps[] = [
  {
    label: "Add Question",
    icon: Delete02FreeIcons,
    onClick: () => {
      console.log("Add Question clicked");
    },
  },
  {
    label: "Download QR code",
    icon: Delete02FreeIcons,
    onClick: () => {
      console.log("Download QR Code clicked");
    },
  },
  {
    label: "Delete Group",
    icon: Delete02FreeIcons,
    onClick: () => {
      console.log("Delete Group clicked");
    },
  },
];

const Options: React.FC<OptionsProps> = ({ index, selected, onSelect, labels, loading }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toBengaliNumber = useBengaliNumber();

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
    <div ref={dropdownRef} className="relative flex items-center justify-between gap-2 py-3 pr-3 pl-5">
      <p>{toBengaliNumber(index + 1)}</p>

      <div className="absolute left-1/2 flex -translate-x-1/2 gap-2">
        {labels.map((label, i) => (
          <Option
            key={label}
            label={label}
            active={selected === i.toString()}
            onClick={() => !loading && onSelect(i)}
          />
        ))}
        {loading && <span className="text-muted ml-2 text-xs">Saving...</span>}
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
      >
        <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
      </button>

      {open && (
        <div className="absolute top-full right-0 z-10 mt-2">
          <ActionPanel actions={actions} />
        </div>
      )}
    </div>
  );
};

export default Options;
