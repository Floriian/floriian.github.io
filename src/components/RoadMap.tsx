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
          <li
            className="mb-10 ml-4"
            key={rmap.description}
          >
            <motion.div
              className="-left-2 mt-2 h-6 w-6 text-xl"
              initial={{ position: 'unset', opacity: 0 }}
              ref={ref}
              animate={
                inView
                  ? { position: 'absolute', x: 0, opacity: 1 }
                  : { x: 2, position: 'unset' }
              }
              transition={{
                duration: 0.5,
              }}
            >
              {rmap.type === 'SCHOOL' ? <FcGraduationCap /> : <MdWork />}
            </motion.div>
            <motion.div
              ref={ref}
              animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
            >
              <time className="text-lg text-zinc-500">
                {rmap.startDate} - {rmap.endDate}{' '}
              </time>
              <h3 className="text-xl">{rmap.name}</h3>
              <p className="text-zinc-500">{rmap.description}</p>
            </motion.div>
          </li>
        ))}
    </ol>
  );
}
