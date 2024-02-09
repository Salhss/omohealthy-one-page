/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        grandstander: ["var(--font-grandstander)"],
        poppins: ["var(--font-poppins)"],
      },
    },
    colors: {
      "blue-light": "#F0FBFF",
      white: "#FFFEFE",
      "dark-grey": "#3D3D3D",
      red: "#FF0000",
      maroon: "#800000",
      pink: "#EB69A3",
      grey: "#808080",
      "light-pink": "#FFECF8",
      "soft-yellow": "#F9F183",
      "soft-orange": "#EF8348",
      "soft-grey": "#5B5B5B",
      black: "#000000",
      "sky-blue": "#F0FBFF",
      "soft-green": "#CEE568",
      "dark-green": "#6E9347",
    },
    screens: {
      phone: "320px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      desktopXl: "1500px",
    },
  },
  plugins: [],
};
