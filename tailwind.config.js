/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        white: {
          100: "#FFFFFF", 
      },
        blue: {
          100: "#0000FF", 
      },
        green: {
          100: "#00FF00", 
          },
        red: {
          100: "#FF0000", 
          },
      
        gray: {
          100: "#808080",
        },
       silver: {
          100: "#C0C0C0",
        },
        navy: {
          100: "#000080",
        },
        brown: {
          100: "#ba4a00",
        },
       ash: {
          100: "#5d6d7e", 
      },
      darkash: {
        100: "#454545", 
    },
    greenishash: {
      100: "#109cc2", 
  },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
},
  plugins: [],
};
