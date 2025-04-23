import "./App.css";
import React from "react";
import { Header } from "./components/sections/Header";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <main className="px-4 md:px-12 lg:px-24 py-8 space-y-20">
        <About />
        <Projects username="HershR" />
        <Contact />
      </main>
    </div>
  );
}

export default App;
