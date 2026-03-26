import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { headers } from "next/headers";
import { I18nProvider } from "../i18n/I18nProvider";
import { LOCALE_HEADER } from "../i18n/config";
import { FAMILY, FAMILY_ZH_HK, THEMES } from "../utils/constants";
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
  const locale = headers().get(LOCALE_HEADER) ?? "en";
  const lang = locale === "zh-HK" ? "zh-HK" : "en";
  const fontClass =
    locale === "zh-HK" ? FAMILY_ZH_HK.className : FAMILY.className;

  return (
    <html
      lang={lang}
      data-locale={locale === "zh-HK" ? "hk" : "en"}
      className="overflow-x-hidden"
      suppressHydrationWarning
    >
      <Analytics />
      <SpeedInsights />
      <body
        className={`${fontClass} h-screen w-full max-w-[100vw] overflow-x-hidden text-pg bg-bg transition-colors`}
      >
        <ThemeProvider attribute="class" themes={THEMES}>
          <AppProvider>
            <I18nProvider>{children}</I18nProvider>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
