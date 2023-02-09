import React from 'react';
import { FiGithub } from 'react-icons/fi';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { useHover } from '../hooks/useHover';
import { IconButton } from './IconButton';

export function Contacts() {
  // const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <>
      <h2 className="mt-2 text-center font-jetbrains text-2xl uppercase tracking-widest">
        Contacts
      </h2>
      <div className="flex justify-center text-4xl">
        <IconButton
          icon={<AiOutlineLinkedin />}
          link="https://www.linkedin.com/in/flórián-lovasi-200366251/"
        />
        <IconButton
          icon={<AiOutlineMail />}
          link="mailto:lovasiflorian@outlook.com"
        />
        <IconButton
          icon={<AiOutlineGithub />}
          link="https://github.com/Floriian/"
        />
        <IconButton
          icon={<AiOutlineFacebook />}
          link="https://www.facebook.com/profile.php?id=100013966211940"
        />
        <IconButton
          icon={<AiOutlineInstagram />}
          link="https://www.instagram.com/florianlovasi/"
        />
      </div>
    </>
  );
}
