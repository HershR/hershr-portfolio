import ToolChip from "../ToolChip";
import WorkExperience, { WorkExperienceProps } from "../WorkExperience";

export function About() {
  const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "C#",
    "HTML",
    "CSS",
    "SQL",
    "C",
  ];
  const frontendTools = [
    "React",
    "React Native",
    "Expo",
    "Angular",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendTools = ["Flask", "PostgreSQL", "SQLite", "Redis", "AWS"];
  const gameTools = ["Unity", "Blender"];

  const workExperience: WorkExperienceProps[] = [
    {
      title: "Software Engineer",
      startYear: "2022",
      endYear: "2025",
      company: "WideSense",
      location: "Berkeley, CA",
      description: [
        "Designed and implemented backend web microservices using the Flask framework to collect and process weather and GTFS data, improving electric vehicle fleet planning and enabling quick geographic expansion.",
        "Developed and optimized a vehicle state manager leveraging Redis to cache real-time CANBus data updates, reducing vehicle state query response times for backend and frontend services.",
        "Collaborated with the frontend team to implement user-requested features using Angular and TypeScript, leading to an increase in user satisfaction.",
      ],
    },
    {
      title: "Game Design Intern",
      startYear: "Jan 2024",
      endYear: "June 2024",
      company: "SeeChangeNow",
      location: "Santa Cruz, CA",
      description: [
        "Designed and developed two video game prototypes using the Unity Game Engine to educate youth on environmental sustainability, incorporating interactive gameplay to promote community activism.",
        "Led the design and development of core game systems and new features, ensuring alignment with educational objectives.",
        "Facilitated regular SCRUM meetings to track progress, address blockers, and maintain Agile workflows, leveraging Jira for task management and sprint planning.",
      ],
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex  justify-center  items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="glass justify-center items-center rounded-xl p-8 border-primary/10 border hover:-translate-y-1 transition-all">
          <div className="justify-center items-center max-w-3xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <img
                src="https://avatars.githubusercontent.com/u/113292983?v=4"
                alt="HershR"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <p className="text-primary text-center md:text-left ml-4 max-w-xl mx-auto">
                Junior Software Developer with experience in full-stack, mobile
                app, and game development. Passionate about creating
                applications that address real-world problems and contributing
                to innovative software engineering projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((tool) => (
                  <ToolChip key={tool} tool={tool} />
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendTools.map((tool) => (
                  <ToolChip key={tool} tool={tool} />
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendTools.map((tool) => (
                  <ToolChip key={tool} tool={tool} />
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4">Game Dev</h3>
              <div className="flex flex-wrap gap-2">
                {gameTools.map((tool) => (
                  <ToolChip key={tool} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-primary/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc text-primary space-y-2 pl-4">
              <li>
                <strong>B.S. in Computer Science</strong> - University of
                California Santa Cruz (2020-2024)
              </li>
              <li>
                <strong>GPA:</strong> 3.78
              </li>
              <li>
                Relevent Coursework: Data Structures, Applied Machine Learning,
                Natural Language Processing, Video Game AI
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-primary/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Exerience</h3>
            <div className="space-y-4 text-primary">
              {workExperience.map((x) => (
                <WorkExperience key={x.company} {...x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
