import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import FunnyBackground from "../components/FunnyBackground";
import NavBar from "../components/Navbar";
import { FAMILY } from "../utils/constants";
import "./globals.css";
import { AppProvider } from "./provider";

export const metadata = {
  title: "Jax Tam.",
  description: "A beautiful portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <AppProvider>
        <body
          className={`${FAMILY.className} w-screen overflow-x-hidden h-screen  text-clpg dark:text-cdpg  bg-clbg dark:bg-cdbg transition-colors`}
        >
          <ThemeProvider attribute="class" enableSystem={true}>
            <NavBar />
            {children}
            <FunnyBackground />
          </ThemeProvider>
        </body>
      </AppProvider>
    </html>
  );
}
