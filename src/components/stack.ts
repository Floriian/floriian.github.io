export type Technologies =
  | 'NodeJS'
  | 'NestJS'
  | 'React'
  | 'TailwindCSS'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'Express'
  | 'Typescript';

export type Stack = {
  title: Technologies;
  show: boolean;
};

export const stacks: Stack[] = [
  {
    title: 'NodeJS',
    show: true,
  },
  {
    title: 'NestJS',
    show: true,
  },
  {
    title: 'React',
    show: true,
  },
  {
    title: 'TailwindCSS',
    show: true,
  },
  {
    title: 'PostgreSQL',
    show: false,
  },
  {
    title: 'MongoDB',
    show: false,
  },
  {
    title: 'Express',
    show: false,
  },
  {
    title: 'Typescript',
    show: true,
  },
];
