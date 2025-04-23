import { useEffect } from "react";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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
        </ul>
      </nav>
    </header>
  );
}
