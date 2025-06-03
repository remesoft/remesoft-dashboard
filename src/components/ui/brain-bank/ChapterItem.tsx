import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Book02FreeIcons, File01FreeIcons, PlusSignFreeIcons, Delete02FreeIcons } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";

// Single Chapter Item
const ChapterItem: React.FC<{ title: string }> = ({ title }) => {
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
            <HugeiconsIcon className={`transition ${isOpen ? "scale-0" : "group-hover:scale-0"}`} icon={Book02FreeIcons} />
            <button
              className={`hover:bg-secondary/7 absolute top-0.5 grid h-6 w-6 place-content-center rounded-md transition ${
                isOpen ? "scale-100" : "scale-0 group-hover:scale-100"
              }`}
            >
              <HugeiconsIcon icon={PlusSignFreeIcons} className="h-4.5 w-4.5" />
            </button>
          </div>
          <span className="text-secondary">{title}</span>
        </div>
        <div className="text-secondary flex items-center gap-1">
          <button
            className={`hover:bg-secondary/7 grid h-6 w-6 place-content-center rounded-md transition ${
              isOpen ? "scale-100" : "scale-0 group-hover:scale-100"
            }`}
          >
            <HugeiconsIcon icon={Delete02FreeIcons} className="h-4.5 w-4.5" />
          </button>
          <button
            className={`hover:bg-secondary/7 grid h-6 w-6 place-content-center rounded-md transition ${
              isOpen ? "scale-100" : "scale-0 group-hover:scale-100"
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
              <li className="hover:bg-secondary/7 text-secondary flex cursor-pointer items-center gap-2 rounded px-6 py-1.5 transition">
                <HugeiconsIcon className="h-5" icon={File01FreeIcons} />
                Subchapter 1
              </li>
              <li className="hover:bg-secondary/7 text-secondary flex cursor-pointer items-center gap-2 rounded px-6 py-2 transition">
                <HugeiconsIcon className="h-5" icon={File01FreeIcons} />
                Subchapter 2
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default ChapterItem;
