import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/components/_nav";
import { SplashProvider } from "@/components/SplashProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Abill Akbar",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme-class') || 'theme-default';
                document.documentElement.classList.add(theme);
                var mode = localStorage.getItem('theme');
                if (
                  mode === 'dark' ||
                  (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e){}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SplashProvider>
          <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
            <main className="bg-gradient-to-b md:bg-gradient-to-br from-90% from-indigo-100 md:from-50% dark:from-gray-900 to-10% to-primary md:to-50% dark:to-gray-800">
              <div className="flex md:flex-row flex-col justify-center items-center gap-8 p-4 w-screen h-max md:h-screen overflow-hidden">
                <Sidebar />
                <Content>{children}</Content>
              </div>
              <FloatingDock
                desktopClassName="md:hidden"
                mobileClassName="md:hidden"
                items={navItems}
              />
            </main>
          </ThemeProvider>
        </SplashProvider>
      </body>
    </html>
  );
}
