import { ActionPanelProps } from "@/types";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useRef } from "react";

interface Props {
  actions: ActionPanelProps[];
  className?: string;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
}

const ActionPanel: React.FC<Props> = ({ actions, className, onClose, triggerRef }) => {
  const panelRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // 🛡 Only close if clicked outside BOTH panel and trigger button
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        (!triggerRef.current || !triggerRef.current.contains(target))
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, triggerRef]);

  return (
    <ul
      ref={panelRef}
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
