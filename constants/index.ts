import { ProjectCardProps } from "@/types";

export const PROJECT_DATA: ProjectCardProps[] = [
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
      description: "A comprehensive job management website offering users the ability to track their job history."
    },
    {
      imageURL: "/images/jobify.png",
      title: "Another Project",
      badges: [
        {
          name: "TypeScript",
          color: "#3b82f6",
        },
        {
          name: "Next.js",
          color: "#6b7280",
        },
      ],
      description: "Description of another project."
    },
  ];