import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl text-left font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text leading-right text-transparent">
          <span>Welcome!</span>
          <br />
          <span>I am Hersh Rudrawal</span>
        </h1>
        <p className="text-lg md:text-xl text-accent mb-8 max-w-lg mx-auto text-left">
          Junior Software Developer with experience in full-stack, mobile app,
          and game development. Passionate about creating impactful solutions to
          address real-world problems and contributing to innovative software
          engineering projects.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#projects"
            className="bg-accent text-secondary py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-tranlate-y-1 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-accent text-secondary py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-tranlate-y-1 hover:shadow-lg"
            //   onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
