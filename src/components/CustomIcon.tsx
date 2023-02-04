import React from 'react';

type Props = {
  icon: JSX.Element;
  link: string;
};

export function CustomIcon({ icon, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="m-2 transition-all duration-100 hover:cursor-pointer hover:text-blue-900"
    >
      {icon}
    </a>
  );
}
