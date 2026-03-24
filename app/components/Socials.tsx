import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socialLinks } from "../data/tabs/siderbar-data";
import { Social } from "../types";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: SiGmail,
};

export default function Socials() {
  return (
    <div className="flex gap-5 text-slate-400 text-xl">
        {socialLinks.map((socialLink: Social, index) => {
            const Icon = iconMap[socialLink.name];

            return (
          <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 hover:-translate-y-1 transition"
          >
            <Icon />
          </a>)
        })}
    </div>
  );
}
