import { useTheme } from "./use-theme.tsx";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="paint-button" onClick={toggleTheme}>
      ✎
    </button>
  );
}
