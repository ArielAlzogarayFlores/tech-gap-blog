/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      //Call-To-Action
      "CTA-Default": "#0E5FFE",
      "CTA-Hovered": "#3F7FFD",
      //Dark-Theme(-)
      "Background-Default": "#010409",
      "Background-Light": "#121924",
      "Background-Variations": "#222C3C",
      "Extras" : "#2F3A4F",
      "Text-Default": "#5A6280",
      "Text-Relevant": "#EDEDED",
      //Light-Theme(LT)
      "Background-Default-LT": "#F8FAFF",
      "Background-Light-LT": "#E3EBFF", 
      "Background-Variations-LT": "#BFC8EB",
      "Extras-LT": "#ABB6E2",
      "Text-Default-LT": "#71799A",
      "Text-Relevant-LT": "#252B40",
      //Interactive-Colors
      "Save": "#FFB800",
      "Love": "#F30D7C",
      "Share": "#A73BFC",
      "Danger": "#FF3232",
    },
    directions: {
      // defaults to these values
      t: "to top",
      tr: "to top right",
      r: "to right",
      br: "to bottom right",
      b: "to bottom",
      bl: "to bottom left",
      l: "to left",
      tl: "to top left",
    },
    fontFamily: {
      sans: ["var(--font-satoshi)"],
    },
    fontSize: {
      sm: ["14px", "19px"],
      base: ["16px", "22px"],
      lg: ["20px", "27px"],
      xl: ["24px", "32px"],
      mdxxl: ["32px", "43px"],
      xxl: ["48px", "65px"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
