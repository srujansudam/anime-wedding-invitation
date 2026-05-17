export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-28 pt-14 text-center md:pb-12">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-[#F5D48F]/20 bg-[#F9FAFB] shadow-[0_0_45px_rgba(245,212,143,0.18)] md:h-28 md:w-28">
          <img
            src="/images/chibi-couple.png"
            alt="Srujan and Lakshmi Priyanka chibi illustration"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="font-romantic text-2xl leading-relaxed text-[#CBD5E1] md:text-3xl">
          See you in Warangal.
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[#F5D48F]/80">
          Srujan & Lakshmi Priyanka
        </p>
      </div>
    </footer>
  );
}