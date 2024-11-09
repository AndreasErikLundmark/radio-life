import { useContext } from "react";
import { ThemeContext } from "./theme-context.tsx";
import { ThemeContextProps } from "./types.tsx";

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  console.log(context.theme);
  return context;
};
// import { useContext } from "react";
// import { ThemeContext } from "./theme-context";

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context; // Return theme and toggleTheme
// };
