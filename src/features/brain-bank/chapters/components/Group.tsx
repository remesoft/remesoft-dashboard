import { LicenseFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface GroupProps {}

const Group: React.FC = () => {
  return (
    <li className="">
      <div className="hover:bg-background flex items-center gap-2 px-2 py-2">
        <HugeiconsIcon className="h-5 w-5" icon={LicenseFreeIcons} />
        <span className="max-w-62 overflow-hidden font-medium text-ellipsis whitespace-nowrap">
          Information and communication Tech
        </span>
      </div>
    </li>
  );
};

export default Group;
