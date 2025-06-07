import { BookInformationProps } from "@/types/brain-bank/props-type";
import {
  Book04FreeIcons,
  Calendar03FreeIcons,
  CalendarUpload01FreeIcons,
  CheckmarkBadge01FreeIcons,
  Exchange01FreeIcons,
  File02FreeIcons,
  RepeatIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const BookInfo: React.FC<BookInformationProps> = (props) => {
  const statusClass = props.published ? "text-highlight" : "text-gray-500";

  return (
    <div className="w-full px-2 py-6 pt-4 font-medium text-gray-500">
      <div className="grid grid-cols-2 gap-1">
        <p className="flex items-center gap-2">
          <HugeiconsIcon icon={Calendar03FreeIcons} className="h-5 w-5" />
          Created At
        </p>
        <p className="text-primary py-1">: {props.createdAt}</p>
        <p className="flex items-center gap-2">
          <HugeiconsIcon icon={CalendarUpload01FreeIcons} className="h-5 w-5" />
          Last Update
        </p>
        <p className="text-primary py-1">: {props.updatedAt}</p>
        <p className="flex items-center gap-2">
          <HugeiconsIcon icon={CheckmarkBadge01FreeIcons} className="h-5 w-5" />
          Status
        </p>
        <p
          className={`${statusClass} flex items-center justify-between py-1 pr-4`}
        >
          <span>: {props.published ? "Published" : "Unpublished"}</span>
          <button>
            <HugeiconsIcon className="h-4 w-4" icon={Exchange01FreeIcons} />
          </button>
        </p>
        <p className="flex items-center gap-2">
          <HugeiconsIcon icon={Book04FreeIcons} className="h-5 w-5" />
          Chapters
        </p>
        <p className="text-primary py-1">: {props.groups}</p>
        <p className="flex items-center gap-2">
          <HugeiconsIcon icon={File02FreeIcons} className="h-5 w-5" />
          Groups
        </p>
        <p className="text-primary py-1">: {props.groups}</p>
      </div>
    </div>
  );
};

export default BookInfo;
