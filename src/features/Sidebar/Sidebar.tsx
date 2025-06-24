// Sidebar.tsx
import React from "react";
import logo from "@/assets/company.svg";
import IconButton from "@/components/ui/IconButton";
import { MultiplicationSignFreeIcons } from "@hugeicons/core-free-icons";

import Menu from "./components/Menu";
import dashboards from "./data/dashboards";
import pages from "./data/pages";

// sidebar component type
interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

// component sidebar
const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen } = props;
  return (
    <aside className={`${isOpen && "-translate-x-full"} sidebar`}>
      {/* header area start */}
      <section className="bg-primary flex items-center justify-between px-4 py-4">
        <img src={logo} className="h-6" alt="Company Logo" />
        <div className="text-white lg:invisible">
          <IconButton icon={MultiplicationSignFreeIcons} />
        </div>
      </section>

      {/* primary menu start */}
      <section className="px-3">
        <h4 className="text-secondary/75 mb-2 text-sm">Dashboards</h4>
        <Menu isDropdown={false} items={dashboards} />
      </section>

      <section className="px-3">
        <h4 className="text-secondary/75 mb-2 text-sm">Pages</h4>
        <Menu isDropdown={false} items={pages} />
      </section>
    </aside>
  );
};

export default Sidebar;

// import React from "react";
// import SidebarMenuItem from "./ui/SidebarMenuItem";
// import logo from "../assets/company.svg";
// import IconButton from "./ui/IconButton";
// import {
//   BabyBoyDressFreeIcons,
//   Book03FreeIcons,
//   Book04FreeIcons,
//   MultiplicationSignFreeIcons,
//   PlusSignCircleFreeIcons,
//   TeacherFreeIcons,
// } from "@hugeicons/core-free-icons";
// import { useAppSelector } from "../hooks";
// import { useAppDispatch } from "../hooks";
// import { toggleMenu } from "../features/events/eventSlice";

// const Sidebar: React.FC = () => {
//   const { isMenuOpen } = useAppSelector((state) => state.events);
//   const dispatch = useAppDispatch();

//   return (
//     <aside
//       className={`${isMenuOpen ? "" : "-translate-x-full"} sidebar bg-foreground absolute flex h-screen w-72 shrink-[0] flex-col gap-4 transition ease-in-out lg:static lg:translate-0`}
//     >
//       <section className="bg-header flex items-center justify-between px-4 py-4">
//         <img src={logo} className="h-6" alt="Company Logo" />
//         <button onClick={() => dispatch(toggleMenu())} className="text-white lg:invisible">
//           <IconButton icon={MultiplicationSignFreeIcons} />
//         </button>
//       </section>
//       <section className="px-4">
//         <h4 className="mb-2 text-sm text-gray-500">Dashboards</h4>
//         <ul className="flex flex-col gap-1">
//           <SidebarMenuItem icon={Book03FreeIcons} isActive={true} label="Brain Bank" link="/brain-bank" />
//           <SidebarMenuItem icon={BabyBoyDressFreeIcons} isActive={true} label="ZSon Fashion" link="/something" />
//           <SidebarMenuItem icon={TeacherFreeIcons} isActive={true} label="Tutorhub" link="/something" />
//         </ul>
//       </section>
//       <section className="px-4">
//         <h4 className="mb-2 text-sm text-gray-500">Navigation</h4>
//         <ul className="flex flex-col gap-1">
//           <SidebarMenuItem
//             icon={PlusSignCircleFreeIcons}
//             isActive={true}
//             label="Create Book"
//             link="/brain-bank/create-book"
//           />
//           <SidebarMenuItem icon={Book04FreeIcons} isActive={true} label="ICT MCQ Skills" link="/something" />
//           <SidebarMenuItem icon={Book04FreeIcons} isActive={true} label="Bangla First Paper" link="/something" />
//           <SidebarMenuItem icon={Book04FreeIcons} isActive={true} label="Bangla Second Paper" link="/something" />
//           <SidebarMenuItem icon={Book04FreeIcons} isActive={true} label="Physics First Paper" link="/something" />
//           <SidebarMenuItem icon={Book04FreeIcons} isActive={true} label="Physics Second Paper" link="/something" />
//         </ul>
//       </section>
//     </aside>
//   );
// };

// export default Sidebar;
