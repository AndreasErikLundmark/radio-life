import { ReactNode, useState } from "react";
import { ThemeContext } from "./theme-context.tsx";
import { Theme } from "./types.tsx";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("yellow");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // Determine the next theme based on the previous one
      if (prevTheme === "yellow") return "hsl(0, 100%, 94%)"; // Light cream
      if (prevTheme === "hsl(0, 100%, 94%)") return "#C4A484"; // Brown
      if (prevTheme === "#C4A484") return "lightblue"; // Light blue
      if (prevTheme === "lightblue") return "yellow"; // Back to yellow

      // Optional fallback
      return "yellow"; // Fallback case
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
