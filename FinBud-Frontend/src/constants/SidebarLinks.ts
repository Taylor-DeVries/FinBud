import {
    IconHome,
    IconStar,
    IconPaw,
    IconSettings,
    IconUser,
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
        imgURL: IconStar,
        route: "/tips",
        label: "Tips",
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
