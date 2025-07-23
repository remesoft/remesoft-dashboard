import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { QRCodeSVG } from "qrcode.react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01FreeIcons,
  CloudDownloadFreeIcons,
  Delete02FreeIcons,
  MoreVerticalFreeIcons,
} from "@hugeicons/core-free-icons";

import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

// Custom Hooks
import { useCreateQuestion } from "../hooks/useCreateQuestion";
import { useGetGroupQuery } from "../../groups/services/groupApi";

// Components & Types
import ActionPanel from "@/components/ActionPanel";
import { ActionPanelProps } from "@/types";

// Utils
import { Canvg } from "canvg";
import { useDeleteGroup, useUpdateGroup } from "../../groups/hooks";

// ------------------ Utility Functions ------------------ //
const downloadQRCode = async (text: string) => {
  const svg = ReactDOMServer.renderToStaticMarkup(<QRCodeSVG value={text} size={256} />);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;

  const ctx = canvas.getContext("2d");
  if (!ctx) return console.error("Failed to get canvas context");

  const v = await Canvg.from(ctx, svg);
  await v.render();

  const pngUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = pngUrl;
  link.download = "qr-code.png";
  link.click();
};

// ------------------ Component ------------------ //
const Header: React.FC = () => {
  const { groupId } = useParams();
  const numericGroupId = Number(groupId);

  // Hooks
  const { data: group } = useGetGroupQuery(numericGroupId);
  const { createQuestion, isLoading: isCreating } = useCreateQuestion();
  const { updateGroup, isLoading: isUpdating } = useUpdateGroup();
  const { deleteGroup, isLoading: isDeleting } = useDeleteGroup();

  // Local state
  const [groupName, setGroupName] = useState(group?.name || "");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Effects
  useEffect(() => {
    if (group?.name) setGroupName(group.name);
  }, [group?.name]);

  // Event Handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleAddQuestion = async () => {
    try {
      await createQuestion(numericGroupId);
    } catch {
      toast.error("Failed to create question.");
    }
  };

  // Actions for dropdown
  const actions: ActionPanelProps[] = [
    { label: "Add Question", icon: Add01FreeIcons, onClick: handleAddQuestion },
    {
      label: "Download QR code",
      icon: CloudDownloadFreeIcons,
      onClick: () => groupId && downloadQRCode(groupId),
    },
    { label: "Delete Group", icon: Delete02FreeIcons, onClick: () => deleteGroup(numericGroupId) },
  ];

  // ------------------ JSX ------------------ //
  return (
    <section className="relative flex items-center px-4 py-3 font-semibold">
      <input
        type="text"
        value={groupName}
        onChange={handleNameChange}
        onBlur={() => updateGroup(numericGroupId, groupName.trim())}
        className="flex-grow border-none bg-transparent text-base outline-none"
        disabled={isCreating || isUpdating}
      />

      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-background cursor-pointer rounded-full p-1.5 transition"
      >
        <HugeiconsIcon className="h-4 w-4" icon={MoreVerticalFreeIcons} />
      </button>

      {open && <ActionPanel triggerRef={buttonRef} onClose={() => setOpen(false)} actions={actions} />}
    </section>
  );
};

export default Header;
