import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Heart,
  Mountain,
  Sparkles,
  Users,
} from "lucide-react";

import luxuryImage from "../../assets/home/luxury.webp";
import adventureImage from "../../assets/home/adventure.webp";
import romanticImage from "../../assets/home/romantic.webp";
import familyImage from "../../assets/home/family.webp";
import spiritualImage from "../../assets/home/spiritual.webp";

/* =========================================================
   EXPERIENCE CATEGORIES
========================================================= */

const categories = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "luxury",
    label: "Luxury",
  },
  {
    id: "adventure",
    label: "Adventure",
  },
  {
    id: "romantic",
    label: "Romantic",
  },
  {
    id: "family",
    label: "Family",
  },
  {
    id: "spiritual",
    label: "Spiritual",
  },
];

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    id: 1,
    category: "luxury",
    categoryLabel: "Luxury",
    title: "Luxury Escapes",
    description:
      "Refined stays, beautiful surroundings, and carefully selected experiences for travellers who appreciate the finer details.",
    image: luxuryImage,
    icon: Sparkles,
  },
  {
    id: 2,
    category: "adventure",
    categoryLabel: "Adventure",
    title: "Adventure Journeys",
    description:
      "Discover dramatic landscapes, local culture, and unforgettable experiences beyond the usual tourist trail.",
    image: adventureImage,
    icon: Mountain,
  },
  {
    id: 3,
    category: "romantic",
    categoryLabel: "Romantic",
    title: "Romantic Getaways",
    description:
      "Beautiful escapes created for couples, from intimate retreats to memorable celebrations in extraordinary places.",
    image: romanticImage,
    icon: Heart,
  },
  {
    id: 4,
    category: "family",
    categoryLabel: "Family",
    title: "Family Holidays",
    description:
      "Flexible and comfortable journeys designed to make family travel easier, more enjoyable, and stress-free.",
    image: familyImage,
    icon: Users,
  },
  {
    id: 5,
    category: "spiritual",
    categoryLabel: "Spiritual",
    title: "Soulful Journeys",
    description:
      "Meaningful journeys through destinations rich in heritage, spirituality, culture, and reflection.",
    image: spiritualImage,
    icon: Compass,
  },
];

