/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clbg: "#f5f5f5",
        clfg: "#ededed",
        clborder: "#E5E7EB",
        cldarkgray: "#4B5563",
        clgray: "#6B7280",
        clpg: "#374151", //paragraph
        clgreen: "#10B981",
        clblue: "#3B82F6",
        clyellow: "#FBBF24",
        /* ----------- Dark theme ----------- */
        cdbg: "#232323",
        cdfg: "#282828",
        cdborder: "#343434",
        cddarkgray: "#707070",
        cdgray: "#A0A0A0",
        cdpg: "#EDEDED", //paragraph
        cdgreen: "#34D399",
        cdblue: "#35CEFF",
        cdyellow: "#FFC657",
      },
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "13px",
      base: ["15px", "22.5px"],
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "48px",
      "3xl": "96px",
    },
  },
  plugins: [],
};
