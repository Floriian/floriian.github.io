import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Technologies } from '../data';
import { TechnologyCard } from './TechnologyCard';

type Props = {
  title: string;
  body: string;
  repoUrl: string;
  technology: Technologies[];
};

export function Card({ technology, body, repoUrl, title }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      className="m-5 h-64 w-64 cursor-default rounded-md border-2 border-zinc-600"
      ref={ref}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        scale: 1.2,
        backgroundColor: 'rgb(24 24 27)',
        transition: {
          duration: 0.5,
        },
      }}
    >
      <p className="text-center font-sourceCode text-xl">{title}</p>
      <div className="p-2">
        <div className="grid grid-cols-2 text-center">
          {technology.map((t) => (
            <TechnologyCard
              onlyIcon={false}
              title={t}
              key={t}
            />
          ))}
        </div>
        <div>
          <p className="text-center">{body}</p>
        </div>
        <a
          href={repoUrl}
          className="text-center text-xl transition-colors duration-150 hover:text-cyan-500"
        >
          Go to repository
        </a>
      </div>
    </motion.div>
  );
}
