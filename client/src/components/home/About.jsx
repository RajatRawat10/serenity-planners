import {
  ArrowUpRight,
  Check,
  Compass,
  Heart,
  Sparkles,
} from "lucide-react";

import aboutImage from "../../assets/home/aboutimg.webp";

const benefits = [
  {
    icon: Compass,
    title: "Personalized Planning",
    description:
      "Journeys shaped around your interests, pace, and preferences.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Experiences",
    description:
      "Carefully selected stays, destinations, and experiences.",
  },
  {
    icon: Heart,
    title: "Travel With Confidence",
    description:
      "A dedicated approach that keeps your journey smooth and stress-free.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
      style={{
        backgroundColor: "var(--cream)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">

          {/* =================================================
              IMAGE SIDE
          ================================================== */}
          <div className="relative">

            {/* Decorative gold line */}
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-24 w-24 border-l border-t sm:-left-5 sm:-top-5"
              style={{
                borderColor: "var(--gold-light)",
              }}
            />

            {/* Image */}
            <div className="relative z-10 aspect-[4/4.6] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
              <img
                src={aboutImage}
                alt="Scenic travel destination"
                className="h-full w-full object-cover object-center"
              />

              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(29,27,24,0.32), transparent 45%)",
                }}
              />

              {/* Image caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.2em]"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    The art of travelling
                  </p>

                  <p className="mt-1 text-lg text-white">
                    Journeys made personal.
                  </p>
                </div>

                <div
                  className="hidden h-11 w-11 items-center justify-center rounded-full sm:flex"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                    color="white"
                  />
                </div>
              </div>
            </div>

            {/* Floating experience card */}
            <div
              className="absolute -bottom-7 -right-3 z-20 rounded-2xl px-5 py-4 sm:-right-6 sm:px-6 sm:py-5"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow:
                  "0 18px 50px rgba(29, 27, 24, 0.10)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "var(--gold-soft)",
                    color: "var(--gold-dark)",
                  }}
                >
                  <Sparkles
                    size={16}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <p
                    className="text-[13px] font-semibold"
                    style={{
                      color: "var(--charcoal)",
                    }}
                  >
                    Made around you
                  </p>

                  <p
                    className="mt-0.5 text-[10px]"
                    style={{
                      color: "var(--taupe-light)",
                    }}
                  >
                    Never a one-size-fits-all trip
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTENT SIDE
          ================================================== */}
          <div className="max-w-[620px]">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-px w-9"
                style={{
                  backgroundColor: "var(--gold)",
                }}
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                About Serenity Planners
              </span>
            </div>

            {/* Heading */}
            <h2
              className="max-w-[600px] text-[clamp(2.5rem,4.5vw,4.6rem)] leading-[0.98]"
              style={{
                color: "var(--charcoal)",
              }}
            >
              Travel should feel
              <span
                className="block italic font-normal"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                effortless.
              </span>
            </h2>

            {/* Main copy */}
            <p
              className="mt-7 max-w-[570px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
              style={{
                color: "var(--taupe)",
              }}
            >
              At Serenity Planners, we believe a great journey begins
              long before you reach your destination. We create
              thoughtfully planned travel experiences that balance
              discovery, comfort, and the freedom to enjoy every
              moment.
            </p>

            <p
              className="mt-5 max-w-[570px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
              style={{
                color: "var(--taupe)",
              }}
            >
              From choosing the right destination to shaping the
              details of your itinerary, our approach is personal,
              considered, and built around the way you want to travel.
            </p>

            {/* Benefits */}
            <div className="mt-9 space-y-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-4"
                  >
                    {/* Icon */}
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
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

                    {/* Text */}
                    <div>
                      <h3
                        className="text-[14px] font-semibold"
                        style={{
                          color: "var(--charcoal)",
                        }}
                      >
                        {benefit.title}
                      </h3>

                      <p
                        className="mt-1 text-[12px] leading-5"
                        style={{
                          color: "var(--taupe)",
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="#experiences"
                className="group inline-flex items-center gap-2 border-b pb-2 text-[13px] font-semibold transition-all duration-300"
                style={{
                  color: "var(--charcoal)",
                  borderColor: "var(--gold)",
                }}
              >
                Discover Our Experiences

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{
                    color: "var(--gold-dark)",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;