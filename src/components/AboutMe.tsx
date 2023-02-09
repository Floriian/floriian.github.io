import React from 'react';
import { Avatar } from './Avatar';
import { motion } from 'framer-motion';
export function AboutMe() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2">
      <div className="flex items-center justify-center">
        {/* THIS WOULD BE A PICTURE */}
        <img
          className="bg-transparent"
          // initial={{
          //   boxShadow: '2px 1px 146px 14px rgba(87, 13, 13, 0.72)',
          // }}
          // animate={{
          //   boxShadow: '6px 2px 150px 14px rgba(87,13,13, 0.72)',
          // }}
          // transition={{
          //   duration: Infinity,
          // }}
          src="/bitmoji.png"
          alt=""
        />
      </div>
      <div>
        My name is Flórián Lovasi. I'm {currentDate - 2002} years old
        self-taught developer. I got interested in programming when I was 12-13
        years old. I started with Pawn for scripting SAMP. After half a year, I
        got interested in web development. I created my first website for a
        SA:MP server, with PHP and MySQL. (Looking back, it's a very bad
        code...). In the time of COVID-19, and online classes, I started
        learning React and the NodeJS ecosystem. I created some websites for
        learning, and understandig what is React. After I understood React, I
        found Typescript. I love it. I can't live without Typescript. I found
        how can I create backend in NodeJS with Express.JS, and I don't like it,
        because it has no rules, what folder-structure and default it's not
        typesafe. Then I was discovered Nest.JS... It was a redemption. In 2022
        I created an API for my school with NestJS and Prisma. It has no
        authentication, because it was a requirement from my teacher.
      </div>
    </div>
  );
}
