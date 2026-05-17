"use client";

import { motion } from "framer-motion";

const storyScenes = [
  {
    number: "01",
    title: "The First Glance",
    image: "/images/story-01-city.jpg",
    text: "Some moments arrive quietly, like city lights after rain. We did not know it then, but something beautiful had already begun.",
  },
  {
    number: "02",
    title: "Across New Skies",
    image: "/images/story-02-nature.jpg",
    text: "Through journeys, laughter, distance, and everyday memories, love became less of a moment and more of a home.",
  },
  {
    number: "03",
    title: "The Promise",
    image: "/images/story-03-home.jpg",
    text: "In the softest spaces of life, we found our forever. A promise not just for one day, but for every day after.",
  },
];

export default function LoveStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,194,194,0.10),transparent_36rem)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#F5D48F]">
            Our Story
          </p>

          <h2 className="font-display text-4xl leading-tight text-[#F9FAFB] md:text-6xl">
            Three scenes. One promise.
          </h2>

          <p className="font-romantic mt-6 text-2xl leading-relaxed text-[#CBD5E1]">
            A quiet journey told like frames from a film, filled with light,
            memory, and the beginning of forever.
          </p>
        </motion.div>

        <div className="space-y-24">
          {storyScenes.map((scene, index) => (
            <motion.div
              key={scene.number}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.15, ease: "easeOut" }}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#F5D48F]/20 bg-[#111827]/60 shadow-2xl">
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="h-[420px] w-full object-cover transition duration-[1800ms] group-hover:scale-105 md:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,212,143,0.16),transparent_28rem)] opacity-0 transition duration-700 group-hover:opacity-100" />
              </div>

              <div className="glass-card gold-glow rounded-[2rem] p-8 md:p-10">
                <p className="font-romantic mb-4 text-5xl text-[#F5D48F]">
                  {scene.number}
                </p>

                <h3 className="font-display text-4xl leading-tight text-[#F9FAFB] md:text-5xl">
                  {scene.title}
                </h3>

                <p className="font-romantic mt-6 text-2xl leading-relaxed text-[#CBD5E1]">
                  {scene.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}