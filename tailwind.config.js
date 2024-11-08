import plugin from "tailwindcss";
import daisyui from "daisyui";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./css/**/*.{css}"],
  // daisyui: {
  //   themes: [
  //     {
  //       mainTheme: {
  //         primary: "#e5e7eb",
  //         secondary: "#a8a29e",
  //         accent: "#4b5563",
  //         neutral: "#ff00ff",
  //         "base-100": "#f3f4f6",
  //         info: "#ccfbf1",
  //         success: "#86efac",
  //         warning: "#f59e0b",
  //         error: "#b91c1c",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
