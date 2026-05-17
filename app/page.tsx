"use client";

import FloatingPetals from "@/components/FloatingPetals";
import LoveStory from "@/components/LoveStory";
import WeddingDetails from "@/components/WeddingDetails";
import Ending from "@/components/Ending";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F9FAFB]">
      <FloatingPetals />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
        <img
          src="/images/hero-couple.jpg"
          alt="Wedding hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/45 to-[#020617]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,212,143,0.20),transparent_38rem)]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#F5D48F]">
            Wedding Invitation
          </p>

          <h1 className="font-display text-6xl leading-tight text-[#F9FAFB] md:text-8xl">
            Srujan
            <span className="block text-[#F5D48F]">&</span>
            Lakshmi Priyanka
          </h1>

          <p className="font-romantic mt-8 text-2xl leading-relaxed text-[#CBD5E1] md:text-3xl">
            Every story begins somewhere. Ours begins here.
          </p>

          <div className="mt-10">
            <a
              href="#story"
              className="inline-flex rounded-full border border-[#F5D48F]/40 bg-[#111827]/50 px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#F5D48F] backdrop-blur-md transition hover:bg-[#F5D48F] hover:text-[#0F172A]"
            >
              Enter Our Story
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