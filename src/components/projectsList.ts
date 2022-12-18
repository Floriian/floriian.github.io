export type TProject = {
  name: string;
  url: string;
  description: string;
};

export interface IProjects extends Array<TProject> {}

export const projectsarray: IProjects = [
  {
    name: "STEN",
    url: "https://floriian.github.io/sten",
    description: "A simple REST API for learning purposes.",
  },
];
