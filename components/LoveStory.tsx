"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const storyScenes = [
  {
    number: "01",
    title: "The First Glance",
    image: "/images/story-01-city.jpg",
    eyebrow: "Where the lights felt warmer",
    text: "Some moments arrive quietly. A look, a smile, a feeling we could not fully name yet.",
  },
  {
    number: "02",
    title: "Across New Skies",
    image: "/images/story-02-nature.jpg",
    eyebrow: "A journey became home",
    text: "Through little trips, quiet days, laughter, and distance, love slowly became familiar.",
  },
  {
    number: "03",
    title: "The Promise",
    image: "/images/story-03-home.jpg",
    eyebrow: "The beginning of forever",
    text: "And somewhere in the ordinary, we found the most extraordinary promise.",
  },
];

export default function LoveStory() {
  return (
    <section
      id="story"
      className="relative scroll-mt-28 overflow-hidden px-6 pb-20 pt-28 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,194,194,0.10),transparent_34rem)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(245,212,143,0.10),transparent_34rem)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#F5D48F]">
            Our Story
          </p>

          <h2 className="font-display text-4xl leading-tight text-[#F9FAFB] md:text-6xl">
            A path written in three frames.
          </h2>

          <p className="font-romantic mt-6 text-2xl leading-relaxed text-[#CBD5E1]">
            Follow the light from where it began, through the journeys that
            shaped us, to the promise we now carry forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute left-10 right-10 top-8 hidden h-px bg-gradient-to-r from-transparent via-[#F5D48F]/45 to-transparent lg:block" />

          <div className="flex snap-x gap-5 overflow-x-auto pb-5 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {storyScenes.map((scene, index) => (
              <div
                key={scene.number}
                className="relative min-w-[84vw] snap-center md:min-w-[58vw] lg:min-w-0"
              >
                <div className="mb-5 flex items-center justify-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#F5D48F]/35 bg-[#0F172A] shadow-[0_0_40px_rgba(245,212,143,0.16)]">
                    <span className="text-sm tracking-[0.25em] text-[#F5D48F]">
                      {scene.number}
                    </span>
                  </div>

                  {index < storyScenes.length - 1 && (
                    <ArrowRight className="ml-4 hidden h-5 w-5 text-[#F5D48F]/60 lg:block" />
                  )}
                </div>

                <div className="glass-card group overflow-hidden rounded-[2rem] p-3">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src={scene.image}
                      alt={scene.title}
                      className="h-[330px] w-full object-cover transition duration-[1600ms] group-hover:scale-105 md:h-[390px] lg:h-[360px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="mb-3 flex items-center gap-2 text-[#F5D48F]">
                        <Sparkles className="h-4 w-4" />
                        <p className="text-[10px] uppercase tracking-[0.24em]">
                          {scene.eyebrow}
                        </p>
                      </div>

                      <h3 className="font-display text-3xl leading-tight text-[#F9FAFB] md:text-4xl">
                        {scene.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-romantic px-3 py-5 text-xl leading-relaxed text-[#CBD5E1] md:text-2xl">
                    {scene.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-center lg:hidden">
            <div className="h-px w-10 bg-[#F5D48F]/40" />
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5D48F]/80">
              Swipe through our story
            </p>
            <div className="h-px w-10 bg-[#F5D48F]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}