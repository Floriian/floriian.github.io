import React from "react";

type Props = {
  icon: JSX.Element;
  link: string;
};

function CustomIcon({ icon, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="hover:cursor-pointer hover:text-blue-900 transition-all duration-100 m-2"
    >
      {icon}
    </a>
  );
}

export default CustomIcon;
