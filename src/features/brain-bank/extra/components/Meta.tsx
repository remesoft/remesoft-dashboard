import React from "react";

interface MetaProps {
  mode: "insert" | "preview";
  setMode: (mode: "insert" | "preview") => void;
}

const Meta: React.FC<MetaProps> = ({ mode, setMode }) => {
  return (
    <div className="bg-background/70 flex">
      <button
        onClick={() => setMode("insert")}
        className={`flex-grow border-b-4 py-2.5 font-semibold ${mode === "insert" ? "border-active" : "border-transparent"}`}
      >
        Insert
      </button>
      <button
        onClick={() => setMode("preview")}
        className={`flex-grow border-b-4 py-2.5 font-semibold ${mode === "preview" ? "border-active" : "border-transparent"}`}
      >
        Preview
      </button>
    </div>
  );
};

export default Meta;
