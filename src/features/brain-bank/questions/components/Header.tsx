import React, { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ActionPanelProps } from "@/types";
import ActionPanel from "@/components/ActionPanel";
import { useCreateQuestion } from "../hooks/useCreateQuestion";
import { useNavigate, useParams } from "react-router";
import { useQuestionData } from "../hooks/useQuestionsHook";
import { useGroupData } from "../../groups/hooks/useGroupData";
import { useUpdateGroup } from "../../groups/hooks/useUpdateGroup";
import { toast } from "react-toastify"; // or your preferred toast lib

import {
  Add01FreeIcons,
  CloudDownloadFreeIcons,
  Delete02FreeIcons,
  MoreVerticalFreeIcons,
} from "@hugeicons/core-free-icons";
import { useDeleteGroup } from "../../groups/hooks/useDeleteGroup";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { groupId, bookId } = useParams();

  const numericGroupId = Number(groupId);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { createQuestion, isLoading: isCreating } = useCreateQuestion();
  const { questions, refetch } = useQuestionData(numericGroupId);
  const { group } = useGroupData(numericGroupId);
  const { updateGroup, isLoading: isUpdating } = useUpdateGroup();
  const { deleteGroup, isLoading: isDeleting } = useDeleteGroup();

  const [groupName, setGroupName] = useState(group?.name || "");

  // Sync group name from fetched group data
  useEffect(() => {
    if (group?.name) setGroupName(group.name);
  }, [group?.name]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle group name change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  // Update group name on blur
  const handleNameBlur = async () => {
    if (group && group.name !== groupName.trim()) {
      try {
        await updateGroup({
          id: numericGroupId,
          data: { name: groupName.trim() },
        });
        toast.success("Group name updated!");
      } catch (err) {
        toast.error("Failed to update group name.");
      }
    }
  };

  const actions: ActionPanelProps[] = [
    {
      label: "Add Question",
      icon: Add01FreeIcons,
      onClick: async () => {
        try {
          await createQuestion();
          refetch();
        } catch (err) {
          toast.error("Failed to create question.");
        }
      },
    },
    {
      label: "Download QR code",
      icon: CloudDownloadFreeIcons,
      onClick: () => {
        console.log("Download QR code clicked");
      },
    },
    {
      label: "Delete Group",
      icon: Delete02FreeIcons,
      onClick: async () => {
        const confirmed = window.confirm("Are you sure you want to delete this group?");
        if (!confirmed) return;

        try {
          await deleteGroup(numericGroupId);
          toast.success("Group deleted successfully!");
          navigate(`/brain-bank/books/${bookId}`);
        } catch (err) {
          toast.error("Failed to delete group.");
        }
      },
    },
  ];

  return (
    <section ref={dropdownRef} className="relative flex items-center px-4 py-3 font-semibold">
      <input
        type="text"
        value={groupName}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        className="flex-grow border-none bg-transparent text-base outline-none"
        disabled={isCreating || isUpdating}
      />
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
      >
        <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
      </button>

      {open && <ActionPanel actions={actions} />}
    </section>
  );
};

export default Header;
