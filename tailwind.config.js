module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      divideColor: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
