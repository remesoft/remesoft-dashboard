import { ActionPanelProps } from "@/types";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface Props {
  actions: ActionPanelProps[];
  className?: string;
}

const ActionPanel: React.FC<Props> = ({ actions, className }) => {
  return (
    <ul
      className={`${className} bg-component border-border/50 absolute top-full right-0 z-10 w-58 rounded-md border py-1 shadow-lg`}
    >
      {actions.map((action, index) => (
        <li
          key={index}
          onClick={action.onClick}
          className="hover:bg-muted hover:bg-background mx-1 flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1 font-medium transition"
        >
          <HugeiconsIcon icon={action.icon} className="h-5 w-5" />
          <span>{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default ActionPanel;
