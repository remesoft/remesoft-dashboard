import { ChapterHeaderProps } from "@/types/brain-bank/props-type";
import { Settings01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState } from "react";

const ChapterHeader: React.FC<ChapterHeaderProps> = ({ options, name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev: boolean) => !prev);
  };

  return (
    <div className="flex items-center justify-between px-3 py-3">
      <h3 className="text-md font-semibold">{name}</h3>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="hover:bg-secondary-surface rounded-full p-1.5 transition"
        >
          <HugeiconsIcon
            icon={Settings01FreeIcons}
            className="text-details h-4.5 w-4.5"
          />
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="bg-primary-surface absolute right-0 z-10 mt-2 w-40 rounded-md shadow-md">
            <ul className="text-primary p-1 text-sm">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    option.onClick?.();
                    setIsDropdownOpen(false); // Optional: close dropdown after click
                  }}
                  className="hover:bg-secondary-surface flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5"
                >
                  <HugeiconsIcon icon={option.icon} className="h-4 w-4" />
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterHeader;
