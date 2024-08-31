interface DevBadgeProps {
  name: string;
  color?: string;
}

export function DevBadge({ name, color = "text-gray-500" }: DevBadgeProps) {
  return (
    <span className="flex items-center justify-center bg-[#282828] text-neutral-300 rounded-md p-2 text-xs">
      <span className="text-sm font-medium" style={{ color: color }}>#</span>
      {name}
    </span>
  );
}
