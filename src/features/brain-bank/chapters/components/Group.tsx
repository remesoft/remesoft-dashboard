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
          `${isActive && "active"} list hover:bg-component border-border/50 [.active]:bg-component flex rounded-sm py-2 pl-9 hover:border [.active]:border`
        }
      >
        <HugeiconsIcon icon={LicenseFreeIcons} className="mr-2 h-4 w-4" />
        {label}
      </NavLink>
    </li>
  );
};

export default Group;
