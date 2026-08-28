import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";

const destinations = [
  {
    name: "Udaipur, India",
    tagline: "Royal Palaces & Lakeside Escapes",
    type: "Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover lakeside palaces, rich heritage, beautiful architecture, and the timeless charm of Rajasthan.",
  },
  {
    name: "Amalfi Coast, Italy",
    tagline: "Cliffside Views & Mediterranean Living",
    type: "Coastal",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    description:
      "Experience colourful coastal villages, dramatic landscapes, Mediterranean flavours, and unforgettable sunsets.",
  },
  {
    name: "Bali, Indonesia",
    tagline: "Tropical Landscapes & Island Escapes",
    type: "Island",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    description:
      "From lush jungle retreats to beautiful beaches, discover a slower and more immersive side of Bali.",
  },
  {
    name: "Paris, France",
    tagline: "Culture, Romance & Timeless Elegance",
    type: "European",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    description:
      "Wander historic streets, discover iconic landmarks, and experience the unmistakable character of Paris.",
  },
  {
    name: "Lake Como, Italy",
    tagline: "Alpine Beauty & Lakeside Living",
    type: "Luxury",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1200&q=85",
    description:
      "Escape to serene lakeside villages, elegant villas, mountain scenery, and the beauty of northern Italy.",
  },
  {
    name: "Swiss Alps, Switzerland",
    tagline: "Mountain Landscapes & Alpine Retreats",
    type: "Adventure",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore dramatic mountain scenery, charming alpine villages, scenic rail journeys, and outdoor adventures.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Destinations = () => {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "var(--cream)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div className="max-w-[720px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-px w-10"
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
                  Featured Destinations
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2
              className="text-[clamp(2.7rem,5vw,5rem)] leading-[0.95]"
              style={{
                color: "var(--charcoal)",
              }}
            >
              Places worth
              <span
                className="block italic font-normal"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                travelling for.
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-6 max-w-[590px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
              style={{
                color: "var(--taupe)",
              }}
            >
              From timeless heritage cities to secluded island escapes,
              discover destinations selected for the experiences they
              make possible.
            </p>
          </div>

          {/* Side copy */}
          <div
            className="hidden max-w-[240px] border-l pl-5 lg:block"
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
              Where will you go?
            </p>

            <p
              className="mt-2 text-[13px] leading-5"
              style={{
                color: "var(--taupe)",
              }}
            >
              Tell us the destination. We'll help shape the journey.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            DESTINATION GRID
        ====================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {destinations.map((destination) => (
            <motion.article
              key={destination.name}
              variants={cardVariants}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-[1.75rem] bg-[var(--white)]"
              style={{
                border: "1px solid var(--border)",
              }}
            >
              {/* =================================================
                  IMAGE
              ================================================== */}
              <div className="relative aspect-[4/4.2] overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={`${destination.name} travel destination`}
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />

                {/* Image overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(29,27,24,0.72) 0%, rgba(29,27,24,0.08) 65%, rgba(29,27,24,0.02) 100%)",
                  }}
                />

                {/* Type badge */}
                <div className="absolute left-5 top-5">
                  <span
                    className="rounded-full px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(252,250,246,0.92)",
                      color: "var(--gold-dark)",
                    }}
                  >
                    {destination.type}
                  </span>
                </div>

                {/* Destination information */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="mb-2 flex items-center gap-1.5 text-[11px]"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <MapPin
                      size={13}
                      strokeWidth={1.6}
                      style={{
                        color: "var(--gold-light)",
                      }}
                    />

                    <span>{destination.tagline}</span>
                  </div>

                  <h3
                    className="text-[27px] leading-tight"
                    style={{
                      color: "var(--white)",
                    }}
                  >
                    {destination.name}
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
                  CARD CONTENT
              ================================================== */}
              <div className="p-6 sm:p-7">
                <p
                  className="text-[13px] leading-6"
                  style={{
                    color: "var(--taupe)",
                  }}
                >
                  {destination.description}
                </p>

                {/* CTA */}
                <div
                  className="mt-6 flex items-center justify-between border-t pt-5"
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.13em]"
                    style={{
                      color: "var(--charcoal)",
                    }}
                  >
                    Explore destination
                  </span>

                  <a
                    href="#enquiry"
                    aria-label={`Plan a trip to ${destination.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
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
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
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
            <span>Can't find your destination?</span>

            <span
              className="font-medium"
              style={{
                color: "var(--gold-light)",
              }}
            >
              Tell us where
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              style={{
                color: "var(--gold-light)",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;