import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <AppProvider>
        <body
          className={`${FAMILY.className} bg-cbg w-screen overflow-x-hidden h-screen text-cpg`}
        >
          <NavBar />
          {children}
          <FunnyBackground />
        </body>
      </AppProvider>
    </html>
  );
}
