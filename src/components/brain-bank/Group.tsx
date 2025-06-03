import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import React from "react";
import MetaBar from "../ui/MetaBar";
import ChapterHeader from "../ui/brain-bank/ChapterHeader";
import GroupItem from "../ui/brain-bank/GroupItem";

const Group: React.FC = () => {
  // header options
  const headerOptions = {
    name: "Options & Actions",
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
        <GroupItem />
        <GroupItem />
        <GroupItem />
      </ul>
    </section>
  );
};

export default Group;
