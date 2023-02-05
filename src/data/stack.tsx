import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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
  icon: JSX.Element;
};

export const stacks: Stack[] = [
  {
    title: 'NodeJS',
    show: true,
    icon: <SiNodedotjs />,
  },
  {
    title: 'NestJS',
    show: true,
    icon: <SiNestjs />,
  },
  {
    title: 'React',
    show: true,
    icon: <SiReact />,
  },
  {
    title: 'TailwindCSS',
    show: true,
    icon: <SiTailwindcss />,
  },
  {
    title: 'PostgreSQL',
    show: false,
    icon: <SiPostgresql />,
  },
  {
    title: 'MongoDB',
    show: false,
    icon: <SiMongodb />,
  },
  {
    title: 'Express',
    show: false,
    icon: <SiExpress />,
  },
  {
    title: 'Typescript',
    show: true,
    icon: <SiTypescript />,
  },
];
