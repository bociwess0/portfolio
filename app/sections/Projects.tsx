import React from "react";
import { HeaderTab, Project } from "../types";
import ProjectCard from "../ui/ProjectCard";

interface Props {
    section: HeaderTab
}

export default function Projects({section}: Props) {
  return (
    <section id={section.type} className="flex flex-col gap-15">
      {section.projects &&
        section.projects.map((project: Project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
    </section>
  );
}
