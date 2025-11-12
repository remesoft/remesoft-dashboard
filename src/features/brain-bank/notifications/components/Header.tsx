import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useRef } from "react";

const Header: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={dropdownRef} className="py relative flex items-center justify-between px-4 py-3 font-semibold">
      <h2>Notifications</h2>
    </section>
  );
};

export default Header;
