// export type Theme = "yellow" | "hsl(0, 100%, 94%)" | "#C4A484" | "lightblue";
import Forest1 from "../images/forest.png";
import Forest2 from "../images/forest2.png";
import Desert from "../images/desert.png";
import Space from "../images/space2.png";
import Winter from "../images/winter.png";
import Summer from "../images/summer.png";
import Moon from "../images/moon.png";

export type Theme =
  | typeof Forest1
  | typeof Forest2
  | typeof Desert
  | typeof Space;
typeof Winter;
typeof Summer;
typeof Moon;

export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
