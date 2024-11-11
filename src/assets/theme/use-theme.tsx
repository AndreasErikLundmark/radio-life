import { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { ThemeContextProps } from "./types";

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  console.log(context.theme);
  return context;
};
