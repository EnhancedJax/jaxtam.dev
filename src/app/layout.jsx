import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jax Tam.",
  description: "A beautiful portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-red-500 ${inter.className}`}>{children}</body>
    </html>
  );
}
