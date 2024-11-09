export type Theme = "yellow" | "hsl(0, 100%, 94%)" | "#C4A484" | "lightblue";

export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
