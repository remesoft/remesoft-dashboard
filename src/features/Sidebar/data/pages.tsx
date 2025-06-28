// import icons
import { Books02FreeIcons } from "@hugeicons/core-free-icons";
import { ItemProps } from "../types/book.types";

// export menu
const pages: ItemProps[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: Books02FreeIcons,
    link: "/brain-bank/dashboard",
    isActive: true,
    onClick: () => {
      console.log("working properly");
    },
  },
  {
    id: 2,
    label: "Create Book",
    icon: Books02FreeIcons,
    link: "/brain-bank/create-book",
    isActive: false,
  },
  {
    id: 3,
    label: "Bangla First Paper",
    icon: Books02FreeIcons,
    link: "#",
    isActive: false,
    menu: [
      {
        id: 1,
        label: "Bangla First Paper",
        icon: Books02FreeIcons,
        link: "/brain-bank/bangla-first",
        isActive: false,
      },
      {
        id: 2,
        label: "Bangla Second Paper",
        icon: Books02FreeIcons,
        link: "/brain-bank/bangla-second",
        isActive: false,
      },
    ],
  },
  {
    id: 4,
    label: "Bangla First Paper",
    icon: Books02FreeIcons,
    link: "#",
    isActive: false,
    menu: [
      {
        id: 1,
        label: "Bangla First Paper",
        icon: Books02FreeIcons,
        link: "/brain-bank/bangla-first",
        isActive: false,
      },
      {
        id: 2,
        label: "Bangla Second Paper",
        icon: Books02FreeIcons,
        link: "/brain-bank/bangla-second",
        isActive: false,
      },
    ],
  },
];

export default pages;
