import React from "react";
import MetaBar from "@/components/ui/MetaBar";
import ChapterHeader from "@/components/ui/brain-bank/ChapterHeader";
import ChapterItem from "@/components/ui/brain-bank/ChapterListItem";
import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import ChapterListItem from "@/components/ui/brain-bank/ChapterListItem";

const Chapter: React.FC = () => {
  const { book, loading, error } = useSelector(
    (state: RootState) => state.book,
  );

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
        {book.chapters.map((chapter) => (
          <ChapterListItem
            id={chapter.id}
            groups={chapter.groups}
            name={chapter.name}
          />
        ))}
      </ul>
    </section>
  );
};

export default Chapter;
