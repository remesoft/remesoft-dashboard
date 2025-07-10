import ActionPanel from "@/components/ActionPanel";
import { Add01FreeIcons, Delete02FreeIcons, MoreVerticalFreeIcons, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useRef, useState } from "react";
import { ActionPanelProps } from "@/types";
import { useAddChapter } from "../hooks";
import { useParams } from "react-router";
import { useGetChapters } from "../hooks";

const Header: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { addChapter, isLoading } = useAddChapter();
  const { bookId } = useParams();
  const { refetch } = useGetChapters(Number(bookId));

  // handlers
  const handleCreate = async () => {
    await addChapter(Number(bookId));
    refetch();
  };

  return (
    <section ref={dropdownRef} className="py relative flex items-center justify-between px-4 py-3 font-semibold">
      <h2>Chapters</h2>
      <button onClick={handleCreate} className="hover:bg-background cursor-pointer rounded-full p-1.5 transition">
        <HugeiconsIcon className="h-4 w-4" icon={PlusSignIcon} />
      </button>
    </section>
  );
};

export default Header;
