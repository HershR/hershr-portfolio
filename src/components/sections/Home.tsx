function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl text-left font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text leading-right text-transparent">
          <span>Hi there!</span>
          <br />
          <span>I am Hersh Rudrawal</span>
        </h1>
        <p className="text-lg md:text-xl text-primary mb-8 max-w-lg mx-auto text-left">
          I am Junior Software Developer based out in California, USA.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#projects"
            className="bg-accent text-secondary py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-accent bg-secondary/50 text-primary py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
