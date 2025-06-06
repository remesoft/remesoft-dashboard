import {
  Book02FreeIcons,
  PlusSignFreeIcons,
  Delete02FreeIcons,
  ArrowRight01FreeIcons,
} from "@hugeicons/core-free-icons";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterListItemProps } from "@/types/brain-bank/props-type";
import GroupListItem from "./GroupListItem";

// Single Chapter Item
const ChapterListItem: React.FC<ChapterListItemProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <li
      className={`group flex cursor-pointer flex-col gap-2 rounded-md px-2 py-2 transition ${
        isOpen ? "bg-secondary-surface" : "hover:bg-secondary-surface"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="relative" onClick={toggleDropdown}>
            <HugeiconsIcon
              className={`transition ${isOpen ? "scale-0" : "group-hover:scale-0"}`}
              icon={Book02FreeIcons}
            />
            <button
              className={`hover:bg-secondary/7 absolute top-0.5 grid h-6 w-6 place-content-center rounded-md transition ${
                isOpen ? "scale-100" : "scale-0 group-hover:scale-100"
              }`}
            >
              <HugeiconsIcon
                icon={ArrowRight01FreeIcons}
                className={`${isOpen && "rotate-90"} h-4.5 w-4.5 transition`}
              />
            </button>
          </div>
          <span className="text-secondary">{props.name}</span>
        </div>
        <div className="text-secondary flex items-center gap-1">
          <button
            className={`hover:bg-secondary/7 hidden h-6 w-6 place-content-center rounded-md transition ${
              isOpen ? "scale-100" : "group-hover:grid"
            }`}
          >
            <HugeiconsIcon icon={Delete02FreeIcons} className="h-4.5 w-4.5" />
          </button>
          <button
            className={`hover:bg-secondary/7 hidden h-6 w-6 place-content-center rounded-md transition ${
              isOpen ? "scale-100" : "group-hover:grid"
            }`}
          >
            <HugeiconsIcon icon={PlusSignFreeIcons} className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-1 rounded-md shadow">
              {props.groups.map((item) => (
                <GroupListItem id={item.id} name={item.name} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default ChapterListItem;
