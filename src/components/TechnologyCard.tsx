import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { Technologies } from '../data';

type Props = {
  title: Technologies;
  classname?: string;
};

export function TechnologyCard({ title, classname }: Props) {
  const technologyBg = classNames({
    'bg-red-500': title === 'NestJS',
    'bg-green-800': title === 'NodeJS',
    'bg-blue-900': title === 'React',
    'bg-blue-500': title === 'TailwindCSS',
    'bg-cyan-500': title === 'PostgreSQL',
    'bg-green-500': title === 'MongoDB',
    'bg-zinc-500': title === 'Express',
    'bg-cyan-900': title === 'Typescript',
  });

  return (
    <motion.div
      className={
        'm-1 rounded-full p-2 pl-4 pr-4 tracking-wider text-white ' +
        technologyBg
      }
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {title}
    </motion.div>
  );
}
