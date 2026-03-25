export interface HeaderTab {
  name: string,
  href: string,
  description?: string
}

export type SocialName = "github" | "linkedin" | "mail";

export interface Social {
  link: string,
  name: SocialName
}
