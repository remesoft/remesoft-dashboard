import React, { useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01FreeIcons, Delete02FreeIcons, MoreVerticalFreeIcons } from "@hugeicons/core-free-icons";
import Option from "./Option";
import { useBengaliNumber } from "@/hooks";
import ActionPanel from "@/components/ActionPanel";
import { ActionPanelProps } from "@/types";
import { useNavigate } from "react-router";
import { useDeleteQuestion } from "../hooks";

interface OptionsProps {
  id: number;
  index: number;
  selected: string;
  labels: string[];
  loading?: boolean;
  onSelect: (index: number) => void;
}

const Options: React.FC<OptionsProps> = ({ index, id, selected, onSelect, labels, loading }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { deleteQuestion } = useDeleteQuestion();
  const toBengaliNumber = useBengaliNumber();
  const navigate = useNavigate();

  const actions: ActionPanelProps[] = [
    {
      label: "Add Extra",
      icon: Add01FreeIcons,
      onClick: () => {
        navigate("questions/" + id);
        setOpen(false);
      },
    },
    {
      label: "Delete Question",
      icon: Delete02FreeIcons,
      onClick: () => {
        deleteQuestion(id);
        setOpen(false);
      },
    },
  ];

  return (
    <div className="relative flex items-center justify-between gap-2 py-3 pr-3 pl-5">
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
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
      >
        <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
      </button>

      {open && (
        <ActionPanel triggerRef={buttonRef} className="top-0" actions={actions} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

export default Options;
