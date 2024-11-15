import { ReactNode, useState } from "react";
import { ThemeContext } from "./theme-context";
import { Theme } from "./types";
import Forest1 from "../images/forest.png";
import Forest2 from "../images/forest2.png";
import Desert from "../images/desert.png";
import Space from "../images/space2.png";
import Winter from "../images/winter.png";
import Summer from "../images/summer.png";
import Moon from "../images/moon.png";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Forest1);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === Forest1) return Forest2;
      if (prevTheme === Forest2) return Desert;
      if (prevTheme === Desert) return Space;
      if (prevTheme === Space) return Winter;
      if (prevTheme === Winter) return Summer;
      if (prevTheme === Summer) return Moon;
      if (prevTheme === Moon) return Forest1;

      return Forest1;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
