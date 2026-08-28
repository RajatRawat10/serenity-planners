import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  Map,
  Sparkles,
  UserRound,
} from "lucide-react";

import whyChooseImage from "../../assets/home/whychooseus.webp";

const reasons = [
  {
    number: "01",
    icon: UserRound,
    title: "Personal Approach",
    description:
      "Your journey starts with understanding how you want to travel, not fitting you into a standard package.",
  },
  {
    number: "02",
    icon: Map,
    title: "Thoughtfully Curated",
    description:
      "We focus on meaningful destinations, stays, and experiences that make each trip feel considered.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "From the bigger itinerary decisions to the smaller details, every part of the journey matters.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Travel With Confidence",
    description:
      "Have someone to turn to when you need guidance, making the planning process simpler and more reassuring.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const reasonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyChooseSerenity = () => {
  return (
    <section
      id="why-serenity"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "var(--ivory)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">

          {/* =====================================================
              LEFT — IMAGE WITH REVEAL
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-28 w-28 border-b border-l sm:-bottom-5 sm:-left-5"
              style={{
                borderColor: "var(--gold-light)",
              }}
            />

            <div className="relative z-10 aspect-[4/4.7] overflow-hidden rounded-[2rem]">
              <motion.img
                src={whyChooseImage}
                alt="Scenic destination representing thoughtful travel"
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-cover object-center"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(29,27,24,0.5), transparent 55%)",
                }}
              />

              {/* Image message */}
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  The Serenity difference
                </p>

                <p className="mt-2 max-w-[360px] text-xl leading-snug text-white sm:text-2xl">
                  Less time worrying about the details.
                  More time enjoying the journey.
                </p>
              </div>
            </div>

            {/* Floating detail card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-3 -top-5 z-20 hidden w-[190px] rounded-2xl p-5 sm:-right-6 sm:block"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow:
                  "0 20px 55px rgba(29,27,24,0.10)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "var(--gold-soft)",
                  color: "var(--gold-dark)",
                }}
              >
                <Check
                  size={17}
                  strokeWidth={1.8}
                />
              </div>

              <p
                className="mt-4 text-[13px] font-semibold"
                style={{
                  color: "var(--charcoal)",
                }}
              >
                Built around you
              </p>

              <p
                className="mt-1 text-[10px] leading-5"
                style={{
                  color: "var(--taupe)",
                }}
              >
                No cookie-cutter itineraries.
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT WITH STAGGERED REVEAL
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 max-w-[680px] lg:order-2"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{
                  backgroundColor: "var(--gold)",
                }}
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                Why Choose Serenity
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[clamp(2.7rem,5vw,5rem)] leading-[0.95]"
              style={{
                color: "var(--charcoal)",
              }}
            >
              Thoughtful travel,
              <span
                className="block italic font-normal"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                from start to finish.
              </span>
            </h2>

            {/* Intro */}
            <p
              className="mt-7 max-w-[590px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
              style={{
                color: "var(--taupe)",
              }}
            >
              Great travel isn't just about where you go. It's about
              how effortlessly everything comes together. We take the
              time to understand what matters to you and shape the
              journey accordingly.
            </p>

            {/* =================================================
                REASONS GRID (STAGGERED REVEAL)
            ================================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2"
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.number}
                    variants={reasonVariants}
                    className="group"
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: "var(--gold-soft)",
                          color: "var(--gold-dark)",
                        }}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.6}
                        />
                      </div>

                      <span
                        className="text-[10px] font-medium tracking-[0.16em]"
                        style={{
                          color: "var(--taupe-light)",
                        }}
                      >
                        {reason.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mt-4 text-[17px] font-semibold"
                      style={{
                        color: "var(--charcoal)",
                      }}
                    >
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mt-2 text-[12px] leading-5"
                      style={{
                        color: "var(--taupe)",
                      }}
                    >
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="mt-10">
              <motion.a
                href="#enquiry"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[13px] font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "var(--charcoal)",
                  color: "var(--white)",
                }}
              >
                Start Planning Your Journey

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{
                    color: "var(--gold-light)",
                  }}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSerenity;