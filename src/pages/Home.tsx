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
      <p className="m-2 text-center font-jetbrains tracking-widest">
        Technologies
      </p>
      <div className="m-2 justify-center text-center lg:flex">
        {stacks
          .filter((stack) => stack.show)
          .map((stack) => (
            <TechnologyCard
              key={stack.title}
              title={stack.title}
            />
          ))}
      </div>
      <div className="m-2 p-5">
        <p className="text-center font-jetbrains text-2xl uppercase tracking-widest">
          About Me
        </p>
        <AboutMe />
        <p className="text-center font-jetbrains text-2xl uppercase tracking-widest">
          Projects
        </p>
        <div className="flex w-full flex-col items-center justify-center self-center lg:flex-row">
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
        <RoadMap />
        <Contacts />
      </div>
    </>
  );
}
