import { IconHome } from "@tabler/icons-react";
import { AiFillRead, AiFillPlusCircle, AiOutlineGlobal } from "react-icons/ai";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "English",
    link: "/#english",
    icon: <AiFillRead className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Maths",
    link: "/#maths",
    icon: (
      <AiFillPlusCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Geography",
    link: "/#geography",
    icon: (
      <AiOutlineGlobal className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];
