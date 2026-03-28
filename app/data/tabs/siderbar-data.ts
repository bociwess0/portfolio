import { HeaderTab, Job, Project, Social } from "@/app/types";
import { aboutMeText } from "../textual/plain-text";

export const socialLinks: Social[] = [
  { link: "https://github.com/bociwess0", name: "github" },
  {
    link: "https://www.linkedin.com/in/bogdan-djordjevic-b738931ba/",
    name: "linkedin",
  },
  { link: "mailto:bogdandjordjevic2000@gmail.com", name: "mail" },
  { link: "/Bogdan-Djordjevic-CV.pdf", name: "resume" },
];

export const allJobs: Job[] = [
  {
    company: "NBSOFT",
    position: "Frontend Developer",
    duration: "2021 — pressent",
    technologies: [
      "React.js",
      "CSS",
      "Javascript",
      "JQuery",
      "PHP",
      "SQL",
      "PostgreSQL",
      "REST API",
      "Google Analytics",
    ],
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

export const allProjects: Project[] = [
  {
    title: "Car Auction Platform",
    description: `Delivered scalable Car Auction Platform using Next.js, .NET Framework, RabbitMQ, and dual-database architecture (Postgres &
                        Mongo) for seamless auction listing and real-time bid synchronization across services.`,
    image: "/CarAuctionPlatform.jpeg",
    link: "https://github.com/bociwess0/CarAuctionPlatform",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      ".NET",
      "C#",
      "Docker",
      "Postgres",
      "NextAuth",
      "Microservices",
      "App Router",
      "ShadCN UI",
    ],
  },
  {
    title: "Clothing Store",
    description: `Building a scalable full-stack e-commerce application with Next.js, TypeScript, Prisma, and PostgreSQL, including authentication, payments (Stripe/PayPal), and admin dashboard features. (In progress...)`,
    image: "/ClothingStore.jpeg",
    link: "https://clothing-store-sable-tau.vercel.app/",
    technologies: [
      "Next.js v15",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Jest",
      "React Hook Form",
      "Zod",
      "ES Lint",
      "ShadCN UI",
    ],
  },
  {
    title: "ETech Web Shop",
    description: `Built robust ETech Web Shop e-commerce platform for gaming equipment using React, TypeScript, and .NET Framework,
                supporting end-to-end user interaction including cart, login, and product browsing.`,
    image: "/ETechWebShop.jpeg",
    link: "https://github.com/bociwess0/ETechWebShop",
    technologies: [
      "React.js",
      "TypeScript",
      ".NET",
      "ASP.NET",
      "C#",
      "Entity Framework",
      "MaterialUI",
    ],
  },
  {
    title: "Mobile Store App",
    description: `Developed a dynamic Mobile Store App in React Native, integrating login authentication, database connectivity, and in-app mail
        verification for enhanced mobile shopping experience.`,
    image: "/MobileStoreApp.jpeg",
    link: "https://github.com/bociwess0/MobileStoreApp",
    technologies: ["React Native", "Javascript", "Expo CLI"],
  },
];

export const HeaderTabs: HeaderTab[] = [
  { name: "About", href: "#about", type: "about", description: aboutMeText },
  {
    name: "Experience",
    type: "experience",
    href: "#experience",
    jobs: allJobs,
  },
  {
    name: "Projects",
    type: "projects",
    href: "#projects",
    projects: allProjects,
  },
];
