import { Stack, stacks, Technologies } from './stack';

export type TProject = {
  name: string;
  url: string;
  description: string;
  technology: Technologies[];
};

export interface IProjects extends Array<TProject> {}

export const projects: IProjects = [
  {
    name: 'STEN',
    url: 'https://github.com/floriian/sten',
    description: 'A simple REST API for teachers for teach how REST API works.',
    technology: ['NestJS', 'Typescript', 'PostgreSQL'],
  },
  {
    name: 'URL Shortener',
    url: 'https://github.com/floriian/urlshortener',
    description:
      'A basic URL shortener, using Mongoose & Express & Typescript.',
    technology: ['MongoDB', 'Express', 'Typescript'],
  },
];
