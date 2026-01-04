module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        habittracker: {
          "primary": "#22c55e",        // ✅ green-500
          "primary-focus": "#16a34a",  // ✅ green-600
          "primary-content": "#ffffff",
          "secondary": "#9333ea",
          "accent": "#f97316",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "winter",
      "forest",
    ],
  },
};