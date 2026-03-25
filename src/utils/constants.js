import { DM_Mono, Raleway } from "next/font/google";
export const DM_MONO_FAMILY = DM_Mono({ weight: "300", subsets: ["latin"] });
export const FAMILY = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const TITLE_TEXT = `Full-stack developer`;
export const STATUS_TEXT = `Available for new opportunities ⋅ Student @ HKU`;

export const ABOUT_MD = `Full-stack Developer that can design, specialized in mobile app and web app development. I help bring digital products to life with smooth, interactive and "premium" experience
`;

export const FOOTER_MD = `Built with [Next.js](https://nextjs.org/), [Framer.Motion](https://www.framer.com/motion/) and [Tailwind CSS](https://tailwindcss.com/), deployed with [Vercel](https://vercel.com/). [Hygraph](https://hygraph.com) for CMS w/ [GraphQL](https://graphql.org/). Loosely designed in [Figma](https://www.figma.com/file/jweQFqBujsTKhL6Zw44MON/Design?type=design&node-id=4%3A2&mode=design&t=O2Vfu63nmrOhawVX-1) and coded in [Visual Studio Code](https://code.visualstudio.com/).  Using the [Ubuntu](https://fonts.google.com/specimen/Ubuntu) typeface for sans and [DM Mono](https://fonts.google.com/specimen/DM+Mono) for monospace. Source code available on [GitHub](https://github.com/EnhancedJax/enhanced-jax.dev). Inspired by [Brittany Chiang](https://brittanychiang.com/).`;

export const API_URL =
  "https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master";

export const THEMES = ["light", "dark"];
export const DARKTHEMES = [1];

export const ALERT_TIMEOUT = 3000;
