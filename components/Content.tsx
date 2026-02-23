"use client";
import { usePathname } from "next/navigation";

export default function Content({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = pathname.split("/").filter(Boolean).join(" > ") || "About";

  return (
    <div className="flex flex-col items-center bg-white/10 dark:bg-gray-800/30 shadow-xl dark:shadow-black/40 backdrop-blur-3xl border border-gray-200/20 dark:border-gray-700/30 rounded-xl w-full md:w-4xl h-full">
      <div className="flex justify-start p-4 w-full">
        <h1 className="font-bold text-3xl capitalize">{title}</h1>
      </div>
      {children}
    </div>
  );
}
