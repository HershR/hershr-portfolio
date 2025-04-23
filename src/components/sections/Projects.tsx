import React, { useEffect, useState } from "react";

interface ProjectsProps {
  username: string;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}
export function Projects({ username }: ProjectsProps) {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    )
      .then((res) => res.json())
      .then(setRepos)
      .catch(console.error);
  }, [username]);

  return (
    <section id="projects">
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white shadow rounded-2xl p-4">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {repo.description || "No description provided."}
            </p>
            <a
              href={repo.html_url}
              className="text-blue-600 mt-2 inline-block hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
