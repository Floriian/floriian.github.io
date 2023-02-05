import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { Technologies } from '../data';
import { IconType } from 'react-icons';

type Props = {
  title?: Technologies;
  icon?: JSX.Element;
  onlyIcon: boolean;
};

export function TechnologyCard({ title, icon, onlyIcon }: Props) {
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
        'm-1 cursor-pointer rounded-full px-2 py-2 tracking-wider text-white ' +
        technologyBg
      }
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {onlyIcon ? (
        <div className={'text-4xl ' + technologyBg}>{icon}</div>
      ) : (
        <p className="text-center">{title}</p>
      )}
    </motion.div>
  );
}
