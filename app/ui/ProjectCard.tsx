import React from "react";
import { Project } from "../types";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      className="group flex gap-4 rounded-md p-4 
    transition-all duration-300 ease-in-out
    
    hover:bg-slate-800/40 
    hover:shadow-lg 
    hover:-translate-y-1
    
    border border-transparent
    hover:border-slate-700/50"
      target="_blank"
    >
      <div className="text-slate-400 font-medium text-xs leading-relaxed uppercase flex-[0_0_25%] mt-1">
        <Image
          src={project.image}
          width={150}
          height={150}
          alt={project.title}
          priority
          className="rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-3 flex-[0_0_75%]">
        <div className="text-white font-semibold text-lg flex gap-2 items-center">
          <span>{project.title}</span>
          <MdOutlineArrowOutward />
        </div>
        <div className="text-slate-400 leading-relaxed">
          {project.description}
        </div>
        <div className="flex gap-2 flex-wrap">
          {project.technologies &&
            project.technologies.map((tech: string, index) => (
              <div
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                key={index}
              >
                {tech}
              </div>
            ))}
        </div>
      </div>
    </a>
  );
}
