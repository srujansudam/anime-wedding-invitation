"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Ending() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:justify-end md:px-16 lg:px-24">
      <img
        src="/images/ending-wide.jpg"
        alt="Final cinematic ending"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/15 via-[#0F172A]/20 to-[#020617]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-transparent to-[#020617]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,212,143,0.16),transparent_30rem)]" />

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.25, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl rounded-[2rem] border border-[#F5D48F]/25 bg-[#0F172A]/55 p-8 text-center shadow-2xl backdrop-blur-md md:p-10"
      >
        <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#F5D48F]/30 bg-[#111827]/50">
          <Heart className="h-5 w-5 text-[#F4C2C2]" />
        </div>

        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#F5D48F]">
          Together With Our Families
        </p>

        <h2 className="font-display text-4xl leading-tight text-[#F9FAFB] md:text-5xl">
          And so, our next chapter begins.
        </h2>

        <p className="font-romantic mt-7 text-2xl leading-relaxed text-[#CBD5E1]">
          We would be honoured to have your presence and blessings as we begin
          this beautiful journey together.
        </p>

        <div className="mt-9 h-px w-full bg-gradient-to-r from-transparent via-[#F5D48F]/50 to-transparent" />

        <p className="font-display mt-9 text-4xl text-[#F5D48F]">
          Srujan & Lakshmi Priyanka
        </p>

        <p className="mt-4 text-sm uppercase tracking-[0.26em] text-[#CBD5E1]">
          03 July 2026 · Warangal
        </p>
      </motion.div>
    </section>
  );
}