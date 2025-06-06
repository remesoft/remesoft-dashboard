import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavLink } from "react-router-dom";
import { SidebarMenuItemProps } from "../../types/brain-bank/props-type";

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  link,
  icon,
  label,
}) => (
  <li>
    <NavLink
      to={link}
      className={({ isActive }) =>
        `sidebar-menu-item ${isActive ? "active" : ""}`
      }
    >
      <HugeiconsIcon icon={icon} />
      {label}
    </NavLink>
  </li>
);

export default SidebarMenuItem;
