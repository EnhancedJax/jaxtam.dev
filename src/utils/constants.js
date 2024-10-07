import { DM_Mono, Ubuntu } from "next/font/google";
export const DM_MONO_FAMILY = DM_Mono({ weight: "300", subsets: ["latin"] });
export const FAMILY = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const TITLE_TEXT = `Full-stack developer`;
export const STATUS_TEXT = `Available for new opportunities ⋅ Student @ HKU`;

export const ABOUT_MD = `Back in 2020, I decided to try my hand at creating [Rainmeter](https://rainmeter.net) themes and went down the rabbit hole of coding and front-end development. Fast-forward to today, I'm now pursuing my degree in **Computer Science at The University of Hong Kong**. 


My main focus these days is to design and practice building user interfaces and web-apps, apart from my studies. I most enjoy building software that revolves around the user experience, built and designed with the users in mind. I also work on [LaTeX uni course notes](https://jaxtam.dev/notes), which aims to organize materials in a stripped-down yet cohesive way. 


When I'm not at the computer, I'm usually at the gym, photographing, hanging out with my girlfriend and two dogs, or eating Sam Gor mixian.
`;

export const FOOTER_MD = `Built with [Next.js](https://nextjs.org/), [Framer.Motion](https://www.framer.com/motion/) and [Tailwind CSS](https://tailwindcss.com/), deployed with [Vercel](https://vercel.com/). [Hygraph](https://hygraph.com) for CMS w/ [GraphQL](https://graphql.org/). Loosely designed in [Figma](https://www.figma.com/file/jweQFqBujsTKhL6Zw44MON/Design?type=design&node-id=4%3A2&mode=design&t=O2Vfu63nmrOhawVX-1) and coded in [Visual Studio Code](https://code.visualstudio.com/).  Using the [Ubuntu](https://fonts.google.com/specimen/Ubuntu) typeface for sans and [DM Mono](https://fonts.google.com/specimen/DM+Mono) for monospace. Source code available on [GitHub](https://github.com/EnhancedJax/enhanced-jax.dev). Inspired by [Brittany Chiang](https://brittanychiang.com/).`;

export const API_URL =
  "https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master";

export const THEMES = ["light", "dark", "tailwind", "desert"];
export const DARKTHEMES = [1, 2];

export const ALERT_TIMEOUT = 3000;

export const FLAIR_ITEMS = [
  { name: "react", pos: { x: -420, y: 74 } },
  { name: "javascript", pos: { x: -343, y: -59 } },
  { name: "nodejs", pos: { x: -435, y: -149 } },
  { name: "tailwindcss", pos: { x: -378, y: -237 } },
  { name: "supabase", pos: { x: -401, y: -341 } },
  { name: "nextjs", pos: { x: 374, y: 60 } },
  { name: "figma", pos: { x: 326, y: -10 } },
  { name: "storybook", pos: { x: 402, y: -105 } },
  { name: "postman", pos: { x: 375, y: -209 } },
  { name: "vscode", pos: { x: 355, y: -335 } },
];

export const DEFAULT_PDF_URL =
  "https://mag.wcoomd.org/uploads/2018/05/blank.pdf";
export const PDF_WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
