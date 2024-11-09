import { useTheme } from "./use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-button" onClick={toggleTheme}>
      ❐
    </button>
  );
}
