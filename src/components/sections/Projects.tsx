import projects from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl p-6 border border-accent/10 hover:-translate-y-1  transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-primary mb-4">
              {project.description || "No description provided."}
            </p>
            <div>
              {project.tools?.map((tool) => (
                <span
                  key={tool}
                  className="bg-secondary text-primary px-3 py-1 rounded-full text-sm hover:shadow-sm transition"
                >
                  {tool}
                </span>
              ))}
            </div>
            {project.links.map((x) => (
              <div>
                <a
                  className="text-blue-600 mt-2 inline-block hover:underline"
                  href={x.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {x.label} <span>{">"}</span>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