/* =========================================================
   SERVICES
========================================================= */

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredExperiences = useMemo(() => {
    if (activeCategory === "all") {
      return experiences;
    }

    return experiences.filter(
      (experience) => experience.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="experiences"
      className="
        relative
        w-full
        overflow-hidden
        py-10

        min-[400px]:py-12

        sm:py-14

        md:py-16

        lg:py-20

        xl:py-24
      "
      style={{
        backgroundColor: "var(--ivory)",
      }}
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]

          px-4

          min-[400px]:px-5

          sm:px-6

          md:px-8

          lg:px-10

          xl:px-12

          2xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-40px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            grid
            grid-cols-1
            gap-7

            sm:gap-8

            md:gap-9

            lg:grid-cols-[minmax(0,720px)_auto]
            lg:items-end
            lg:justify-between

            xl:gap-12
          "
        >
          {/* =================================================
              HEADER CONTENT
          ================================================== */}

          <div
            className="
              min-w-0
              w-full
              max-w-[720px]
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
                  backgroundColor: "var(--gold)",
                }}
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  min-[400px]:text-[9px]

                  sm:text-[10px]
                  sm:tracking-[0.25em]

                  md:text-[11px]
                  md:tracking-[0.28em]
                "
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                Travel Experiences
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[720px]

                text-[clamp(2.35rem,9vw,5rem)]
                leading-[0.94]
                tracking-[-0.04em]

                sm:text-[clamp(2.8rem,7vw,5rem)]

                md:text-[clamp(3.2rem,6vw,5rem)]
              "
              style={{
                color: "var(--charcoal)",
              }}
            >
              Choose how you want

              <span
                className="
                  mt-1
                  block
                  italic
                  font-normal

                  sm:mt-2
                "
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                to experience the world.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[590px]

                text-[13px]
                leading-6

                sm:mt-6
                sm:text-[14px]
                sm:leading-7

                md:text-[15px]
                md:leading-7

                lg:text-[16px]
                lg:leading-8
              "
              style={{
                color: "var(--taupe)",
              }}
            >
              Every traveller is different. Explore experiences shaped
              around your interests, your pace, and the moments you want
              to remember.
            </p>
          </div>

          {/* =================================================
              SIDE STATEMENT
          ================================================== */}

          <div
            className="
              hidden
              max-w-[230px]
              border-l
              pl-5

              lg:block
              lg:shrink-0
              lg:pb-1

              xl:max-w-[250px]
              xl:pl-6
            "
            style={{
              borderColor: "var(--border-dark)",
            }}
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]

                xl:text-[10px]
                xl:tracking-[0.2em]
              "
              style={{
                color: "var(--gold-dark)",
              }}
            >
              Your journey
            </p>

            <p
              className="
                mt-2
                text-[12px]
                leading-5

                xl:text-[13px]
                xl:leading-5
              "
              style={{
                color: "var(--taupe)",
              }}
            >
              Tell us what you love. We'll help create the rest.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            FILTER PILLS
        ====================================================== */}

        <div
          className="
            mt-8

            sm:mt-9

            md:mt-10

            lg:mt-12
          "
        >
          <div
            className="
              flex
              w-full
              gap-2
              overflow-x-auto
              pb-2
              pr-1
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {categories.map((category) => {
              const isActive =
                activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  aria-pressed={isActive}
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    min-h-[40px]
                    shrink-0
                    rounded-full
                    border
                    px-4
                    py-2.5
                    text-[11px]
                    font-medium
                    whitespace-nowrap
                    transition-all
                    duration-300

                    min-[400px]:px-5
                    min-[400px]:text-[12px]

                    sm:min-h-[42px]
                  "
                  style={{
                    backgroundColor: isActive
                      ? "var(--charcoal)"
                      : "var(--white)",

                    borderColor: isActive
                      ? "var(--charcoal)"
                      : "var(--border)",

                    color: isActive
                      ? "var(--white)"
                      : "var(--charcoal-soft)",
                  }}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            EXPERIENCE GRID
        ====================================================== */}

        <motion.div
          layout
          className="
            mt-6
            grid
            grid-cols-1
            gap-4

            min-[480px]:gap-5

            sm:mt-7

            md:grid-cols-2
            md:gap-5

            lg:mt-8
            lg:grid-cols-3
            lg:gap-6

            xl:gap-7
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    flex
                    min-w-0
                    flex-col
                    overflow-hidden
                    rounded-[1.25rem]

                    min-[400px]:rounded-[1.5rem]

                    sm:rounded-[1.625rem]

                    lg:rounded-[1.75rem]
                  "
                  style={{
                    backgroundColor: "var(--white)",
                    border:
                      "1px solid var(--border)",
                  }}
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      aspect-[4/3]
                      w-full
                      overflow-hidden

                      min-[400px]:aspect-[1.28/1]

                      md:aspect-[4/3]
                    "
                  >
                    <motion.img
                      src={experience.image}
                      alt={`${experience.title} travel experience`}
                      loading="lazy"
                      decoding="async"
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    {/* Image gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                      "
                      style={{
                        background:
                          "linear-gradient(to top, rgba(29,27,24,0.62) 0%, rgba(29,27,24,0.04) 68%)",
                      }}
                    />

                    {/* =================================================
                        CATEGORY
                    ================================================== */}

                    <div
                      className="
                        absolute
                        left-3
                        top-3

                        min-[400px]:left-4
                        min-[400px]:top-4

                        sm:left-5
                        sm:top-5
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          px-2.5
                          py-1.5
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.10em]
                          backdrop-blur-md

                          min-[400px]:gap-2
                          min-[400px]:px-3
                          min-[400px]:py-2
                          min-[400px]:text-[9px]

                          sm:text-[10px]
                          sm:tracking-[0.14em]
                        "
                        style={{
                          backgroundColor:
                            "rgba(252,250,246,0.92)",
                          color: "var(--gold-dark)",
                        }}
                      >
                        <Icon
                          size={12}
                          strokeWidth={1.6}
                          className="
                            min-[400px]:h-[13px]
                            min-[400px]:w-[13px]
                          "
                        />

                        {experience.categoryLabel}
                      </div>
                    </div>

                    {/* =================================================
                        IMAGE TITLE
                    ================================================== */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        right-4

                        sm:bottom-5
                        sm:left-5
                        sm:right-5
                      "
                    >
                      <h3
                        className="
                          text-[21px]
                          leading-tight
                          tracking-[-0.02em]

                          min-[400px]:text-[23px]

                          sm:text-[25px]

                          md:text-[24px]

                          lg:text-[25px]

                          xl:text-[26px]
                        "
                        style={{
                          color: "var(--white)",
                        }}
                      >
                        {experience.title}
                      </h3>
                    </div>

                    {/* =================================================
                        HOVER ARROW
                    ================================================== */}

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        h-9
                        w-9
                        translate-y-2
                        items-center
                        justify-center
                        rounded-full
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100

                        sm:bottom-5
                        sm:right-5
                        sm:h-10
                        sm:w-10
                      "
                      style={{
                        backgroundColor:
                          "rgba(252,250,246,0.94)",
                        color: "var(--charcoal)",
                      }}
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-4

                      min-[400px]:p-5

                      sm:p-6

                      md:p-6

                      lg:p-6

                      xl:p-7
                    "
                  >
                    <p
                      className="
                        text-[12px]
                        leading-[1.65]

                        min-[400px]:text-[12.5px]

                        sm:text-[13px]
                        sm:leading-6
                      "
                      style={{
                        color: "var(--taupe)",
                      }}
                    >
                      {experience.description}
                    </p>

                    {/* =================================================
                        BOTTOM ACTION
                    ================================================== */}

                    <div
                      className="
                        mt-auto
                        flex
                        items-center
                        justify-between
                        gap-3
                        border-t
                        pt-4

                        min-[400px]:pt-5

                        sm:mt-6
                      "
                      style={{
                        borderColor: "var(--border)",
                      }}
                    >
                      <span
                        className="
                          min-w-0
                          text-[9px]
                          font-semibold
                          uppercase
                          leading-4
                          tracking-[0.08em]

                          min-[400px]:text-[10px]
                          min-[400px]:tracking-[0.10em]

                          sm:text-[11px]
                          sm:tracking-[0.12em]
                        "
                        style={{
                          color: "var(--charcoal)",
                        }}
                      >
                        Explore experience
                      </span>

                      <a
                        href="#enquiry"
                        aria-label={`Plan ${experience.title}`}
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300
                          group-hover:translate-x-1

                          sm:h-9
                          sm:w-9
                        "
                        style={{
                          backgroundColor:
                            "var(--gold-soft)",
                          color: "var(--gold-dark)",
                        }}
                      >
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.7}
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-9
            flex
            w-full
            justify-center

            sm:mt-11

            md:mt-12

            lg:mt-14
          "
        >
          <motion.a
            href="#enquiry"
            whileHover={{
              scale: 1.02,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              inline-flex
              min-h-[46px]
              max-w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border
              px-4
              py-3
              text-center
              text-[10px]
              font-semibold
              leading-5
              transition-all
              duration-300

              min-[400px]:gap-3
              min-[400px]:px-5
              min-[400px]:text-[11px]

              sm:px-6
              sm:text-[13px]

              md:px-7
            "
            style={{
              borderColor: "var(--border-dark)",
              backgroundColor: "transparent",
              color: "var(--charcoal)",
            }}
          >
            <span>
              Have something specific in mind?
            </span>

            <span
              className="whitespace-nowrap"
              style={{
                color: "var(--gold-dark)",
              }}
            >
              Let's plan it
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5

                sm:h-4
                sm:w-4
              "
              style={{
                color: "var(--gold-dark)",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;