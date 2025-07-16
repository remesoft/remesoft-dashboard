import { LicenseFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { NavLink, useParams } from "react-router";

interface GroupProps {
  id: number;
  label: string;
}

const Group: React.FC<GroupProps> = ({ id, label }) => {
  const { bookId } = useParams();
  return (
    <li className="list-none">
      <NavLink
        to={`/brain-bank/books/${bookId}/groups/${id}`}
        className={({ isActive }) =>
          `flex rounded-sm py-2 pl-9 ${isActive ? "bg-component outline-border/20 outline" : ""} hover:bg-component/40 hover:outline-border/30`
        }
      >
        <HugeiconsIcon icon={LicenseFreeIcons} className="mr-2 h-4 w-4" />
        {label}
      </NavLink>
    </li>
  );
};

export default Group;
