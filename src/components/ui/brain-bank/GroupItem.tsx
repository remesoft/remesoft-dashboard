import {
  FileIcon,
  MoreHorizontalFreeIcons,
  Pen01FreeIcons,
  PenIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptionGroup from "./OptionGroup";

const GroupItem: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("volvo"); // default option

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`font-hind-siliguri hover:bg-secondary-surface rounded-md px-2 py-2 transition ${isOpen && "bg-secondary-surface"}`}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2 px-2">
        <p className="font-hind-siliguri">১</p>
        <OptionGroup />

        <button
          className="hover:bg-secondary/7 grid h-6 w-6 place-content-center rounded-md transition"
          onClick={toggleDropdown}
        >
          <HugeiconsIcon icon={MoreHorizontalFreeIcons} className="h-5 w-5" />
        </button>
      </div>

      {/* Expandable Bottom Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <select
              className="bg-primary-surface border-secondary/10 mt-2.5 w-full rounded-md border px-2 py-1.5 focus:outline-0"
              name="infoType"
              id="infoType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option
                className="bg-secondary-surface text-secondary m-1"
                value="volvo"
              >
                Select information type
              </option>
              <option className="bg-secondary-surface m-1" value="video">
                Video
              </option>
              <option className="bg-secondary-surface m-1" value="blog">
                Blog
              </option>
            </select>

            <div className="bg-primary-surface border-secondary/10 mt-1 flex items-start gap-2 rounded-md border px-3 py-1.5">
              {selectedType === "blog" ? (
                <textarea
                  className="flex-grow resize-none bg-transparent focus:outline-0"
                  placeholder="Write your blog content here..."
                  rows={3}
                />
              ) : (
                <React.Fragment>
                  <input
                    className="flex-grow bg-transparent focus:outline-0"
                    type="text"
                    placeholder="https://youtube.com/en/example"
                  />
                  <HugeiconsIcon
                    icon={PenIcon}
                    className="text-component-background-text mt-1 h-5 w-5"
                  />
                </React.Fragment>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GroupItem;
