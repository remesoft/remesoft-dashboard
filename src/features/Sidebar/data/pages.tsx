// import icons
import { Books02FreeIcons } from "@hugeicons/core-free-icons";
import { ItemProps } from "../types/book.types";

interface PagesProps {
  dashboard: string;
  pages: ItemProps[];
}

// export menu
const pages: PagesProps[] = [
  {
    dashboard: "brain-bank",
    pages: [
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
    ],
  },
  {
    dashboard: "zson",
    pages: [
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
        label: "Create Product",
        icon: Books02FreeIcons,
        link: "/brain-bank/create-product",
        isActive: false,
      },
    ],
  },
];

export default pages;
