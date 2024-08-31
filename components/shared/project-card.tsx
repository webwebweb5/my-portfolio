import Link from "next/link";
import { DevBadge } from "./dev-badge";
import { ProjectCardProps } from "@/types";

export function ProjectCard({
  imageURL,
  title,
  badges,
  description,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1C1C1C] rounded-lg text-neutral-400 hover:scale-[1.025] duration-500 transition-all">
      <div className="rounded-lg duration-200 transition-all ease-in">
        <Link href="#" className="w-full">
          <img
            className="rounded-t-lg h-64 w-full object-cover brightness-95"
            src={imageURL}
            alt=""
          />
        </Link>
        <div className="p-6">
          <Link href="#" className="w-fit">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-300">
              {title}
            </h5>
          </Link>

          <div className="w-full">
            <div className="flex flex-wrap gap-1.5 text-xs mb-2">
              {badges?.map((badge) => (
                <DevBadge key={badge.name} name={badge.name} color={badge.color} />
              ))}
            </div>
          </div>

          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
}
