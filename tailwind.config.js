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
        clBg: "#232323",
        clFg: "#282828",
        clBorder: "#343434",
        clDarkgray: "#707070",
        clGray: "#A0A0A0",
        clPg: "#EDEDED", //paragraph
        clGreen: "#34D399",
        clBlue: "#35CEFF",
        clYellow: "#FFC657",
        /* ----------- Dark theme ----------- */
        cdBg: "#232323",
        cdFg: "#282828",
        cdBorder: "#343434",
        cdDarkgray: "#707070",
        cdGray: "#A0A0A0",
        cdPg: "#EDEDED", //paragraph
        cdGreen: "#34D399",
        cdBlue: "#35CEFF",
        cdYellow: "#FFC657",
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
