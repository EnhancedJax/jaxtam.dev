import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import Alert from "../components/Alert";
import FunnyBackground from "../components/FunnyBackground";
import NavBar from "../components/Navbar";
import { FAMILY, THEMES } from "../utils/constants";
import "./globals.css";
import { AppProvider } from "./provider";

export const metadata = {
  title: {
    template: "%s - Jax Tam",
    default: "Jax Tam",
  },
  description:
    "Jax Tam is a web developer who builds digital products with the users in mind. Based in Hong Kong.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <body
        className={`${FAMILY.className} w-screen overflow-x-hidden h-screen text-pg bg-bg transition-colors`}
      >
        <ThemeProvider attribute="class" themes={THEMES}>
          <AppProvider>
            <NavBar />
            {children}
            <FunnyBackground />
            <Alert />
            {/* <Cursor /> */}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
