import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SidebarMenuItem from "./ui/SidebarMenuItem";
import logo from "../assets/company.svg";
import IconButton from "./ui/IconButton";
import { BabyBoyDressFreeIcons, Book03FreeIcons, Book04FreeIcons, MultiplicationSignFreeIcons, PlusSignCircleFreeIcons, TeacherFreeIcons, } from "@hugeicons/core-free-icons";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { toggleMenu } from "../features/events/eventSlice";
const Sidebar = () => {
    const { isMenuOpen } = useAppSelector((state) => state.events);
    const dispatch = useAppDispatch();
    return (_jsxs("aside", { className: `${isMenuOpen ? "" : "-translate-x-full"} sidebar bg-primary-surface absolute z-99 flex h-screen w-72 shrink-[0] flex-col gap-4 shadow transition ease-in-out lg:static lg:translate-0 lg:shadow-none`, children: [_jsxs("section", { className: "bg-header flex items-center justify-between px-4 py-4", children: [_jsx("img", { src: logo, className: "h-6", alt: "Company Logo" }), _jsx("button", { onClick: () => dispatch(toggleMenu()), className: "text-white lg:invisible", children: _jsx(IconButton, { icon: MultiplicationSignFreeIcons }) })] }), _jsxs("section", { className: "px-4", children: [_jsx("h4", { className: "text-muted mb-2 text-sm", children: "Dashboards" }), _jsxs("ul", { className: "flex flex-col gap-1", children: [_jsx(SidebarMenuItem, { icon: Book03FreeIcons, isActive: true, label: "Brain Bank", link: "/brain-bank" }), _jsx(SidebarMenuItem, { icon: BabyBoyDressFreeIcons, isActive: true, label: "ZSon Fashion", link: "/something" }), _jsx(SidebarMenuItem, { icon: TeacherFreeIcons, isActive: true, label: "Tutorhub", link: "/something" })] })] }), _jsxs("section", { className: "px-4", children: [_jsx("h4", { className: "text-muted mb-2 text-sm", children: "Navigation" }), _jsxs("ul", { className: "flex flex-col gap-1", children: [_jsx(SidebarMenuItem, { icon: PlusSignCircleFreeIcons, isActive: true, label: "Create Book", link: "/brain-bank/create-book" }), _jsx(SidebarMenuItem, { icon: Book04FreeIcons, isActive: true, label: "ICT MCQ Skills", link: "/something" }), _jsx(SidebarMenuItem, { icon: Book04FreeIcons, isActive: true, label: "Bangla First Paper", link: "/something" }), _jsx(SidebarMenuItem, { icon: Book04FreeIcons, isActive: true, label: "Bangla Second Paper", link: "/something" }), _jsx(SidebarMenuItem, { icon: Book04FreeIcons, isActive: true, label: "Physics First Paper", link: "/something" }), _jsx(SidebarMenuItem, { icon: Book04FreeIcons, isActive: true, label: "Physics Second Paper", link: "/something" })] })] })] }));
};
export default Sidebar;
