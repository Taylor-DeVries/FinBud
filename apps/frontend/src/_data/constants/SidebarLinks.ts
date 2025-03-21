import {
  IconHome,
  IconStar,
  IconPaw,
  IconSettings,
  IconUser,
  IconQuestionMark,
} from "@tabler/icons-react";

interface SidebarLink {
  imgURL: React.ComponentType; // Type for the imported icons
  route: string;
  label: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: IconHome,
    route: "/",
    label: "Home",
  },
  {
    imgURL: IconQuestionMark,
    route: "/quiz",
    label: "Quiz",
  },
  {
    imgURL: IconPaw,
    route: "/characters",
    label: "Characters",
  },
  {
    imgURL: IconSettings,
    route: "/settingsPage",
    label: "Settings",
  },
  // {
  //     imgURL: IconUser,
  //     route: "/profile",
  //     label: "Profile",
  // },
];
