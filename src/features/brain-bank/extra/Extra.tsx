import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Meta from "./components/Meta";
import FormInput from "./components/FormInput";
import Preview from "./components/Preview";
import { ActionPanelProps } from "@/types";
import { Delete02FreeIcons, FloppyDiskFreeIcons } from "@hugeicons/core-free-icons";
import { useExtraData } from "./hooks/useExtraData";
import { useNavigate, useParams } from "react-router";
import { useAddExtra } from "./hooks/useAddExtra";
import { useDeleteExtra } from "./hooks/useDeleteExtra";

const Extra: React.FC = () => {
  const { questionId, bookId, groupId } = useParams();
  const numericQuestionId = Number(questionId);

  const { extra, isLoading, error } = useExtraData(numericQuestionId);
  const { addExtra, isLoading: isAdding } = useAddExtra();
  const { deleteExtra } = useDeleteExtra();
  const navigate = useNavigate();

  const [type, setType] = useState<"video" | "markdown">("video");
  const [mode, setMode] = useState<"insert" | "preview">("insert");
  const [videoUrl, setVideoUrl] = useState("");
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    if (extra?.type) {
      setType(extra.type);
      if (extra.type === "video") {
        setVideoUrl(extra.content);
      } else if (extra.type === "markdown") {
        setMarkdownText(extra.content);
      }
    }
  }, [extra]);

  const actions: ActionPanelProps[] = [
    {
      label: "Save Extra",
      icon: FloppyDiskFreeIcons,
      onClick: async () => {
        const content = type === "video" ? videoUrl : markdownText;
        try {
          await addExtra(numericQuestionId, type, content);
          alert("✅ Extra saved successfully!");
        } catch (err) {
          alert("❌ Failed to save extra.");
          console.error(err);
        }
      },
    },
    {
      label: "Remove Extra",
      icon: Delete02FreeIcons,
      onClick: async () => {
        const confirmed = window.confirm("Are you sure you want to delete this extra?");
        if (confirmed) {
          await deleteExtra(Number(questionId), () => {
            navigate(`/brain-bank/books/${bookId}/groups/${groupId}`);
          });
        }
      },
    },
  ];

  return (
    <div className="bg-component border-border/70 w-88 rounded-md border">
      <Header actions={actions} />
      <Meta mode={mode} setMode={setMode} />

      {mode === "insert" ? (
        <FormInput
          type={type}
          setType={setType}
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          markdownText={markdownText}
          setMarkdownText={setMarkdownText}
        />
      ) : (
        <Preview type={type} videoUrl={videoUrl} markdownText={markdownText} />
      )}
    </div>
  );
};

export default Extra;
