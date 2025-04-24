import { useEffect } from "react";
import { useState } from "react";
import { AiFillSun } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const deviceTheme = localStorage.getItem("theme");
    if (deviceTheme) {
      setTheme(deviceTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);
  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return (
    <header className="bg-background shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">HershR Portfolio</h1>
        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          role="button"
        >
          &#9776;
        </div>
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <button className="hover:cursor-pointer" onClick={toggleTheme}>
              {theme === "dark" ? <AiFillSun /> : <AiFillMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
