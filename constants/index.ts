import { ProjectCardProps } from "@/types";

export const PROJECT_DATA: ProjectCardProps[] = [
  {
    imageURL: "/images/financial-tracker.png",
    title: "Financial Tracker",
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
