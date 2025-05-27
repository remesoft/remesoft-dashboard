import "../locales/i18n";
import React from "react";
import avatar from "../assets/avatar.jpg";
import IconButton from "./ui/IconButton.js";
import { useAppDispatch } from "../hooks";
import { toggleMenu } from "../features/events/eventSlice";
import Search from "./ui/Search";
import {
  Menu02Icon,
  Search01Icon,
  Moon02FreeIcons,
  Notification03FreeIcons,
  DashboardCircleEditFreeIcons,
} from "@hugeicons/core-free-icons";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="bg-header flex justify-between px-4 py-4">
      {/* left side of heading  */}
      <div className="flex items-center gap-4">
        <button onClick={() => dispatch(toggleMenu())} className="text-white">
          <IconButton icon={Menu02Icon} />
        </button>
        <Search className="hidden md:flex" />
      </div>

      {/* right side of heading  */}
      <div className="flex items-center justify-between gap-2">
        <IconButton className="md:hidden" icon={Search01Icon} />
        <IconButton className="hidden md:block" icon={DashboardCircleEditFreeIcons} />
        <IconButton icon={Notification03FreeIcons} />
        <IconButton className="hidden md:block" icon={Moon02FreeIcons} />
        <div className="ml-2">
          <img className="h-8 w-8 rounded-full" src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
