import React from "react";
import { AiFillProject } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

// Define the shape of a navigation item
interface NavItem {
  href: string;
  title: string;
  icon: React.ReactElement; // More specific than ReactNode
}

// Create the navigation items
const navItems: NavItem[] = [
  {
    href: "/",
    title: "About",
    icon: React.createElement(FaUser, { className: "h-4 w-4" }),
  },
  {
    href: "/projects",
    title: "Projects",
    icon: React.createElement(AiFillProject, { className: "h-4 w-4" }),
  },
  {
    href: "/resume",
    title: "Resume",
    icon: React.createElement(PiReadCvLogoFill, { className: "h-4 w-4" }),
  },
];

export { navItems };
export type { NavItem };
