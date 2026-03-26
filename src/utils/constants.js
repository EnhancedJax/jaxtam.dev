import { DM_Mono, Noto_Sans_TC, Raleway } from "next/font/google";
export const DM_MONO_FAMILY = DM_Mono({ weight: "300", subsets: ["latin"] });
export const FAMILY = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const FAMILY_ZH_HK = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const THEMES = ["dark"];
export const DARKTHEMES = [0];

export const ALERT_TIMEOUT = 3000;
