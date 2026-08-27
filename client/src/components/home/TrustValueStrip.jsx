import {
  Compass,
  HeartHandshake,
  MapPinned,
  Sparkles,
} from "lucide-react";

const trustItems = [
  {
    icon: Compass,
    title: "Personalized Journeys",
    description:
      "Travel plans shaped around your interests and pace.",
  },
  {
    icon: MapPinned,
    title: "Thoughtfully Curated",
    description:
      "Destinations and experiences selected with care.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Support",
    description:
      "Guidance from planning through your journey.",
  },
  {
    icon: Sparkles,
    title: "Made With Care",
    description:
      "Every detail considered for a smoother experience.",
  },
];

const TrustValueStrip = () => {
  return (
    <section
      className="
        w-full
        border-y
      "
      style={{
        backgroundColor: "var(--ivory)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
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
        <div
          className="
            grid
            w-full
            grid-cols-1

            sm:grid-cols-1

            md:grid-cols-2

            lg:grid-cols-4
          "
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            /*
              MOBILE
              --------------------------------
              1 column
              Every item after the first gets
              a horizontal divider.

              TABLET
              --------------------------------
              2 columns
              Item 1 gets vertical divider.
              Items 2 & 3 start the second row
              and get a top divider.
              Item 3 also gets vertical divider.

              DESKTOP
              --------------------------------
              4 columns
              Every item after the first gets
              a vertical divider.
            */

            const mobileBorder =
              index !== 0
                ? "border-t"
                : "";

            const tabletVerticalBorder =
              index % 2 === 1
                ? "md:border-l"
                : "";

            const tabletHorizontalBorder =
              index >= 2
                ? "md:border-t"
                : "";

            const desktopBorder =
              index !== 0
                ? "lg:border-l"
                : "";

            const desktopTopReset =
              index >= 2
                ? "lg:border-t-0"
                : "";

            return (
              <div
                key={item.title}
                className={`
                  group
                  flex
                  min-w-0
                  items-start

                  gap-3

                  px-0
                  py-6

                  ${mobileBorder}

                  sm:gap-4
                  sm:py-7

                  md:px-5
                  md:py-8
                  ${tabletVerticalBorder}
                  ${tabletHorizontalBorder}

                  lg:gap-4
                  lg:px-5
                  lg:py-9
                  ${desktopBorder}
                  ${desktopTopReset}

                  xl:px-7

                  2xl:px-8
                `}
                style={{
                  borderColor: "var(--border)",
                }}
              >
                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full

                    sm:h-11
                    sm:w-11

                    lg:h-10
                    lg:w-10

                    xl:h-11
                    xl:w-11

                    transition-all
                    duration-300
                    group-hover:scale-105
                  "
                  style={{
                    backgroundColor: "var(--gold-soft)",
                    color: "var(--gold-dark)",
                  }}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="
                      sm:h-[19px]
                      sm:w-[19px]
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    min-w-0
                    flex-1
                  "
                >
                  <h3
                    className="
                      text-[13px]
                      font-semibold
                      leading-5
                      tracking-[-0.01em]

                      sm:text-[14px]

                      md:text-[14px]

                      lg:text-[13px]

                      xl:text-[14px]
                    "
                    style={{
                      color: "var(--charcoal)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      max-w-[300px]

                      text-[11px]
                      leading-[1.6]

                      sm:mt-1.5
                      sm:text-[12px]
                      sm:leading-5

                      md:max-w-[260px]

                      lg:max-w-[220px]

                      xl:max-w-[250px]
                    "
                    style={{
                      color: "var(--taupe)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustValueStrip;