import { ProjectCardProps } from "@/types";

export const PROJECT_DATA: ProjectCardProps[] = [
  {
    imageURL: "/images/societify/societify-main.png",
    link: "/dashboard/societify",
    title: "Societify",
    badges: [
      {
        name: "Vite",
        color: "#9333ea",
      },
      {
        name: "ExpressJS",
        color: "#22c55e",
      },
    ],
    description:
      "Societify is a social media app with features like JWT authentication, post creation, commenting, image uploads, notifications, and more!",
    isTop: true,
  },
  {
    imageURL: "/images/ledgerify/ledgerify.png",
    link: "/dashboard/ledgerify",
    title: "Ledgerify",
    badges: [
      {
        name: "Vite",
        color: "#9333ea",
      },
      {
        name: "TypeScript",
        color: "#2563eb",
      },
      {
        name: "ExpressJS",
        color: "#22c55e",
      },
    ],
    description:
      "Track your income and expenses effortlessly, manage budgets, and achieve financial goals with our simple and intuitive app.",
    isTop: true,
  },
  {
    imageURL: "/images/questify.png",
    link: "/dashboard/questify",
    title: "Questify",
    badges: [
      {
        name: "Senior Project",
        color: "#eab308",
      },
      {
        name: "NextJS",
        color: "#6b7280",
      },
      {
        name: "Spring Boot",
        color: "#16a34a",
      },
    ],
    description:
      "A blended learning platform for teachers to manage lab exercises & quizzes, and for students to practice coding in multiple languages.",
  },
  {
    imageURL: "/images/jobify.png",
    link: "/dashboard/jobify",
    title: "Jobify",
    badges: [
      {
        name: "ReactJS",
        color: "#3b82f6",
      },
      {
        name: "NodeJS",
        color: "#22c55e",
      },
    ],
    description:
      "A comprehensive job management website offering users the ability to track their job history.",
  },
];
