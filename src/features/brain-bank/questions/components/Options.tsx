import React, { useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01FreeIcons,
  Delete02FreeIcons,
  Edit04FreeIcons,
  MoreVerticalFreeIcons,
  PencilEdit01FreeIcons,
} from "@hugeicons/core-free-icons";
import Option from "./Option";
import { useBengaliNumber } from "@/hooks";
import ActionPanel from "@/components/ActionPanel";
import { ActionPanelProps } from "@/types";
import { useNavigate, useParams } from "react-router";
import { useDeleteQuestion } from "../hooks";

interface OptionsProps {
  id: number;
  index: number;
  selected: string;
  labels: string[];
  loading?: boolean;
  hasExtra: boolean;
  onSelect: (index: number) => void;
}

const Options: React.FC<OptionsProps> = ({ index, id, selected, onSelect, labels, loading, hasExtra }) => {
  const { bookId, groupId } = useParams();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { deleteQuestion } = useDeleteQuestion();
  const toBengaliNumber = useBengaliNumber();
  const navigate = useNavigate();

  const actions: ActionPanelProps[] = [
    {
      label: hasExtra ? "Update Extra" : "Add Extra",
      icon: hasExtra ? PencilEdit01FreeIcons : Add01FreeIcons,
      onClick: () => {
        navigate(`/brain-bank/books/${bookId}/groups/${groupId}/questions/${id}`);
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
        {/* {loading && <span className="text-muted ml-2 text-xs">Saving...</span>} */}
      </div>

      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`hover:bg-background relative cursor-pointer rounded-full p-1.5 transition ${hasExtra ? "before:absolute before:top-0 before:right-1 before:h-2 before:w-2 before:rounded-full before:bg-red-500 before:content-['']" : ""} `}
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
