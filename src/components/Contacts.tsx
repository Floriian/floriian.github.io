import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { useHover } from '../hooks/useHover';
import { CustomIcon } from './CustomIcon';

export function Contacts() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <div className="mb-52 flex w-full justify-between text-4xl">
      <p className="font-sourceCode font-bold">
        {isHovered ? 'Floriian#8397' : 'Floriian.'}
      </p>
      <div className="flex">
        <CustomIcon
          icon={<FiGithub />}
          link="https://github.com/Floriian/"
        />
        <CustomIcon
          icon={<AiOutlineMail />}
          link="mailto:lovasifloriian@outlook.hu"
        />
        <div
          ref={hoverRef}
          className="m-2 transition-all duration-100 hover:cursor-pointer hover:text-blue-900"
        >
          <FaDiscord />
        </div>
      </div>
    </div>
  );
}
