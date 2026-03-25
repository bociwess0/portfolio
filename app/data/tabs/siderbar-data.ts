import { HeaderTab, Job, Social } from "@/app/types";
import { aboutMeText } from "../textual/plain-text";


export const socialLinks: Social[] = [
  { link: "https://github.com/bociwess0", name: "github" },
  {
    link: "https://www.linkedin.com/in/bogdan-djordjevic-b738931ba/",
    name: "linkedin",
  },
  { link: "mailto:bogdandjordjevic2000@gmail.com", name: "mail" },
];

export const allJobs: Job[] = [
  {
    company: "NBSOFT",
    position: "Frontend Developer",
    duration: "2021 — pressent",
    technologies: ["React.js", "CSS", "Javascript", "JQuery", "PHP", "SQL", "PostgreSQL", "REST API", "Google Analytics"],
    description: `Develop scalable, user-centric websites by translating UI/UX designs into interactive and responsive front-end interfaces. Collaborate with
                cross-functional teams to integrate front-end logic with backend APIs. Participate in sprint planning, feature development, and bug
                resolution across various client-based projects. Maintain clean, efficient, and well-documented code following industry standards.
                `,
  },
  {
    company: "Kolezeee Solutions",
    position: "Frontend Intern",
    duration: "2020 — 2021",
    technologies: ["HTML", "CSS", "Javascript", "Wordpress"],
    description: `Assisted senior developers in coding, testing, and troubleshooting web applications during the initial training period. Maintained version
                    control using Git under supervision. Practiced converting design mockups into static HTML/CSS templates. Participated in code reviews
                    and debugging sessions to identify front-end inconsistencies.`,
  },
];

export const HeaderTabs: HeaderTab[] = [
  { name: "About", href: "#about", type: "about", description: aboutMeText },
  { name: "Experience", type: "experience", href: "#experience", jobs: allJobs },
  { name: "Projects", type: "projects", href: "#projects" },
];