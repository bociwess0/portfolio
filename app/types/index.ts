export interface HeaderTab {
  name: string,
  href: string,
  type: "about" | "experience" | "projects",
  description?: string,
  jobs?: Job[],
  projects?: Project[],
}

export type SocialName = "github" | "linkedin" | "mail"  | "resume";

export interface Social {
  link: string,
  name: SocialName
}

export interface Job {
  duration: string,
  position: string,
  company: string,
  description: string,
  technologies: string[],
}

export interface Project {
  image: string,
  title: string,
  link: string,
  description: string,
  technologies: string[],
}
