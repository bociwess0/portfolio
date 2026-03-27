import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socialLinks } from "../data/tabs/siderbar-data";
import { Social } from "../types";
import { GrDocumentText } from "react-icons/gr";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: SiGmail,
  resume: GrDocumentText,
};

export default function Socials() {
  return (
    <div className="flex gap-5 text-slate-400 text-xl mt-10 lg:mt-auto">
        {socialLinks.map((socialLink: Social, index) => {
            const Icon = iconMap[socialLink.name];

            return (
          <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <Icon />
          </a>)
        })}
    </div>
  );
}
