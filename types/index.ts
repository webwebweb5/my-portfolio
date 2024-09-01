export interface ProjectCardProps {
  imageURL: string;
  title: string;
  badges: BadgeProps[];
  description: string;
  isTop?: boolean
}

export interface BadgeProps {
  name: string;
  color: string;
}
