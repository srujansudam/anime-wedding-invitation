"use client";

import { motion } from "framer-motion";
import { CalendarDays, CalendarPlus, Clock, MapPin, Utensils } from "lucide-react";
import { useEffect, useState } from "react";

const weddingDate = new Date("2026-07-03T20:19:00+05:30").getTime();
const mapUrl =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a33456a4b397ecb:0x3b6e7830102c7e4?sa=X&ved=1t:8290&ictx=111";

const calendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Srujan%20%26%20Lakshmi%20Priyanka%20Wedding&dates=20260703T133000Z/20260703T170000Z&details=Wedding%20of%20Srujan%20and%20Lakshmi%20Priyanka.%20Dinner%20starts%20from%207%3A00%20PM%20and%20Muhurtham%20is%20at%208%3A19%20PM.&location=Kodam%20Convention%2C%20Hunter%20Road%2C%20Warangal";

const detailCards = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "03 July 2026",
  },
  {
    icon: Clock,
    label: "Muhurtham",
    value: "8:19 PM",
  },
  {
    icon: Utensils,
    label: "Dinner",
    value: "From 7 PM",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Kodam Convention, Warangal",
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
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="details"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 py-14 md:px-10 md:py-24 lg:px-20"
    >
      {/* Desktop cinematic background */}
      <img
        src="/images/ending-wide.jpg"
        alt="Wedding details background"
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />

      {/* Mobile background is only atmospheric, not the main image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#020617] md:hidden" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/82 via-[#0F172A]/68 to-[#020617]/92" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,212,143,0.16),transparent_34rem)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-5xl rounded-[2rem] border border-[#F5D48F]/25 bg-[#0F172A]/62 p-4 shadow-2xl backdrop-blur-xl md:p-8"
      >
        {/* Mobile full ending image */}
        <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-[#F5D48F]/20 bg-[#020617]/70 md:hidden">
          <img
            src="/images/ending-wide.jpg"
            alt="Srujan and Lakshmi Priyanka"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.38em] text-[#F5D48F] md:text-xs">
            Wedding Details
          </p>

          <h2 className="font-display text-3xl leading-tight text-[#F9FAFB] md:text-6xl">
            Srujan & Lakshmi Priyanka
          </h2>

          <p className="font-romantic mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-[#CBD5E1] md:mt-4 md:text-3xl">
            We are getting married. Come bless us and join us for dinner.
          </p>
        </div>

        <div className="mt-5 rounded-3xl border border-[#F5D48F]/15 bg-[#020617]/45 p-3 md:mt-6 md:p-5">
          <p className="mb-3 text-center text-[9px] uppercase tracking-[0.32em] text-[#F5D48F] md:text-[10px]">
            Countdown to Muhurtham
          </p>

          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#F5D48F]/10 bg-[#111827]/65 px-1 py-3 text-center md:py-4"
              >
                <p className="font-display text-2xl text-[#F5D48F] md:text-5xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#CBD5E1] md:text-[10px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-4 md:gap-4">
          {detailCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-[#F5D48F]/15 bg-[#111827]/55 p-3 text-center md:rounded-3xl md:p-5"
              >
                <Icon className="mx-auto mb-2 h-5 w-5 text-[#F5D48F] md:mb-3 md:h-6 md:w-6" />
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#F5D48F] md:text-[10px]">
                  {item.label}
                </p>
                <p className="font-romantic mt-2 text-base leading-snug text-[#F9FAFB] md:text-2xl">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F5D48F]/40 bg-[#F5D48F] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#0F172A] transition hover:bg-[#F4C2C2] md:text-sm"
        >
            <MapPin className="h-4 w-4" />
            Open Map
        </a>

        <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F5D48F]/35 bg-[#111827]/65 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#F5D48F] backdrop-blur-md transition hover:bg-[#F5D48F] hover:text-[#0F172A] md:text-sm"
        >
            <CalendarPlus className="h-4 w-4" />
            Add to Calendar
        </a>
        </div>

        
      </motion.div>
    </section>
  );
}