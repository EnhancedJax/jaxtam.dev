import HomePageClient from "../../components/HomePageClient";
import LocomotiveHomeShell from "../../components/LocomotiveHomeShell";

const baseUrl = "https://jaxtam.dev";

export const metadata = {
  description:
    "譚立言（Jax Tam）是一名網頁開發者，以用戶為中心打造數碼產品。現居香港。",
  alternates: {
    canonical: `${baseUrl}/hk`,
    languages: {
      en: `${baseUrl}/`,
      "zh-HK": `${baseUrl}/hk`,
    },
  },
};

export default function HkHome() {
  return (
    <LocomotiveHomeShell>
      <HomePageClient />
    </LocomotiveHomeShell>
  );
}
