"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const weddingDate = new Date("2026-07-03T20:19:00+05:30").getTime();

const details = [
  {
    icon: CalendarDays,
    label: "Wedding Date",
    value: "Friday, 03 July 2026",
  },
  {
    icon: Clock,
    label: "Muhurtham",
    value: "8:19 PM",
  },
  {
    icon: Sparkles,
    label: "Dinner",
    value: "From 7:00 PM onwards",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Kodam Convention, Hunter Road, Warangal",
  },
];

function getTimeLeft() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function WeddingDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="details"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,212,143,0.10),transparent_34rem)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#F5D48F]">
            Wedding Details
          </p>

          <h2 className="font-display text-4xl leading-tight text-[#F9FAFB] md:text-6xl">
            With blessings, love, and forever ahead.
          </h2>

          <p className="font-romantic mt-6 text-2xl leading-relaxed text-[#CBD5E1]">
            Together with our families, we invite you to celebrate the wedding of
            Lakshmi Priyanka and Srujan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="glass-card gold-glow rounded-[2rem] p-6 md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#F5D48F]/15 bg-[#0F172A]/55 p-6 text-center"
              >
                <p className="font-display text-5xl text-[#F5D48F] md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#CBD5E1]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-3xl border border-[#F5D48F]/15 bg-[#111827]/55 p-6"
                >
                  <Icon className="mb-5 h-7 w-7 text-[#F5D48F]" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F5D48F]">
                    {item.label}
                  </p>
                  <p className="font-romantic mt-3 text-2xl leading-relaxed text-[#F9FAFB]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#F4C2C2]/15 bg-[#0F172A]/50 p-6 text-center md:flex-row md:text-left">
            <div>
              <p className="font-display text-3xl text-[#F9FAFB]">
                Indian Traditional
              </p>
              <p className="font-romantic mt-2 text-2xl text-[#CBD5E1]">
                No formal dress code. Your presence and blessings mean the most.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a33456a4b397ecb:0x3b6e7830102c7e4?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 rounded-full border border-[#F5D48F]/40 bg-[#F5D48F] px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#0F172A] transition hover:bg-[#F4C2C2]"
            >
              Open Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}