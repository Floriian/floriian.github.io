import React from 'react';

type Props = {
  icon: JSX.Element;
  link: string;
};

export function IconButton({ icon, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="m-2 transition-colors duration-150 hover:cursor-pointer hover:text-cyan-500"
    >
      {icon}
    </a>
  );
}
