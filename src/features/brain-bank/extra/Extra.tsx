import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import Preview from "./components/Preview";
import { ActionPanelProps } from "@/types";
import { Delete02FreeIcons, FloppyDiskFreeIcons } from "@hugeicons/core-free-icons";
import { useExtraData } from "./hooks/useExtraData";
import { useNavigate, useParams } from "react-router";
import { useDeleteExtra } from "./hooks/useDeleteExtra";
import { useAddExtra } from "./hooks/useAddExtra";
import Tabs from "./components/Tabs";

const Extra: React.FC = () => {
  const navigate = useNavigate();
  const { questionId, bookId, groupId } = useParams();
  const numericQuestionId = Number(questionId);
  const { extra, isLoading, error } = useExtraData(numericQuestionId);

  const { addExtra } = useAddExtra();
  const { deleteExtra } = useDeleteExtra();
  const [mode, setMode] = useState<"insert" | "preview">("insert");
  const [open, setOpen] = useState<boolean>(false);

  const [inputType, setInputType] = useState<"video" | "markdown" | undefined>("video");
  const [inputValue, setInputValue] = useState<string | undefined>("");

  useEffect(() => {
    if (extra?.content) setInputValue(extra.content);
    if (extra?.type) setInputType(extra?.type);
  }, [extra]);

  const actions: ActionPanelProps[] = [
    {
      label: "Save Extra",
      icon: FloppyDiskFreeIcons,
      onClick: async () => {
        addExtra(numericQuestionId, inputType, inputValue);
        setOpen(false);
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
      <Header actions={actions} isOpen={open} setOpen={setOpen} />
      <Tabs tab={mode} setMode={setMode} />
      {mode === "preview" ? (
        <Preview type={inputType} value={inputValue} />
      ) : (
        <FormInput setInputValue={setInputValue} setInputType={setInputType} type={inputType} value={inputValue} />
      )}
    </div>
  );
};
export default Extra;
