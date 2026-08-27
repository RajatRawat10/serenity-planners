import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";

import heroBg from "../../assets/home/herobg.webp";
import heroMobile from "../../assets/home/mobilehero.webp";
import heroTablet from "../../assets/home/tablethero.webp";

const Hero = () => {
  return (
  <section
  id="home"
  className="
    relative
    isolate
    w-full
    overflow-hidden
    bg-[var(--charcoal)]

    min-h-[520px]

    sm:min-h-[680px]

    md:min-h-[720px]

    lg:min-h-[100svh]
  "
>
      {/* =====================================================
          RESPONSIVE BACKGROUND
      ====================================================== */}

      <picture
        className="
          absolute
          inset-0
          z-0
          block
          h-full
          w-full
        "
      >
        {/* Mobile */}

        <source
          media="(max-width: 639px)"
          srcSet={heroMobile}
        />

        {/* Tablet */}

        <source
          media="(min-width: 640px) and (max-width: 1023px)"
          srcSet={heroTablet}
        />

        {/* Desktop */}

        <img
          src={heroBg}
          alt="Beautiful travel destination"
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </picture>

      {/* =====================================================
          DESKTOP OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(20,18,15,0.84) 0%, rgba(20,18,15,0.62) 38%, rgba(20,18,15,0.20) 72%, rgba(20,18,15,0.30) 100%)",
        }}
      />

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          sm:hidden
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,15,0.28) 0%, rgba(20,18,15,0.46) 48%, rgba(20,18,15,0.80) 100%)",
        }}
      />

      {/* =====================================================
          TABLET OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          hidden
          sm:block
          lg:hidden
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,15,0.32) 0%, rgba(20,18,15,0.48) 45%, rgba(20,18,15,0.76) 100%)",
        }}
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-40
          sm:h-48
          md:h-56
          lg:h-64
        "
        style={{
          background:
            "linear-gradient(to top, rgba(20,18,15,0.78), transparent)",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

   <div
  className="
    relative
    z-10
    mx-auto
    flex
    w-full
    max-w-[1440px]

    min-h-[750px]

    items-start

    px-4
    pb-12
    pt-[235px]

    /* TABLET */
    sm:min-h-0
    sm:px-6
    sm:pb-12
    sm:pt-[195px]

    md:min-h-0
    md:px-8
    md:pb-14
    md:pt-[215px]

    /* DESKTOP */
    lg:min-h-[100svh]
    lg:items-center
    lg:px-10
    lg:pb-24
    lg:pt-24

    xl:px-12

    2xl:px-16
  "
>
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-start

            gap-8

            sm:gap-10

            md:gap-10

            lg:items-center
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:gap-10

            xl:gap-16

            2xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              min-w-0
              max-w-[760px]
            "
          >
            {/* Eyebrow */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-2.5

                sm:mb-5
                sm:gap-3

                md:mb-5
              "
            >
              <span
                className="
                  h-px
                  w-7
                  shrink-0
                  sm:w-10
                "
                style={{
                  backgroundColor: "var(--gold-light)",
                }}
              />

              <span
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]

                  sm:text-[10px]
                  sm:tracking-[0.25em]

                  md:text-[11px]
                  md:tracking-[0.28em]
                "
                style={{
                  color: "var(--gold-light)",
                }}
              >
                Curated Travel Experiences
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <h1
              className="
                max-w-[760px]

                text-[clamp(2.65rem,9vw,7rem)]
                leading-[0.91]
                tracking-[-0.045em]

                sm:text-[clamp(3.1rem,8vw,6rem)]

                md:text-[clamp(3.6rem,7vw,6.5rem)]

                lg:text-[clamp(4rem,6.2vw,7rem)]
              "
              style={{
                color: "var(--white)",
              }}
            >
              Your journey.

              <span
                className="
                  mt-1
                  block
                  italic
                  font-normal

                  sm:mt-2
                "
                style={{
                  color: "var(--gold-light)",
                }}
              >
                Beautifully planned.
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-4
                max-w-[590px]

                text-[13px]
                leading-6

                sm:mt-5
                sm:text-[14px]
                sm:leading-7

                md:mt-6
                md:text-[15px]
                md:leading-7

                lg:mt-7
                lg:text-[16px]
                lg:leading-8
              "
              style={{
                color: "rgba(255,255,255,0.80)",
              }}
            >
              Discover thoughtfully crafted journeys, handpicked
              destinations, and personalized travel experiences designed
              around you.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3

                sm:mt-7
                sm:w-auto
                sm:flex-row

                md:mt-8
              "
            >
              {/* Primary CTA */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  px-5
                  py-3.5
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  active:scale-[0.98]

                  sm:w-auto
                  sm:px-6
                  sm:text-sm
                "
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--white)",
                  boxShadow:
                    "0 12px 35px rgba(176,138,74,0.28)",
                }}
              >
                <span>Plan Your Journey</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* Secondary CTA */}

              <a
                href="#destinations"
                className="
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  px-5
                  py-3.5
                  text-[13px]
                  font-medium
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  active:scale-[0.98]

                  sm:w-auto
                  sm:px-6
                  sm:text-sm
                "
                style={{
                  borderColor: "rgba(255,255,255,0.38)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "var(--white)",
                }}
              >
                Explore Destinations
              </a>
            </div>

            {/* =================================================
                TRUST INDICATORS
            ================================================== */}

            <div
              className="
                mt-8
                grid
                w-full
                max-w-[620px]
                grid-cols-3
                border-t
                pt-5

                sm:mt-9
                sm:pt-6

                md:mt-10
              "
              style={{
                borderColor: "rgba(255,255,255,0.22)",
              }}
            >
              {/* Travelers */}

              <div className="min-w-0 pr-2 sm:pr-4">
                <div
                  className="
                    text-[20px]
                    font-medium
                    leading-none
                    sm:text-2xl
                  "
                  style={{
                    color: "var(--white)",
                  }}
                >
                  500+
                </div>

                <div
                  className="
                    mt-1.5
                    max-w-[100px]
                    text-[8px]
                    uppercase
                    leading-4
                    tracking-[0.10em]

                    sm:text-[10px]
                    sm:tracking-[0.16em]
                  "
                  style={{
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  Happy Travelers
                </div>
              </div>

              {/* Destinations */}

              <div
                className="
                  min-w-0
                  border-l
                  px-2

                  sm:px-4
                "
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                }}
              >
                <div
                  className="
                    text-[20px]
                    font-medium
                    leading-none
                    sm:text-2xl
                  "
                  style={{
                    color: "var(--white)",
                  }}
                >
                  25+
                </div>

                <div
                  className="
                    mt-1.5
                    max-w-[100px]
                    text-[8px]
                    uppercase
                    leading-4
                    tracking-[0.10em]

                    sm:text-[10px]
                    sm:tracking-[0.16em]
                  "
                  style={{
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  Destinations
                </div>
              </div>

              {/* Support */}

              <div
                className="
                  min-w-0
                  border-l
                  pl-2

                  sm:pl-4
                "
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                }}
              >
                <div
                  className="
                    text-[20px]
                    font-medium
                    leading-none
                    sm:text-2xl
                  "
                  style={{
                    color: "var(--white)",
                  }}
                >
                  24/7
                </div>

                <div
                  className="
                    mt-1.5
                    max-w-[100px]
                    text-[8px]
                    uppercase
                    leading-4
                    tracking-[0.10em]

                    sm:text-[10px]
                    sm:tracking-[0.16em]
                  "
                  style={{
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  Travel Support
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT FLOATING CARD
              DESKTOP ONLY
          ================================================== */}

          <div
            className="
              hidden
              w-full
              max-w-[280px]
              rounded-[1.5rem]
              p-5
              backdrop-blur-xl

              lg:block
              lg:w-[260px]
              lg:max-w-none
              lg:rounded-[1.75rem]
              lg:p-6

              xl:w-[300px]

              2xl:w-[310px]
            "
            style={{
              backgroundColor: "rgba(252,250,246,0.90)",
              border: "1px solid rgba(255,255,255,0.45)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
            }}
          >
            {/* Icon */}

            <div
              className="
                mb-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full

                lg:mb-6
                lg:h-11
                lg:w-11
              "
              style={{
                backgroundColor: "var(--gold-soft)",
                color: "var(--gold-dark)",
              }}
            >
              <Sparkles
                size={18}
                strokeWidth={1.7}
              />
            </div>

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]

                lg:text-[10px]
                lg:tracking-[0.2em]
              "
              style={{
                color: "var(--gold-dark)",
              }}
            >
              The Serenity Way
            </p>

            <h2
              className="
                mt-2.5
                text-[21px]
                leading-tight

                lg:mt-3
                lg:text-2xl
              "
              style={{
                color: "var(--charcoal)",
              }}
            >
              Travel without the

              <span
                className="block italic font-normal"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                unnecessary stress.
              </span>
            </h2>

            <p
              className="
                mt-3
                text-[12px]
                leading-5

                lg:mt-4
                lg:text-[13px]
                lg:leading-6
              "
              style={{
                color: "var(--taupe)",
              }}
            >
              From the first idea to the final destination, we take
              care of the details so you can focus on the experience.
            </p>

            {/* Location */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                border-t
                pt-4

                lg:mt-6
                lg:pt-5
              "
              style={{
                borderColor: "var(--border)",
              }}
            >
              <MapPin
                size={16}
                strokeWidth={1.7}
                className="shrink-0"
                style={{
                  color: "var(--gold)",
                }}
              />

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    font-semibold

                    lg:text-[11px]
                  "
                  style={{
                    color: "var(--charcoal)",
                  }}
                >
                  Curated worldwide
                </p>

                <p
                  className="
                    mt-0.5
                    text-[9px]

                    lg:text-[10px]
                  "
                  style={{
                    color: "var(--taupe-light)",
                  }}
                >
                  Journeys made around you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <a
        href="#about"
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-3
          transition-opacity
          duration-300
          hover:opacity-70

          lg:flex

          xl:bottom-7
        "
      >
        <span
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.22em]

            xl:text-[9px]
            xl:tracking-[0.25em]
          "
          style={{
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Discover more
        </span>

        <ArrowDown
          size={14}
          strokeWidth={1.4}
          style={{
            color: "var(--gold-light)",
          }}
        />
      </a>
    </section>
  );
};

export default Hero;