import { AiFillMoon, AiFillSun } from "react-icons/ai";

export default function ThemeToggle() {
  function toggleTheme() {
    localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }
  return (
    <a className="hover:cursor-pointer" onClick={toggleTheme}>
      {localStorage.theme === "dark" ? <AiFillSun /> : <AiFillMoon />}
    </a>
  );
}
