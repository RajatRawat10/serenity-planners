import React from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import logo from "../../assets/home/footerlogo.png";

const navigationLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Destinations",
    href: "#destinations",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
];

const experienceLinks = [
  {
    label: "Luxury Escapes",
    href: "#experiences",
  },
  {
    label: "Adventure Journeys",
    href: "#experiences",
  },
  {
    label: "Romantic Getaways",
    href: "#experiences",
  },
  {
    label: "Family Holidays",
    href: "#experiences",
  },
  {
    label: "Spiritual Journeys",
    href: "#experiences",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative isolate w-full overflow-hidden"
      style={{
        backgroundColor: "var(--charcoal)",
        color: "var(--white)",
      }}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[360px]
          w-[360px]
          rounded-full
          blur-3xl
          sm:-right-[200px]
          sm:-top-[200px]
          sm:h-[430px]
          sm:w-[430px]
          lg:-right-[240px]
          lg:-top-[240px]
          lg:h-[520px]
          lg:w-[520px]
        "
        style={{
          backgroundColor: "var(--gold)",
          opacity: 0.06,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          -left-[180px]
          h-[350px]
          w-[350px]
          rounded-full
          blur-3xl
          sm:-bottom-[210px]
          sm:-left-[200px]
          sm:h-[420px]
          sm:w-[420px]
          lg:-bottom-[250px]
          lg:-left-[230px]
          lg:h-[500px]
          lg:w-[500px]
        "
        style={{
          backgroundColor: "var(--gold-light)",
          opacity: 0.035,
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <div
          className="
            border-b
            py-10
            sm:py-12
            md:py-14
            lg:py-16
            xl:py-20
          "
          style={{
            borderColor: "rgba(255,255,255,0.10)",
          }}
        >
          <div
            className="
              flex
              flex-col
              gap-7
              sm:gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-10
              xl:gap-16
            "
          >
            {/* Heading */}

            <div className="min-w-0 max-w-[760px]">
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span
                  className="h-px w-7 shrink-0 sm:w-10"
                  style={{
                    backgroundColor: "var(--gold-light)",
                  }}
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    sm:text-[10px]
                    sm:tracking-[0.3em]
                  "
                  style={{
                    color: "var(--gold-light)",
                  }}
                >
                  Your next journey
                </span>
              </div>

              <h2
                className="
                  max-w-[700px]
                  text-[clamp(2.25rem,7vw,4.8rem)]
                  leading-[0.96]
                  tracking-[-0.025em]
                "
                style={{
                  color: "var(--white)",
                }}
              >
                Somewhere beautiful
                <span
                  className="block italic font-normal"
                  style={{
                    color: "var(--gold-light)",
                  }}
                >
                  is waiting.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[600px]
                  text-[13px]
                  leading-6
                  sm:mt-5
                  sm:text-[14px]
                  sm:leading-7
                  md:text-[15px]
                "
                style={{
                  color: "rgba(255,255,255,0.60)",
                }}
              >
                Tell us where you'd like to go and how you'd like to travel.
                We'll help shape the journey around you.
              </p>
            </div>

            {/* CTA */}

            <div className="shrink-0">
              <a
                href="#enquiry"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  px-6
                  py-3.5
                  text-[12px]
                  font-semibold
                  tracking-wide
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  sm:w-auto
                  sm:px-7
                  sm:py-4
                  sm:text-[13px]
                "
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--white)",
                  boxShadow: "0 14px 35px rgba(176,138,74,0.20)",
                }}
              >
                <span>Plan Your Journey</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            py-10
            sm:gap-12
            sm:py-12
            md:grid-cols-2
            md:gap-x-10
            md:gap-y-14
            md:py-14
            lg:gap-x-12
            lg:py-16
            xl:grid-cols-12
            xl:gap-x-12
            xl:gap-y-0
            xl:py-20
            2xl:gap-x-16
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div
            className="
              min-w-0
              md:col-span-2
              xl:col-span-5
            "
          >
            {/* Logo */}

            <a
              href="#home"
              aria-label="Serenity Planners - Home"
              className="
                group
                inline-flex
                max-w-full
                items-center
              "
            >
              {/* Gold emblem */}

              <span
                className="
                  relative
                  h-12
                  w-11
                  shrink-0
                  overflow-hidden
                  sm:h-14
                  sm:w-[52px]
                "
              >
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0
                    h-12
                    w-[180px]
                    max-w-none
                    object-contain
                    object-left
                    sm:h-14
                    sm:w-[210px]
                  "
                />
              </span>

              {/* Wordmark */}

              <span
                className="
                  ml-2
                  min-w-0
                  truncate
                  text-[16px]
                  tracking-[0.07em]
                  transition-colors
                  duration-300
                  sm:text-[18px]
                  sm:tracking-[0.08em]
                "
                style={{
                  fontFamily:
                    '"Playfair Display", Georgia, "Times New Roman", serif',
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                SERENITY PLANNERS
              </span>
            </a>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[430px]
                text-[13px]
                leading-6
                sm:mt-6
                sm:text-[14px]
                sm:leading-7
              "
              style={{
                color: "rgba(255,255,255,0.58)",
              }}
            >
              Thoughtfully planned journeys for travellers who value
              meaningful experiences, beautiful places, and the freedom to
              enjoy every moment.
            </p>

            {/* Social */}

            <div className="mt-6 flex items-center gap-3 sm:mt-7">
              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  sm:h-10
                  sm:w-10
                "
                style={{
                  borderColor: "rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                <svg
                  className="
                    h-4
                    w-4
                    fill-current
                    transition-colors
                    group-hover:text-[var(--gold-light)]
                    sm:h-[17px]
                    sm:w-[17px]
                  "
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 4.948 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  sm:h-10
                  sm:w-10
                "
                style={{
                  borderColor: "rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                <svg
                  className="
                    h-4
                    w-4
                    fill-current
                    transition-colors
                    group-hover:text-[var(--gold-light)]
                    sm:h-[17px]
                    sm:w-[17px]
                  "
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Contact */}

            <div className="mt-8 sm:mt-9">
              <h3
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  sm:text-[10px]
                  sm:tracking-[0.24em]
                "
                style={{
                  color: "var(--gold-light)",
                }}
              >
                Get In Touch
              </h3>

              <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                {/* Email */}

                <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0"
                    style={{
                      color: "var(--gold-light)",
                    }}
                  />

                  <div className="min-w-0">
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.14em]
                        sm:text-[9px]
                        sm:tracking-[0.16em]
                      "
                      style={{
                        color: "rgba(255,255,255,0.36)",
                      }}
                    >
                      Email
                    </p>

                    <a
                      href="mailto:hello@serenityplanners.com"
                      className="
                        mt-1
                        block
                        break-all
                        text-[12px]
                        transition-colors
                        hover:text-white
                        sm:text-[13px]
                      "
                      style={{
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      hello@serenityplanners.com
                    </a>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
                  <Phone
                    size={17}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0"
                    style={{
                      color: "var(--gold-light)",
                    }}
                  />

                  <div className="min-w-0">
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.14em]
                        sm:text-[9px]
                        sm:tracking-[0.16em]
                      "
                      style={{
                        color: "rgba(255,255,255,0.36)",
                      }}
                    >
                      Phone
                    </p>

                    <a
                      href="tel:+919876543210"
                      className="
                        mt-1
                        block
                        text-[12px]
                        transition-colors
                        hover:text-white
                        sm:text-[13px]
                      "
                      style={{
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Location */}

                <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
                  <MapPin
                    size={17}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0"
                    style={{
                      color: "var(--gold-light)",
                    }}
                  />

                  <div className="min-w-0">
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.14em]
                        sm:text-[9px]
                        sm:tracking-[0.16em]
                      "
                      style={{
                        color: "rgba(255,255,255,0.36)",
                      }}
                    >
                      Travel Planning
                    </p>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        sm:text-[13px]
                      "
                      style={{
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      India & Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div
            className="
              min-w-0
              md:col-span-1
              xl:col-span-2
              xl:col-start-7
            "
          >
            <h3
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                sm:text-[10px]
                sm:tracking-[0.24em]
              "
              style={{
                color: "var(--gold-light)",
              }}
            >
              Explore
            </h3>

            <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      max-w-full
                      items-center
                      gap-1.5
                      text-[12px]
                      transition-colors
                      duration-300
                      sm:text-[13px]
                    "
                    style={{
                      color: "rgba(255,255,255,0.60)",
                    }}
                  >
                    <span className="transition-colors duration-300 group-hover:text-white">
                      {link.label}
                    </span>

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.5}
                      className="
                        shrink-0
                        translate-y-0.5
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                      style={{
                        color: "var(--gold-light)",
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              EXPERIENCES
          ================================================== */}

          <div
            className="
              min-w-0
              md:col-span-1
              xl:col-span-3
            "
          >
            <h3
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                sm:text-[10px]
                sm:tracking-[0.24em]
              "
              style={{
                color: "var(--gold-light)",
              }}
            >
              Experiences
            </h3>

            <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {experienceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      inline-block
                      max-w-full
                      break-words
                      text-[12px]
                      transition-colors
                      duration-300
                      hover:text-white
                      sm:text-[13px]
                    "
                    style={{
                      color: "rgba(255,255,255,0.60)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            py-6
            sm:gap-6
            sm:py-7
            md:flex-row
            md:items-center
            md:justify-between
            md:gap-8
          "
          style={{
            borderColor: "rgba(255,255,255,0.10)",
          }}
        >
          {/* Copyright */}

          <div
            className="
              flex
              min-w-0
              flex-col
              gap-2
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-x-4
              sm:gap-y-2
            "
          >
            <p
              className="text-[10px] leading-5 sm:text-[11px]"
              style={{
                color: "rgba(255,255,255,0.40)",
              }}
            >
              © {currentYear} Serenity Planners. All rights reserved.
            </p>

            <span
              className="
                hidden
                h-1
                w-1
                shrink-0
                rounded-full
                sm:block
              "
              style={{
                backgroundColor: "var(--gold)",
              }}
            />

            <p
              className="
                flex
                items-center
                gap-1.5
                text-[10px]
                leading-5
                sm:text-[11px]
              "
              style={{
                color: "rgba(255,255,255,0.40)",
              }}
            >
              Crafted for thoughtful journeys

              <Sparkles
                size={11}
                strokeWidth={1.5}
                className="shrink-0"
                style={{
                  color: "var(--gold-light)",
                }}
              />
            </p>
          </div>

          {/* Back To Top */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-3
              text-[10px]
              font-medium
              transition-colors
              duration-300
              sm:text-[11px]
            "
            style={{
              color: "rgba(255,255,255,0.48)",
            }}
          >
            <span className="transition-colors group-hover:text-white">
              Back to top
            </span>

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
                group-hover:-translate-y-1
                sm:h-9
                sm:w-9
              "
              style={{
                borderColor: "rgba(255,255,255,0.16)",
              }}
            >
              <ArrowUp
                size={14}
                strokeWidth={1.5}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;