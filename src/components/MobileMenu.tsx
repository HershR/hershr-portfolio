interface MobileHeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function MobileMenu({ menuOpen, setMenuOpen }: MobileHeaderProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-secondary z-60 flex flex-col 
        justify-center items-center transition-all duration-300 ease-in-out ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-primary text-3xl focus:outline-none cursor-pointer "
        aria-label="Close menu"
      >
        &times;
      </button>
      <nav className="header-menu flex flex-col items-center space-y-6">
        <a
          href="#home"
          className={`text-2xl text-primary font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } hover:text-foregound`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-2xl text-primary font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } hover:text-foregound`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className={`text-2xl text-primary font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } hover:text-foregound`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-2xl text-primary font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } hover:text-foregound`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
