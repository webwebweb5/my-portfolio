export interface ProjectCardProps {
  imageURL: string;
  title: string;
  badges: BadgeProps[];
  description: string;
}

export interface BadgeProps {
  name: string;
  color: string;
}
