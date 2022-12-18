import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import CustomIcon from "./CustomIcon";
import { useHover } from "../hooks/useHover";

function Contacts() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <div className="mb-52 text-4xl w-full flex justify-between">
      <p className="font-sourceCode font-bold">
        {isHovered ? "Floriian#8397" : "Floriian."}
      </p>
      <div className="flex">
        <CustomIcon icon={<FiGithub />} link="https://github.com/Floriian/" />
        <CustomIcon
          icon={<AiOutlineMail />}
          link="mailto:lovasifloriian@outlook.hu"
        />
        <div
          ref={hoverRef}
          className="hover:cursor-pointer hover:text-blue-900 transition-all duration-100 m-2"
        >
          <FaDiscord />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
