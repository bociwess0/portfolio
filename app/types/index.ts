export interface HeaderTab {
  name: string
}

export type SocialName = "github" | "linkedin" | "mail";

export interface Social {
  link: string,
  name: SocialName
}
