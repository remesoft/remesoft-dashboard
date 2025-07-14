// import icons
import { Books02FreeIcons, ClothesFreeIcons, TeacherFreeIcons } from "@hugeicons/core-free-icons";
import { ItemProps } from "../types/book.types";

// export menu
const dashboards: ItemProps[] = [
  {
    id: 1,
    label: "Brain Bank",
    icon: Books02FreeIcons,
    link: "/brain-bank",
    isActive: true,
  },
  {
    id: 2,
    label: "Zson Care",
    icon: ClothesFreeIcons,
    link: "/zson",
    isActive: false,
  },
  {
    id: 3,
    label: "Tutorhub",
    icon: TeacherFreeIcons,
    link: "/tutorhub",
    isActive: false,
  },
];

export default dashboards;
