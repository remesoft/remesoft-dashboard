import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import React from "react";
import MetaBar from "../ui/MetaBar";
import ChapterHeader from "../ui/brain-bank/ChapterHeader";
import ChapterItem from "../ui/brain-bank/ChapterItem";

const Chapter: React.FC = () => {
  // header options
  const headerOptions = {
    name: "Chapters & Groups",
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
      <ul className="flex flex-col gap-1 px-3 py-2">
        <ChapterItem title="Chapter One" />
        <ChapterItem title="Chapter Two" />
        <ChapterItem title="Chapter Three" />
        <ChapterItem title="Chapter Four" />
        <ChapterItem title="Chapter Five" />
        <ChapterItem title="Chapter Six" />
      </ul>
    </section>
  );
};

export default Chapter;
