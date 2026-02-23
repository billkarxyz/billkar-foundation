"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  FaGithub,
  FaInstagram,
  FaMoon,
  FaSun,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import NavLinkButton from "./NavLinkButton";
import { navItems } from "./_nav";
import { RiColorFilterFill } from "react-icons/ri";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [themeClass, setThemeClass] = useState<
    "theme-default" | "theme-purple"
  >(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme-class") as
          | "theme-default"
          | "theme-purple") || "theme-default"
      );
    }
    return "theme-default";
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("theme-default", "theme-purple");
    document.documentElement.classList.add(themeClass);
    localStorage.setItem("theme-class", themeClass);
  }, [themeClass]);

  const isDarkMode = theme === "dark";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf"; // Ganti dengan URL file resume Anda
    link.download = "billkar_Resume1.pdf"; // Ganti dengan nama file yang diinginkan
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center bg-white/10 dark:bg-gray-800/30 shadow-xl dark:shadow-black/40 backdrop-blur-3xl py-4 border border-gray-200/20 dark:border-gray-700/30 rounded-xl w-full md:w-xs h-full">
      <div className="flex justify-between px-4 w-full">
        <Button
          size="sm"
          className="rounded-full"
          variant="ghost"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          aria-label="Toggle dark mode">
          {mounted ? (
            isDarkMode ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )
          ) : (
            <span className="w-4 h-4" />
          )}
        </Button>
        <Button
          size="sm"
          className="rounded-full"
          variant="ghost"
          aria-label="Toggle color mode"
          onClick={() => {
            setThemeClass((prev) =>
              prev === "theme-default" ? "theme-purple" : "theme-default",
            );
          }}>
          <RiColorFilterFill className="w-4 h-4 text-primary" />
        </Button>
      </div>

      <div className="flex flex-col items-center p-4 w-full">
        <motion.div
          initial={{ rotateY: -180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}>
          <Avatar>
            <AvatarImage src="/assets/profile.jpg" alt="Abill Akbar" />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
        </motion.div>
        <span className="flex space-x-1 pt-4 font-bold text-2xl">
          <p className="text-primary">Abill</p>
          <p>Akbar</p>
        </span>
        <TypingAnimation
          className="font-medium text-secondary-foreground text-sm"
          loop
          duration={200}
          delay={1000}>
          Enthusiast Tech | Enthusiast Crypto
        </TypingAnimation>
        <Button
          size={"sm"}
          variant={"default"}
          className="mt-4"
          onClick={downloadResume}>
          Download Resume
        </Button>

        <div className="flex flex-row justify-evenly mt-4 w-full">
          <Link href="https://github.com/billkarxyz" target="_blank">
            <Button
              aria-label="Github"
              className="rounded-full"
              variant={"secondary"}>
              <FaGithub className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/kukubibigaga" target="_blank">
            <Button
              aria-label="Instagram"
              className="rounded-full"
              variant={"secondary"}>
              <FaInstagram className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@kukubibigaga" target="_blank">
            <Button
              aria-label="Youtube"
              className="rounded-full"
              variant={"secondary"}>
              <FaYoutube className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100/30 dark:bg-gray-700/30 p-4 w-full">
        <div className="flex flex-row items-center">
          <FaLocationDot className="mr-2 w-4 h-4 text-muted-foreground text-xs" />
          <p className="text-muted-foreground text-xs">Pandeglang, Indonesia</p>
        </div>
        <div className="flex flex-row items-center">
          <MdEmail className="mr-2 w-4 h-4 text-muted-foreground text-xs" />
          <p className="text-muted-foreground text-xs">
            aggresidlh@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-2 px-4 w-full">
        <Link href="mailto:aggresidlh@gmail.com" target="_blank">
          <Button variant={"secondary"} size={"sm"}>
            <MdEmail className="w-4 h-4" />
            Email Me
          </Button>
        </Link>
      </div>

      <div className="hidden md:block mt-4 px-4 w-full">
        <p className="mb-2 font-semibold text-sm uppercase tracking-wide">
          Quick Links
        </p>
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavLinkButton key={index} href={item.href} label={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
