import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-[unset] text-2xl p-2 transition hover:scale-110"
      aria-label="Toggle theme"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};
