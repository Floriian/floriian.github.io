import React from 'react';
import {
  AboutMe,
  Avatar,
  Card,
  Contacts,
  RoadMap,
  TechnologyCard,
} from '../components';
import { projects, stacks } from '../data';
export default function Home() {
  return (
    <>
      <Avatar />
      <div className="m-2 p-5">
        <p className="text-center font-jetbrains text-2xl uppercase tracking-widest">
          About Me
        </p>
        <AboutMe />
        <h1 className="mt-5 text-center font-jetbrains text-2xl uppercase tracking-widest">
          Technologies
        </h1>
        <div className="m-2 flex justify-center text-center">
          {stacks
            .filter((stack) => stack.show)
            .map((stack) => (
              <TechnologyCard
                key={stack.title}
                icon={stack.icon}
                title={stack.title}
                onlyIcon={true}
              />
            ))}
        </div>
        <h1 className="mt-5 text-center font-jetbrains text-2xl uppercase tracking-widest">
          Projects
        </h1>
        <div className="flex w-full justify-center lg:flex-row">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.url}
                title={project.name}
                body={project.description}
                repoUrl={project.url}
                technology={project.technology}
              />
            ))}
          </div>
        </div>
        <h1 className="mt-5 text-center font-jetbrains text-2xl uppercase tracking-widest">
          Roadmap
        </h1>
        <div className="m-5 flex w-full justify-center">
          <RoadMap />
        </div>
        <Contacts />
      </div>
    </>
  );
}
