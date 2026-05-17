"use client";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Blessings", href: "#blessings" },
];

export default function FloatingNav() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="rounded-full border border-[#F5D48F]/20 bg-[#0F172A]/50 px-4 py-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#CBD5E1] transition hover:bg-[#F5D48F]/15 hover:text-[#F5D48F]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}