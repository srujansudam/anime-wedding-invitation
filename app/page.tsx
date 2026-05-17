"use client";

import FloatingPetals from "@/components/FloatingPetals";
import FloatingNav from "@/components/FloatingNav";
import LoveStory from "@/components/LoveStory";
import WeddingDetails from "@/components/WeddingDetails";
import Ending from "@/components/Ending";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F9FAFB]">
      <FloatingPetals />
      <FloatingNav />

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
      >
        <img
          src="/images/hero-couple.jpg"
          alt="Srujan and Lakshmi Priyanka wedding invitation"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/75 via-[#0F172A]/42 to-[#020617]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,212,143,0.20),transparent_38rem)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#F5D48F]">
            Wedding Invitation
          </p>

          <h1 className="font-display text-5xl leading-tight text-[#F9FAFB] md:text-8xl">
            Srujan
            <span className="block text-[#F5D48F]">&</span>
            Lakshmi Priyanka
          </h1>

          <p className="font-romantic mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-[#CBD5E1] md:text-3xl">
            With love, blessings, and the promise of forever, we invite you to
            celebrate the beginning of our new chapter.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm uppercase tracking-[0.28em] text-[#F5D48F] md:flex-row">
            <span>03 July 2026</span>
            <span className="hidden text-[#F4C2C2] md:inline">✦</span>
            <span>Warangal</span>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#story"
              className="inline-flex rounded-full border border-[#F5D48F]/40 bg-[#111827]/50 px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#F5D48F] backdrop-blur-md transition hover:bg-[#F5D48F] hover:text-[#0F172A]"
            >
              Enter Our Story
            </a>

            <a
              href="#details"
              className="inline-flex rounded-full border border-[#F4C2C2]/30 bg-[#0F172A]/35 px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#F9FAFB] backdrop-blur-md transition hover:bg-[#F4C2C2] hover:text-[#0F172A]"
            >
              Wedding Details
            </a>
          </div>
        </div>
      </section>

      <LoveStory />
      <WeddingDetails />
      <Ending />
    </main>
  );
}