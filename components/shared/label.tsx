interface LabelProps {
  name: String;
}

export function Label({ name }: LabelProps) {
  return (
    <p className="flex items-center justify-center bg-[#282828] text-neutral-300 rounded-md px-2 h-5 text-[11px]">
      {name}
    </p>
  );
}
