import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "The entire planning experience felt effortless. Everything was thoughtfully organized, and we were able to enjoy the journey without worrying about the details.",
    author: "Aarav & Meera",
    location: "Leisure Escape",
  },
  {
    quote:
      "What stood out most was how personal the experience felt. The itinerary matched exactly what we wanted from the trip, without feeling rushed or overly planned.",
    author: "Rohan Sharma",
    location: "Personalized Holiday",
  },
  {
    quote:
      "From the first conversation to the end of the trip, everything felt considered. It was the kind of travel experience where you could simply relax and enjoy.",
    author: "Ananya & Karan",
    location: "Couple's Getaway",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "var(--cream)",
      }}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--gold-soft)",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[700px] text-center">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="h-px w-9"
              style={{
                backgroundColor: "var(--gold)",
              }}
            />

            <div className="flex items-center gap-2">
              <Sparkles
                size={13}
                strokeWidth={1.6}
                style={{
                  color: "var(--gold)",
                }}
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                Words From Our Travelers
              </span>
            </div>

            <span
              className="h-px w-9"
              style={{
                backgroundColor: "var(--gold)",
              }}
            />
          </div>

          {/* Heading */}
          <h2
            className="text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.96]"
            style={{
              color: "var(--charcoal)",
            }}
          >
            Journeys that stay
            <span
              className="block italic font-normal"
              style={{
                color: "var(--gold-dark)",
              }}
            >
              with you.
            </span>
          </h2>

          {/* Description */}
          <p
            className="mx-auto mt-6 max-w-[570px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
            style={{
              color: "var(--taupe)",
            }}
          >
            The best measure of a journey is how it makes you feel
            long after you've returned home.
          </p>
        </div>

        {/* =====================================================
            TESTIMONIAL
        ====================================================== */}

        <div className="mx-auto mt-12 max-w-[900px]">

          <div
            className="relative rounded-[2rem] p-7 sm:p-10 lg:p-14"
            style={{
              backgroundColor: "var(--ivory)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 25px 70px rgba(29, 27, 24, 0.07)",
            }}
          >

            {/* Quote icon */}
            <div
              className="mb-8 flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                backgroundColor: "var(--gold-soft)",
                color: "var(--gold-dark)",
              }}
            >
              <Quote
                size={22}
                strokeWidth={1.4}
              />
            </div>

            {/* Quote */}
            <blockquote
              className="max-w-[760px] text-[22px] leading-[1.55] sm:text-[28px] lg:text-[32px]"
              style={{
                color: "var(--charcoal)",
                fontFamily:
                  '"Playfair Display", Georgia, serif',
              }}
            >
              “{currentTestimonial.quote}”
            </blockquote>

            {/* Divider */}
            <div
              className="my-9 h-px w-full"
              style={{
                backgroundColor: "var(--border)",
              }}
            />

            {/* Author + Navigation */}
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

              {/* Author */}
              <div>
                <p
                  className="text-[14px] font-semibold"
                  style={{
                    color: "var(--charcoal)",
                  }}
                >
                  {currentTestimonial.author}
                </p>

                <p
                  className="mt-1 text-[11px] uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--taupe-light)",
                  }}
                >
                  {currentTestimonial.location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">

                <span
                  className="mr-2 text-[11px] font-medium tabular-nums"
                  style={{
                    color: "var(--taupe-light)",
                  }}
                >
                  {String(currentIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-x-0.5"
                  style={{
                    borderColor: "var(--border-dark)",
                    backgroundColor: "var(--white)",
                    color: "var(--charcoal)",
                  }}
                >
                  <ChevronLeft
                    size={18}
                    strokeWidth={1.6}
                  />
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:translate-x-0.5"
                  style={{
                    backgroundColor: "var(--charcoal)",
                    color: "var(--white)",
                  }}
                >
                  <ChevronRight
                    size={18}
                    strokeWidth={1.6}
                  />
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width:
                      index === currentIndex
                        ? "32px"
                        : "8px",
                    backgroundColor:
                      index === currentIndex
                        ? "var(--gold)"
                        : "var(--border-dark)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            SMALL TRUST MESSAGE
        ====================================================== */}

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: "var(--gold)",
              }}
            />

            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                color: "var(--taupe-light)",
              }}
            >
              Your journey deserves thoughtful planning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;