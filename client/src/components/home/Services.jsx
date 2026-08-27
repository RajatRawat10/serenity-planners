import { useMemo, useState } from "react";
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
   SERVICES COMPONENT
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
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "var(--ivory)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div className="max-w-[720px]">

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
                Travel Experiences
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[clamp(2.7rem,5vw,5rem)] leading-[0.95]"
              style={{
                color: "var(--charcoal)",
              }}
            >
              Choose how you want
              <span
                className="block italic font-normal"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                to experience the world.
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-6 max-w-[590px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
              style={{
                color: "var(--taupe)",
              }}
            >
              Every traveller is different. Explore experiences shaped
              around your interests, your pace, and the moments you want
              to remember.
            </p>
          </div>

          {/* Side statement */}
          <div
            className="hidden max-w-[230px] border-l pl-5 lg:block"
            style={{
              borderColor: "var(--border-dark)",
            }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{
                color: "var(--gold-dark)",
              }}
            >
              Your journey
            </p>

            <p
              className="mt-2 text-[13px] leading-5"
              style={{
                color: "var(--taupe)",
              }}
            >
              Tell us what you love. We'll help create the rest.
            </p>
          </div>
        </div>

        {/* =====================================================
            FILTER PILLS
        ====================================================== */}

        <div className="mt-10">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  className="shrink-0 rounded-full border px-5 py-2.5 text-[12px] font-medium transition-all duration-300"
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
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            EXPERIENCE GRID
        ====================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                key={experience.id}
                className="group overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={`${experience.title} travel experience`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(29,27,24,0.58) 0%, rgba(29,27,24,0.04) 65%)",
                    }}
                  />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <div
                      className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md"
                      style={{
                        backgroundColor: "rgba(252,250,246,0.92)",
                        color: "var(--gold-dark)",
                      }}
                    >
                      <Icon
                        size={13}
                        strokeWidth={1.6}
                      />

                      {experience.categoryLabel}
                    </div>
                  </div>

                  {/* Image title */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3
                      className="text-[26px] leading-tight"
                      style={{
                        color: "var(--white)",
                      }}
                    >
                      {experience.title}
                    </h3>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "rgba(252,250,246,0.94)",
                      color: "var(--charcoal)",
                    }}
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 sm:p-7">

                  <p
                    className="text-[13px] leading-6"
                    style={{
                      color: "var(--taupe)",
                    }}
                  >
                    {experience.description}
                  </p>

                  {/* Bottom action */}
                  <div
                    className="mt-6 flex items-center justify-between border-t pt-5"
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                      style={{
                        color: "var(--charcoal)",
                      }}
                    >
                      Explore experience
                    </span>

                    <a
                      href="#enquiry"
                      aria-label={`Plan ${experience.title}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        backgroundColor: "var(--gold-soft)",
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
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-12 flex justify-center">
          <a
            href="#enquiry"
            className="group inline-flex items-center gap-3 rounded-full border px-6 py-3.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border-dark)",
              backgroundColor: "transparent",
              color: "var(--charcoal)",
            }}
          >
            <span>Have something specific in mind?</span>

            <span
              style={{
                color: "var(--gold-dark)",
              }}
            >
              Let's plan it
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              style={{
                color: "var(--gold-dark)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;