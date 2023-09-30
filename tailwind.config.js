/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        "show-in": {
          from: {
            opacity: 0,
            transform: "translateX(-50%) translateY(-50%) scale(.95)",
          },
          to: {
            opacity: 1,
            transform: "translateX(-50%) translateY(-50%) scale(1)",
          },
        },
      },
      animation: {
        "show-in": "show-in .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
