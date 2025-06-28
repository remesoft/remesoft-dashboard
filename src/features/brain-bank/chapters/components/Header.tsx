import IconButton from "@/components/ui/IconButton";
import { PlusSignFreeIcons, Pulse01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <section className="py flex items-center px-4 py-3 font-semibold">
      <input type="text" value="Chapter Name" className="flex-grow bg-transparent" />
      <button className="hover:bg-background cursor-pointer rounded-full p-1.5 transition">
        <HugeiconsIcon className="h-4 w-4" icon={PlusSignFreeIcons} />
      </button>
    </section>
  );
};

export default Header;
