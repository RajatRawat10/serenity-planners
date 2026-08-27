import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../../assets/home/logo.png";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experiences",
    href: "#experiences",
  },
  {
    name: "Destinations",
    href: "#destinations",
  },
  {
    name: "Why Us",
    href: "#why-serenity",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-b transition-colors duration-300 backdrop-blur-xl"
        style={{
          backgroundColor: scrolled
            ? "rgba(252, 250, 246, 0.98)"
            : "rgba(252, 250, 246, 0.90)",
          borderColor: scrolled ? "var(--border-dark)" : "var(--border)",
          boxShadow: scrolled ? "0 4px 20px rgba(29, 27, 24, 0.05)" : "none",
        }}
      >
        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]
            items-center
            justify-between
            gap-4
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
            2xl:px-16
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}
          <a
            href="#home"
            onClick={handleNavClick}
            aria-label="Serenity Planners - Home"
            className="
              group
              flex
              h-[58px]
              w-[150px]
              shrink-0
              items-center
              overflow-visible
              sm:h-[64px]
              sm:w-[175px]
              md:h-[68px]
              md:w-[190px]
              lg:h-[72px]
              lg:w-[205px]
              xl:h-[76px]
              xl:w-[220px]
            "
          >
            <motion.img
              src={logo}
              alt="Serenity Planners"
              whileHover={{ scale: 1.18 }}
              transition={{ duration: 0.3 }}
              className="
                h-full
                w-full
                scale-[1.12]
                object-contain
                object-center
                sm:scale-[1.15]
                md:scale-[1.18]
                lg:scale-[1.2]
              "
            />
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div
            className="
              hidden
              min-w-0
              flex-1
              items-center
              justify-center
              lg:flex
            "
          >
            <div
              className="
                flex
                items-center
                gap-5
                xl:gap-7
                2xl:gap-9
              "
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="
                    group
                    relative
                    whitespace-nowrap
                    px-1
                    py-2
                    text-[12px]
                    font-medium
                    tracking-[-0.01em]
                    transition-colors
                    duration-300
                    xl:text-[13px]
                    2xl:text-[14px]
                  "
                  style={{
                    color:
                      index === 0
                        ? "var(--gold-dark)"
                        : "var(--charcoal)",
                  }}
                >
                  {link.name}

                  {/* Underline animation */}
                  {index === 0 ? (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-1 right-1 h-px"
                      style={{
                        backgroundColor: "var(--gold)",
                      }}
                    />
                  ) : (
                    hoveredIndex === index && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute bottom-0 left-1 right-1 h-px origin-left"
                        style={{
                          backgroundColor: "var(--gold)",
                        }}
                      />
                    )
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}
          <motion.a
            href="#enquiry"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              rounded-full
              px-4
              py-3
              text-[11px]
              font-semibold
              tracking-wide
              transition-all
              duration-300
              lg:flex
              xl:px-5
              xl:py-3.5
              xl:text-[12px]
              2xl:px-6
              2xl:text-[13px]
            "
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--white)",
              boxShadow: "0 8px 24px rgba(176, 138, 74, 0.18)",
            }}
          >
            <span>Plan Your Journey</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                xl:h-4
                xl:w-4
              "
            />
          </motion.a>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300
              active:scale-95
              sm:h-11
              sm:w-11
              lg:hidden
            "
            style={{
              borderColor: "var(--border-dark)",
              color: "var(--charcoal)",
              backgroundColor: "var(--white)",
            }}
          >
            {isMenuOpen ? (
              <X
                size={20}
                strokeWidth={1.7}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.7}
              />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t lg:hidden"
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
                  pb-5
                  pt-1
                  sm:px-6
                  sm:pb-6
                  md:px-8
                "
              >
                <div className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      onClick={handleNavClick}
                      className="
                        flex
                        min-h-[48px]
                        items-center
                        border-b
                        py-3
                        text-[14px]
                        font-medium
                        transition-colors
                        duration-200
                        sm:min-h-[52px]
                        sm:text-[15px]
                      "
                      style={{
                        color:
                          index === 0
                            ? "var(--gold-dark)"
                            : "var(--charcoal)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  {/* Mobile CTA */}
                  <motion.a
                    href="#enquiry"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                    onClick={handleNavClick}
                    className="
                      mt-4
                      flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      px-5
                      py-3
                      text-[13px]
                      font-semibold
                      transition-all
                      duration-300
                      active:scale-[0.98]
                      sm:mt-5
                      sm:min-h-[52px]
                      sm:text-sm
                    "
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "var(--white)",
                    }}
                  >
                    <span>Plan Your Journey</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
