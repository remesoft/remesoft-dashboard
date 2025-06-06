import { AppDispatch } from "@/app/store";
import { GroupListItemProps } from "@/types/brain-bank/props-type";
import { File01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useDispatch } from "react-redux";
import React from "react";
import { fetchGroup } from "@/features/brain-back/group-slice";

const GroupListItem: React.FC<GroupListItemProps> = (props) => {
  // -------------------------------
  // Params & Redux Setup
  // -------------------------------
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(fetchGroup(props.id));
  };

  return (
    <li
      title={props.name}
      onClick={handleClick}
      className="hover:bg-secondary/7 text-secondary flex cursor-pointer items-center gap-2 rounded px-6 py-1.5 transition"
    >
      <HugeiconsIcon className="h-5 shrink-0" icon={File01FreeIcons} />
      <span className="truncate overflow-hidden whitespace-nowrap">
        {props.name}
      </span>
    </li>
  );
};

export default GroupListItem;
