import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition"
    >
      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow
        transition-transform ${dark ? "translate-x-7" : ""}`}
      />
      <span className="absolute left-1.5 top-1 text-xs">🌙</span>
      <span className="absolute right-1.5 top-1 text-xs">☀️</span>
    </button>
  );
};

export default ThemeToggle;
