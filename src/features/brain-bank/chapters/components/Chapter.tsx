import {
  Add01FreeIcons,
  ArrowRight01FreeIcons,
  BookOpen02FreeIcons,
  Delete02FreeIcons,
  MoreVerticalFreeIcons,
} from "@hugeicons/core-free-icons";
import React, { useEffect, useRef, useState } from "react";
import { ChapterProps } from "../types";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "react-toastify";
import Group from "../../groups/Group";
import { ActionPanelProps } from "@/types";
import ActionPanel from "@/components/ActionPanel";
import { useAddGroup } from "../../groups/hooks/useAddGroup";
import { useDeleteChapter } from "../hooks";
import { useUpdateChapter } from "../hooks";
import { useGetGroupsQuery } from "../services/chaptersApi";

const Chapter: React.FC<ChapterProps> = ({ id, bookId, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: groups, isLoading: isGroupsLoading, error: groupsError, refetch } = useGetGroupsQuery(isOpen ? id : 0);
  const { addGroup, isLoading: isAddLoading, error: addError } = useAddGroup();
  const { deleteChapter, isLoading: isChapterDeleteLoading } = useDeleteChapter();
  const [openActionPanel, setOpenActionPanel] = useState<boolean>(false);
  const { updateChapter, isLoading: isUpdateLoading } = useUpdateChapter();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [chapterName, setChapterName] = useState(name);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChapterName(e.target.value);
  };

  const handleNameBlur = async () => {
    if (chapterName !== name) {
      try {
        await updateChapter({
          id,
          data: { name: chapterName },
          bookId,
        }).unwrap();

        toast.success("Chapter name updated!");
      } catch (error) {
        console.error("Update failed:", error);
        toast.error("Failed to update chapter name.");
        setChapterName(name);
      }
    }
  };

  const actions: ActionPanelProps[] = [
    {
      label: "Add Group",
      icon: Add01FreeIcons,
      onClick: async () => {
        try {
          await addGroup(id);
          refetch();
        } catch (err) {
          alert("Failed to add group");
        }
      },
    },
    {
      label: "Delete Chapter",
      icon: Delete02FreeIcons,
      onClick: async () => {
        await deleteChapter(id, bookId);
        setOpenActionPanel(false);
      },
    },
  ];

  const handleActionPanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenActionPanel(!openActionPanel);
  };

  useEffect(() => {
    console.log(groups);
  }, [groups]);
  return (
    <li
      className={`${isOpen && "bg-background/70 mb-1"} text-secondary border-border hover:bg-background/70 [.active]:bg-active/15 [.active]:text-active rounded-sm py-2 transition`}
    >
      <div className="relative flex cursor-pointer items-center justify-between px-1">
        <div className="flex flex-grow items-center gap-2.5 px-2">
          <div className="group">
            <HugeiconsIcon
              icon={BookOpen02FreeIcons}
              className={`${isOpen && "hidden"} h-5 w-5 cursor-pointer group-hover:hidden`}
            />
            <button className={`${isOpen ? "block" : "hidden"} group-hover:block`} onClick={toggleDropdown}>
              <HugeiconsIcon icon={ArrowRight01FreeIcons} className={`${isOpen && "rotate-90"} h-5 w-5 transition`} />
            </button>
          </div>

          <input
            type="text"
            value={chapterName}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            className="fl flex-grow font-medium focus:outline-0"
            disabled={isUpdateLoading}
          />
        </div>

        <button
          ref={buttonRef}
          className="hover:bg-component/100 cursor-pointer rounded-full p-1.5 transition"
          onClick={handleActionPanel}
        >
          <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
        </button>

        {openActionPanel && (
          <ActionPanel triggerRef={buttonRef} actions={actions} onClose={() => setOpenActionPanel(false)} />
        )}
      </div>

      {isOpen && (
        <div className="mt-2">
          {isGroupsLoading && <p className="text-muted text-sm">Loading groups...</p>}
          {groupsError && <p className="text-sm text-red-500">Failed to load groups</p>}
          {!isGroupsLoading && groups && groups.length > 0 && (
            <ul className="text-muted list-inside list-disc px-1 text-sm">
              {groups.map((group) => (
                <Group key={group.id} id={group.id} label={group.name} />
              ))}
            </ul>
          )}
          {!isGroupsLoading && groups && groups.length === 0 && (
            <p className="text-muted pl-10 text-sm italic">No groups found</p>
          )}
        </div>
      )}
    </li>
  );
};

export default Chapter;
