import React, { useRef } from 'react';
import { FcGraduationCap } from 'react-icons/fc';
import { MdWork } from 'react-icons/md';
import { roadmap } from '../data';
import { motion, useInView } from 'framer-motion';
export function RoadMap() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <ol className="relative border-l border-zinc-500">
      {roadmap
        .sort((a, b) => {
          return b.startDate - a.startDate;
        })
        .map((rmap) => (
          <motion.li
            ref={ref}
            className="mb-10 ml-4"
            key={rmap.description}
            animate={inView ? { x: 0, opacity: 1 } : { x: 1, opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="absolute -left-2 mt-2 h-6 w-6 text-xl">
              {rmap.type === 'SCHOOL' ? <FcGraduationCap /> : <MdWork />}
            </div>
            <time className="text-lg text-zinc-500">
              {rmap.startDate} - {rmap.endDate}{' '}
            </time>
            <h3 className="text-xl">{rmap.name}</h3>
            <p className="text-zinc-500">{rmap.description}</p>
          </motion.li>
        ))}
    </ol>
  );
}
