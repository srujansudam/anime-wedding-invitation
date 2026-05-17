"use client";

import { motion } from "framer-motion";

const petals = [
  { left: "6%", delay: 0, duration: 18, size: 8, drift: 80 },
  { left: "14%", delay: 3, duration: 22, size: 10, drift: -60 },
  { left: "26%", delay: 6, duration: 20, size: 7, drift: 70 },
  { left: "38%", delay: 2, duration: 24, size: 9, drift: -90 },
  { left: "49%", delay: 8, duration: 21, size: 6, drift: 60 },
  { left: "61%", delay: 4, duration: 19, size: 11, drift: -70 },
  { left: "73%", delay: 7, duration: 23, size: 8, drift: 80 },
  { left: "84%", delay: 1, duration: 20, size: 10, drift: -50 },
  { left: "94%", delay: 5, duration: 25, size: 7, drift: 65 },
];

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((petal, index) => (
        <motion.span
          key={index}
          className="absolute top-[-10%] block rounded-full bg-[#F4C2C2]/70 blur-[0.2px]"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.55}px`,
            borderRadius: "70% 30% 70% 30%",
            boxShadow: "0 0 18px rgba(244, 194, 194, 0.35)",
          }}
          animate={{
            y: ["0vh", "115vh"],
            x: [0, petal.drift, petal.drift / 2],
            rotate: [0, 180, 360],
            opacity: [0, 0.65, 0.35, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}