import React from "react";

interface TabProps {
  isActive: boolean;
  setMode: (mode: "insert" | "preview") => void;
  label: string;
}

interface TabsProps {
  tab: "insert" | "preview";
  setMode: (mode: "insert" | "preview") => void;
}

const Tab: React.FC<TabProps> = ({ isActive, setMode, label }) => {
  return (
    <button
      onClick={() => setMode(label.toLowerCase() as "insert" | "preview")}
      className={`flex-grow border-b-4 py-2.5 font-semibold ${isActive ? "border-active" : "border-transparent"}`}
    >
      {label}
    </button>
  );
};

const Tabs: React.FC<TabsProps> = ({ tab, setMode }) => {
  return (
    <div className="bg-background/70 flex">
      <Tab isActive={tab === "insert"} label="Insert" setMode={setMode} />
      <Tab isActive={tab === "preview"} label="Preview" setMode={setMode} />
    </div>
  );
};

export default Tabs;
