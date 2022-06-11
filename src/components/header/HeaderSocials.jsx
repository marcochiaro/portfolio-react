import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrSoundcloud } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/marco-chiaro-ba151511b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/marcochiaro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://soundcloud.com/marcochiaro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrSoundcloud />
      </a>
    </div>
  );
};

export default HeaderSocials;
