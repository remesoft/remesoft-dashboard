import React from "react";
import MetaBar from "../ui/MetaBar";
import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import ChapterHeader from "../ui/brain-bank/ChapterHeader";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import GroupQuestion from "../ui/brain-bank/GroupQuestion";

const Group: React.FC = () => {
  const { group, loading, error } = useSelector(
    (state: RootState) => state.group,
  );

  const isOpen = group.questions.length > 0;
  if (!isOpen) return null;

  // header options
  const headerOptions = {
    name: group.name,
    options: [
      {
        label: "Edit",
        icon: Settings01FreeIcons, // Example icon (use a valid Hugeicons icon here)
        onClick: () => console.log("Edit clicked"),
      },
      {
        label: "Delete",
        icon: Settings01FreeIcons,
        onClick: () => console.log("Delete clicked"),
      },
    ],
  };
  return (
    <section className="bg-primary-surface relative w-76 rounded-md">
      <ChapterHeader {...headerOptions} />
      <MetaBar value={10} message="Chapters in this book." />
      <ul className="flex flex-col gap-1 p-2">
        {group.questions.map((question, index) => (
          <GroupQuestion
            id={question.id}
            serial={index}
            answer={question.answer}
            info={question.info}
          />
        ))}
      </ul>
    </section>
  );
};

export default Group;
