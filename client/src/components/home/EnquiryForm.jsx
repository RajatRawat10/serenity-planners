import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

import { enquirySchema } from "../../lib/validation";

/* =========================================================
   OPTIONS
========================================================= */

const travelTypes = [
  "Luxury Escape",
  "Adventure Journey",
  "Romantic Getaway",
  "Family Holiday",
  "Spiritual Journey",
  "Honeymoon",
  "International Holiday",
  "Other",
];

const travelerOptions = [
  "1 Traveler",
  "2 Travelers",
  "3 - 4 Travelers",
  "5 - 8 Travelers",
  "9+ Travelers",
];

const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "₹2,00,000 - ₹5,00,000",
  "₹5,00,000+",
  "Not decided yet",
];

const highlights = [
  "Personalized travel planning",
  "Carefully selected experiences",
  "Flexible itineraries",
  "Support throughout your journey",
];

/* =========================================================
   REUSABLE FIELD STYLES
========================================================= */

const inputClass = `
  w-full
  rounded-xl
  border
  px-4
  py-3.5
  text-[13px]
  outline-none
  transition-all
  duration-300
  placeholder:text-[#9a9286]
  focus:ring-2
  focus:ring-[#b08a4a]/10
`;

const labelClass =
  "mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em]";

/* =========================================================
   COMPONENT
========================================================= */

const EnquiryForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    success: false,
    error: null,
    referenceId: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(enquirySchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      travelType: "",
      travelDate: "",
      travelers: "",
      destination: "",
      budget: "",
      message: "",
    },
  });

  /* =========================================================
     SUBMIT
  ========================================================= */

  const onSubmit = async (data) => {
  setServerState({
    submitting: true,
    success: false,
    error: null,
    referenceId: null,
  });

  try {
    const baseUrl =
      import.meta.env.VITE_API_URL ||
      "http://localhost:5001";

    const response = await fetch(`${baseUrl}/api/enquiries`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ||
          "We couldn't send your enquiry. Please try again."
      );
    }

    setServerState({
      submitting: false,
      success: true,
      error: null,
      referenceId:
        result.data?.id || "SER-CONFIRMED",
    });

    reset();
  } catch (error) {
    setServerState({
      submitting: false,
      success: false,
      error:
        error.message ||
        "Something went wrong. Please try again.",
      referenceId: null,
    });
  }
};

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "var(--ivory)",
      }}
    >
      <div id="contact" className="absolute top-0 left-0" />
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--gold-soft)",
          opacity: 0.28,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-5"
          >

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
                  Plan Your Journey
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2
              className="max-w-[570px] text-[clamp(2.8rem,5vw,5rem)] leading-[0.95]"
              style={{
                color: "var(--charcoal)",
              }}
            >
              Let's plan something
              <span
                className="block italic font-normal"
                style={{
                  color: "var(--gold-dark)",
                }}
              >
                unforgettable.
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-7 max-w-[520px] text-[15px] leading-7 sm:text-[16px] sm:leading-8"
              style={{
                color: "var(--taupe)",
              }}
            >
              Tell us a little about the journey you have in
              mind. Share your destination, travel style and
              preferences, and we'll help turn those ideas into
              a thoughtfully planned experience.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-9 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--gold-soft)",
                      color: "var(--gold-dark)",
                    }}
                  >
                    <Check
                      size={12}
                      strokeWidth={2}
                    />
                  </div>

                  <span
                    className="text-[13px]"
                    style={{
                      color: "var(--charcoal-soft)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div
              className="mt-10 border-t pt-8"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{
                  color: "var(--taupe-light)",
                }}
              >
                Prefer to reach out directly?
              </p>

              <div className="mt-5 space-y-4">

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--gold-soft)",
                      color: "var(--gold-dark)",
                    }}
                  >
                    <Mail
                      size={16}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.13em]"
                      style={{
                        color: "var(--taupe-light)",
                      }}
                    >
                      Email
                    </p>

                    <p
                      className="mt-0.5 text-[13px] font-medium"
                      style={{
                        color: "var(--charcoal)",
                      }}
                    >
                      hello@serenityplanners.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--gold-soft)",
                      color: "var(--gold-dark)",
                    }}
                  >
                    <MapPin
                      size={16}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.13em]"
                      style={{
                        color: "var(--taupe-light)",
                      }}
                    >
                      Planning
                    </p>

                    <p
                      className="mt-0.5 text-[13px] font-medium"
                      style={{
                        color: "var(--charcoal)",
                      }}
                    >
                      Domestic & International Travel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              FORM CARD
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] p-6 sm:p-8 lg:p-10"
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 25px 70px rgba(29,27,24,0.07)",
            }}
          >
            {/* =================================================
                SUCCESS STATE
            ================================================== */}

            {serverState.success ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center py-10 text-center">

                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "var(--gold-soft)",
                    color: "var(--gold-dark)",
                  }}
                >
                  <CheckCircle2
                    size={30}
                    strokeWidth={1.5}
                  />
                </div>

                <p
                  className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color: "var(--gold-dark)",
                  }}
                >
                  Enquiry Received
                </p>

                <h3
                  className="mt-3 text-[30px] sm:text-[36px]"
                  style={{
                    color: "var(--charcoal)",
                  }}
                >
                  Your journey starts here.
                </h3>

                <p
                  className="mt-4 max-w-[440px] text-[14px] leading-7"
                  style={{
                    color: "var(--taupe)",
                  }}
                >
                  Thank you for reaching out to Serenity
                  Planners. We've received your travel enquiry
                  and will be in touch shortly.
                </p>

                {serverState.referenceId && (
                  <div
                    className="mt-6 rounded-full px-4 py-2 text-[11px]"
                    style={{
                      backgroundColor: "var(--cream)",
                      color: "var(--taupe)",
                    }}
                  >
                    Reference:{" "}
                    <strong
                      style={{
                        color: "var(--charcoal)",
                      }}
                    >
                      {serverState.referenceId}
                    </strong>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setServerState({
                      submitting: false,
                      success: false,
                      error: null,
                      referenceId: null,
                    })
                  }
                  className="mt-8 rounded-full px-6 py-3 text-[12px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--charcoal)",
                    color: "var(--white)",
                  }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                {/* Form header */}
                <div
                  className="mb-8 border-b pb-7"
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color: "var(--gold-dark)",
                    }}
                  >
                    Travel Enquiry
                  </p>

                  <h3
                    className="mt-2 text-[26px] sm:text-[30px]"
                    style={{
                      color: "var(--charcoal)",
                    }}
                  >
                    Tell us about your trip
                  </h3>

                  <p
                    className="mt-2 text-[12px] leading-5"
                    style={{
                      color: "var(--taupe)",
                    }}
                  >
                    Fields marked with * are required.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6"
                >
                  {/* =============================================
                      SERVER ERROR
                  ============================================== */}

                  {serverState.error && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-red-600"
                      />

                      <p className="text-[12px] leading-5 text-red-700">
                        {serverState.error}
                      </p>
                    </div>
                  )}

                  {/* =============================================
                      NAME + EMAIL
                  ============================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field
                      label="Full Name"
                      required
                      error={errors.fullName?.message}
                    >
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        {...register("fullName")}
                        className={inputClass}
                        style={fieldStyle(errors.fullName)}
                      />
                    </Field>

                    <Field
                      label="Email Address"
                      required
                      error={errors.email?.message}
                    >
                      <input
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        className={inputClass}
                        style={fieldStyle(errors.email)}
                      />
                    </Field>
                  </div>

                  {/* =============================================
                      PHONE + TRAVEL TYPE
                  ============================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field
                      label="Phone Number"
                      required
                      error={errors.phone?.message}
                    >
                      <input
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        className={inputClass}
                        style={fieldStyle(errors.phone)}
                      />
                    </Field>

                    <Field
                      label="Travel Type"
                      required
                      error={errors.travelType?.message}
                    >
                      <select
                        {...register("travelType")}
                        className={inputClass}
                        style={fieldStyle(errors.travelType)}
                      >
                        <option value="">
                          Select travel type
                        </option>

                        {travelTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  {/* =============================================
                      DESTINATION
                  ============================================== */}

                  <Field
                    label="Preferred Destination"
                    error={errors.destination?.message}
                  >
                    <div className="relative">
                      <MapPin
                        size={16}
                        strokeWidth={1.6}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                        style={{
                          color: "var(--gold-dark)",
                        }}
                      />

                      <input
                        type="text"
                        placeholder="e.g. Bali, Switzerland, Udaipur or open to ideas"
                        {...register("destination")}
                        className={`${inputClass} pl-11`}
                        style={fieldStyle(
                          errors.destination
                        )}
                      />
                    </div>
                  </Field>

                  {/* =============================================
                      DATE + TRAVELERS
                  ============================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field
                      label="Preferred Travel Date"
                      error={errors.travelDate?.message}
                    >
                      <input
                        type="date"
                        {...register("travelDate")}
                        className={inputClass}
                        style={fieldStyle(
                          errors.travelDate
                        )}
                      />
                    </Field>

                    <Field
                      label="Number of Travelers"
                      error={errors.travelers?.message}
                    >
                      <select
                        {...register("travelers")}
                        className={inputClass}
                        style={fieldStyle(
                          errors.travelers
                        )}
                      >
                        <option value="">
                          Select travelers
                        </option>

                        {travelerOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  {/* =============================================
                      BUDGET
                  ============================================== */}

                  <Field
                    label="Estimated Budget"
                    error={errors.budget?.message}
                  >
                    <select
                      {...register("budget")}
                      className={inputClass}
                      style={fieldStyle(errors.budget)}
                    >
                      <option value="">
                        Select your approximate budget
                      </option>

                      {budgetOptions.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* =============================================
                      MESSAGE
                  ============================================== */}

                  <Field
                    label="Tell Us About Your Trip"
                    required
                    error={errors.message?.message}
                  >
                    <textarea
                      rows={5}
                      placeholder="Tell us what you're looking for — destinations, experiences, interests, special occasions, or anything else we should know..."
                      {...register("message")}
                      className={`${inputClass} resize-none`}
                      style={fieldStyle(errors.message)}
                    />
                  </Field>

                  {/* =============================================
                      SUBMIT
                  ============================================== */}

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={serverState.submitting}
                      className="group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                      style={{
                        backgroundColor:
                          "var(--charcoal)",
                        color: "var(--white)",
                      }}
                    >
                      {serverState.submitting ? (
                        <>
                          <Loader2
                            size={17}
                            className="animate-spin"
                          />

                          Sending Your Enquiry...
                        </>
                      ) : (
                        <>
                          <Send
                            size={16}
                            strokeWidth={1.7}
                            style={{
                              color:
                                "var(--gold-light)",
                            }}
                          />

                          Start Planning My Journey

                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            style={{
                              color:
                                "var(--gold-light)",
                            }}
                          />
                        </>
                      )}
                    </button>

                    <p
                      className="mt-4 text-center text-[10px] leading-5"
                      style={{
                        color: "var(--taupe-light)",
                      }}
                    >
                      By submitting this form, you agree to be
                      contacted regarding your travel enquiry.
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   FIELD COMPONENT
========================================================= */

const Field = ({
  label,
  required = false,
  error,
  children,
}) => {
  return (
    <div>
      <label
        className={labelClass}
        style={{
          color: "var(--charcoal-soft)",
        }}
      >
        {label}

        {required && (
          <span
            className="ml-1"
            style={{
              color: "var(--gold-dark)",
            }}
          >
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <div className="mt-1.5 flex items-center gap-1.5">
          <AlertCircle
            size={12}
            className="shrink-0 text-red-600"
          />

          <p className="text-[11px] text-red-600">
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

/* =========================================================
   FIELD STYLE
========================================================= */

const fieldStyle = (error) => ({
  backgroundColor: "var(--ivory)",
  color: "var(--charcoal)",
  borderColor: error
    ? "#dc2626"
    : "var(--border-dark)",
});

export default EnquiryForm;