import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { useHover } from '../hooks/useHover';
import { IconButton } from './IconButton';

export function Contacts() {
  // const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <>
      <div className="flex w-full justify-center text-2xl">
        <IconButton
          icon={<FiGithub />}
          link="https://github.com/Floriian/"
        />
        <IconButton
          icon={<AiOutlineMail />}
          link="mailto:lovasiflorian@outlook.com"
        />
      </div>
    </>
  );
}
