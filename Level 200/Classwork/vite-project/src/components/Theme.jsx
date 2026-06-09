import { useThemeStore } from "../store/themeStore";

function Theme() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Theme;
