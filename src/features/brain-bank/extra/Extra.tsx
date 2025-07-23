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
import { motion, useAnimation } from "framer-motion";
import { useUpdateExtra } from "./hooks/useUpdateExtra";

const Extra: React.FC = () => {
  const navigate = useNavigate();
  const { questionId, bookId, groupId } = useParams();
  const numericQuestionId = Number(questionId);
  const { extra } = useExtraData(numericQuestionId);
  const { updateExtra } = useUpdateExtra();

  const { addExtra } = useAddExtra();
  const { deleteExtra } = useDeleteExtra();
  const [mode, setMode] = useState<"insert" | "preview">("insert");
  const [open, setOpen] = useState<boolean>(false);
  const [inputType, setInputType] = useState<"video" | "markdown" | undefined>("video");
  const [inputValue, setInputValue] = useState<string>("");

  const controls = useAnimation();

  // Reset or update form data whenever questionId or extra changes
  useEffect(() => {
    if (extra) {
      setInputValue(extra.content ?? "");
      setInputType(extra.type ?? "video");
    } else {
      setInputValue("");
      setInputType("video");
    }
  }, [extra, questionId]);

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 0.95, 1.01, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    });
  }, [questionId]);

  const actions: ActionPanelProps[] = [
    {
      label: extra ? "Update Extra" : "Save Extra",
      icon: FloppyDiskFreeIcons,
      onClick: async () => {
        if (extra) await updateExtra({ questionId: numericQuestionId, type: inputType, content: inputValue });
        else await addExtra(numericQuestionId, inputType, inputValue);
        setOpen(false);
      },
    },
    {
      label: "Remove Extra",
      icon: Delete02FreeIcons,
      onClick: () => deleteExtra(numericQuestionId),
    },
  ];

  return (
    <motion.div animate={controls} className="bg-component border-border/70 w-88 rounded-md border">
      <Header actions={actions} isOpen={open} setOpen={setOpen} />
      <Tabs tab={mode} setMode={setMode} />
      {mode === "preview" ? (
        <Preview type={inputType} value={inputValue} />
      ) : (
        <FormInput setInputValue={setInputValue} setInputType={setInputType} type={inputType} value={inputValue} />
      )}
    </motion.div>
  );
};

export default Extra;
