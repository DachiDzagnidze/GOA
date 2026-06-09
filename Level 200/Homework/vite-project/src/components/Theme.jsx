import { useThemeStore } from "../stores/themeStore";

export default function Theme() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}