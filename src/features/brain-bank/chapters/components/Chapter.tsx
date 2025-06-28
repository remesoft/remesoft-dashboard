import React, { useState } from "react";
import { ChapterProps } from "../types";
import { useGroupData } from "../../groups/hooks/useGroupsHook";

const Chapter: React.FC<ChapterProps> = ({ id, bookId, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { groups, isLoading, error } = useGroupData(isOpen ? id : 0);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Prevent button clicks from toggling the dropdown
  const handleItemClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;
    toggleDropdown();
  };

  return (
    <div>
      <li className="border-border/50 cursor-pointer border-t p-2" onClick={handleItemClick}>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{name}</h4>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("Button clicked — do something else");
            }}
            className="text-sm text-blue-600 underline"
          >
            Action
          </button>
        </div>

        {isOpen && (
          <div className="mt-2 ml-4">
            {isLoading && <p className="text-muted text-sm">Loading groups...</p>}
            {error && <p className="text-sm text-red-500">Failed to load groups</p>}
            {!isLoading && groups && groups.length > 0 && (
              <ul className="text-muted list-inside list-disc text-sm">
                {groups.map((group) => (
                  <li key={group.id}>{group.name}</li>
                ))}
              </ul>
            )}
            {!isLoading && groups && groups.length === 0 && (
              <p className="text-muted text-sm italic">No groups found</p>
            )}
          </div>
        )}
      </li>
    </div>
  );
};

export default Chapter;
