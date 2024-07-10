/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cbg: "#232323",
        cfg: "#282828",
        cborder: "#343434",
        cdarkgray: "#707070",
        cgray: "#A0A0A0",
        cpg: "#EDEDED", //paragraph
        cgreen: "#34D399",
        clblue: "#35CEFF",
        cyellow: "#FFC657",
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
