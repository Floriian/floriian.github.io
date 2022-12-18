import React from "react";
import { TProject, projectsarray } from "./projectsList";
export default function Projects() {
  return (
    <div className="font-sourceCode">
      <p className="text-3xl">Projects:</p>
      <section>
        {projectsarray.map((project: TProject) => (
          <article key={project.name} className="m-2">
            <a
              className="text-base font-bold hover:underline hover:text-cyan-900 transition-all duration-100"
              href={project.url}
              target="_blank"
            >
              {project.name} - {project.description}
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
