import React from 'react';

export function AboutMe() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="m-10 rounded-md border-2 border-zinc-500 p-2">
      <p className="text-xl tracking-widest first-letter:font-jetbrains first-letter:text-2xl first-letter:uppercase">
        Hello!
      </p>
      <p>
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
      </p>
    </div>
  );
}
