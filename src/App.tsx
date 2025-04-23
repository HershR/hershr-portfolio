import "./App.css";
import { Header } from "./components/sections/Header";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main className="px-4 md:px-12 lg:px-24 py-8 space-y-20">
          <About />
          <Projects username="HershR" />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
