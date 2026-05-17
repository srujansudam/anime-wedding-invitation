"use client";

const navItems = [
  { label: "Home", shortLabel: "Home", href: "#home" },
  { label: "Story", shortLabel: "Story", href: "#story" },
  { label: "Details", shortLabel: "Details", href: "#details" },
  { label: "Blessings", shortLabel: "End", href: "#blessings" },
];

export default function FloatingNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:bottom-auto md:top-5 md:w-auto md:max-w-none">
      <div className="rounded-full border border-[#F5D48F]/20 bg-[#0F172A]/65 px-2 py-2 shadow-2xl backdrop-blur-xl md:px-4">
        <div className="flex items-center justify-between gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="flex-1 rounded-full px-3 py-2 text-center text-[10px] uppercase tracking-[0.16em] text-[#CBD5E1] transition hover:bg-[#F5D48F]/15 hover:text-[#F5D48F] md:flex-none md:px-4 md:text-[11px] md:tracking-[0.22em]"
            >
              <span aria-hidden="true" className="md:hidden">
                {item.shortLabel}
            </span>
            <span aria-hidden="true" className="hidden md:inline">
                {item.label}
            </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}