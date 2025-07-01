import React, { useState } from "react";
import { ChapterProps } from "../types";
import { useGroupData } from "../../groups/hooks/useGroupsHook";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01FreeIcons,
  BookOpen02FreeIcons,
  Delete02FreeIcons,
  LicenseFreeIcons,
} from "@hugeicons/core-free-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationToast from "@/components/ConfirmationToast";

const Chapter: React.FC<ChapterProps> = ({ id, bookId, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { groups, isLoading, error } = useGroupData(isOpen ? id : 0);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;
    toggleDropdown();
  };

  const handleDelete = () => {
    toast(
      <ConfirmationToast
        message="Do you really want to delete this item?"
        onConfirm={() => {
          toast.dismiss();
          toast.success("Deleted!");
          // Add your delete logic
        }}
        onCancel={() => toast.dismiss()}
      />,
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        className: "p-0 bg-transparent shadow-none",
      },
    );
  };

  return (
    <li
      className={`${isOpen && "bg-background/70"} text-secondary hover:bg-background/70 [.active]:bg-active/15 [.active]:text-active rounded-sm py-2 transition`}
    >
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5 px-2">
          <div className="group">
            <HugeiconsIcon icon={BookOpen02FreeIcons} className={`${isOpen && "hidden"} h-5 w-5 group-hover:hidden`} />
            <button className={`${isOpen ? "block" : "hidden"} group-hover:block`} onClick={toggleDropdown}>
              <HugeiconsIcon icon={ArrowRight01FreeIcons} className={`${isOpen && "rotate-90"} h-5 w-5 transition`} />
            </button>
          </div>

          <input type="text" value={name} className="font-medium" />
        </div>

        <button
          className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
          onClick={(e) => {
            e.stopPropagation(); // prevent dropdown toggle
            handleDelete();
          }}
        >
          <HugeiconsIcon className="h-4 w-4" icon={Delete02FreeIcons} />
        </button>
      </div>

      {isOpen && (
        <div className="mt-2">
          {isLoading && <p className="text-muted text-sm">Loading groups...</p>}
          {error && <p className="text-sm text-red-500">Failed to load groups</p>}
          {!isLoading && groups && groups.length > 0 && (
            <ul className="text-muted list-inside list-disc px-1 text-sm">
              {groups.map((group) => (
                <li
                  className="hover:bg-component hover:border-border/30 list-none items-center rounded-sm border border-transparent py-2 pl-9 font-medium transition"
                  key={group.id}
                >
                  <HugeiconsIcon icon={LicenseFreeIcons} className="mr-2 inline-block h-4 w-4" />
                  {group.name}
                </li>
              ))}
            </ul>
          )}
          {!isLoading && groups && groups.length === 0 && <p className="text-muted text-sm italic">No groups found</p>}
        </div>
      )}
    </li>
  );
};

export default Chapter;
