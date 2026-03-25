import { HeaderTab, Social } from "@/app/types";
import { aboutMeText } from "../textual/plain-text";

export const HeaderTabs: HeaderTab[] = [
    { name: "About", href: "#about", description: aboutMeText},
    { name: "Experience", href: "#experience"},
    { name: "Projects", href: "#projects"},
]

export const socialLinks: Social[] = [
    { link: "https://github.com/bociwess0", name: "github"},
    { link: "https://www.linkedin.com/in/bogdan-djordjevic-b738931ba/", name: "linkedin"},
    { link: "mailto:bogdandjordjevic2000@gmail.com", name: "mail"},
]