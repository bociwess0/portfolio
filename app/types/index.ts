export interface HeaderTab {
  name: string,
  href: string,
  type: "about" | "experience" | "projects",
  description?: string,
  jobs?: Job[],
}

export type SocialName = "github" | "linkedin" | "mail";

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
