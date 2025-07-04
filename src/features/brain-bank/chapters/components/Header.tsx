import ActionPanel from "@/components/ActionPanel";
import { Add01FreeIcons, Delete02FreeIcons, MoreVerticalFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useRef, useState } from "react";
import { ActionPanelProps } from "@/types";
import { useAddChapter } from "../hooks/useAddChapter";
import { useParams } from "react-router";
import { useChapterData } from "../hooks/useChaptersHook";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { addChapter, isLoading } = useAddChapter();
  const { bookId } = useParams();
  const { refetch } = useChapterData(Number(bookId));

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

  const actions: ActionPanelProps[] = [
    {
      label: "Add Chapter",
      icon: Add01FreeIcons,
      onClick: async () => {
        await addChapter(Number(bookId));
        refetch();
      },
    },
    {
      label: "Delete Group",
      icon: Delete02FreeIcons,
      onClick: async () => {},
    },
  ];

  return (
    <section ref={dropdownRef} className="py relative flex items-center justify-between px-4 py-3 font-semibold">
      <h2>Chapters</h2>
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
