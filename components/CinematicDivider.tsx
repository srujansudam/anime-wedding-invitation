type CinematicDividerProps = {
  label: string;
};

export default function CinematicDivider({ label }: CinematicDividerProps) {
  return (
    <div className="relative overflow-hidden px-6 py-10">
      <div className="mx-auto flex max-w-5xl items-center gap-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#F5D48F]/35 to-[#F5D48F]/10" />
        <p className="text-center text-[10px] uppercase tracking-[0.45em] text-[#F5D48F]/80">
          {label}
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#F5D48F]/35 to-[#F5D48F]/10" />
      </div>
    </div>
  );
}