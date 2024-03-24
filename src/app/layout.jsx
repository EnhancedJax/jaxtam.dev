import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jax Tam.",
  description: "A beautiful portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cbg w-screen h-screen text-cpg font-light`}>
        <Navbar />
          <div className="flex items-center justify-center mb-16 lg:mb-0 lg:ml-16">
            {children}
          </div>
      </body>
    </html>
  );
}
