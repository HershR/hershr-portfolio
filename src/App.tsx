import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";
import Home from "./components/sections/Home";
import RevealOnScroll from "./components/RevealOnScroll";
import YouTubeSection from "./components/sections/YouTube";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-primary`}
      >
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* <NabBar /> */}
        <main className="px-4 md:px-12 lg:px-24 py-8 space-y-20">
          <RevealOnScroll>
            <Home />
          </RevealOnScroll>
          <RevealOnScroll>
            <About />
          </RevealOnScroll>
          <RevealOnScroll>
            <Projects />
          </RevealOnScroll>

          <RevealOnScroll>
            <YouTubeSection />
          </RevealOnScroll>

          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
