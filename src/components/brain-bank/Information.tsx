import React, { useState } from "react";
import ChapterHeader from "@/components/ui/brain-bank/ChapterHeader";
import {
  ArrowDown01FreeIcons,
  Settings01FreeIcons,
} from "@hugeicons/core-free-icons";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { HugeiconsIcon } from "@hugeicons/react";

interface previewProps {
  type: string;
  content: string;
}

// COMPONENT: preview component
const Preview: React.FC<previewProps> = ({ type, content }) => {
  if (type === "video" && content) {
    return (
      <div className="mt-4">
        <iframe
          src={content}
          title="YouTube video player"
          className="aspect-video w-full rounded-md"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return null;
};

// COMPONENT: insert component
interface InsertComponentProps {
  type: string;
  content: string;
  onTypeChange: (val: string) => void;
  onContentChange: (val: string) => void;
}

const InsertComponent: React.FC<InsertComponentProps> = ({
  type,
  content,
  onTypeChange,
  onContentChange,
}) => {
  return (
    <div className="p-2">
      <div className="relative inline-block w-full">
        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="bg-secondary-surface border-secondary/5 block w-full appearance-none rounded-md border px-4 py-2 pr-10 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          <option value="video">Video</option>
          <option value="article">Article</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <HugeiconsIcon className="h-5 w-5" icon={ArrowDown01FreeIcons} />
        </div>
      </div>

      <input
        className="bg-secondary-surface border-secondary/5 mt-2 w-full rounded-md border px-4 py-2 focus:outline-0"
        type="text"
        placeholder={
          type === "video"
            ? "https://youtube.com/embed/example"
            : "Enter article link"
        }
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      />
    </div>
  );
};

// COMPONENT: information component
const Information: React.FC = () => {
  const [mode, setMode] = useState("insert");
  const [type, setType] = useState("video");
  const [content, setContent] = useState("");

  const { book, loading, error } = useSelector(
    (state: RootState) => state.book,
  );

  const headerOptions = {
    name: "Additional Info",
    options: [
      {
        label: "Edit",
        icon: Settings01FreeIcons,
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

      <div className="bg-secondary-surface flex text-sm">
        <button
          onClick={() => setMode("insert")}
          className={`${mode === "insert" && "active"} border-highlight flex-1 py-3 transition [.active]:border-b-3 [.active]:font-semibold`}
        >
          Insert
        </button>
        <button
          onClick={() => setMode("preview")}
          className={`${mode === "preview" && "active"} border-highlight flex-1 py-3 transition [.active]:border-b-3 [.active]:font-semibold`}
        >
          Preview
        </button>
      </div>

      {mode === "insert" && (
        <InsertComponent
          type={type}
          content={content}
          onTypeChange={setType}
          onContentChange={setContent}
        />
      )}

      {mode === "preview" && <Preview type={type} content={content} />}
    </section>
  );
};

export default Information;
