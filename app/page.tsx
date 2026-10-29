import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Compass,
  HeartHandshake,
  MapPin,
  Quote,
  Sparkles,
} from "lucide-react";
import Button from "@/components/Button";
import PlanCTA from "@/components/PlanCTA";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import { featuredTours, formatPrice } from "@/lib/tours";

const reasons = [
  {
    icon: Compass,
    title: "Made for you",
    description:
      "No fixed formula. Every itinerary is shaped around your interests, pace and travel style.",
  },
  {
    icon: MapPin,
    title: "Grounded in place",
    description:
      "Local guides, thoughtful routes and stays chosen for their character, not just their star rating.",
  },
  {
    icon: BedDouble,
    title: "Comfort, considered",
    description:
      "Beautiful, well-located places to stay — from boutique hideaways to family-friendly favourites.",
  },
  {
    icon: HeartHandshake,
    title: "Looked after",
    description:
      "One real person stays close from the first idea to the journey home. No call-centre handovers.",
  },
];

const destinations = [
  {
    name: "Zanzibar",
    country: "Tanzania",
    category: "Beach escapes",
    image: "/images/destination-zanzibar.jpg",
    alt: "White sand and turquoise water in Zanzibar",
    href: "/products?category=Beach%20Holidays#packages",
    featured: true,
  },
  {
    name: "Istanbul",
    country: "Türkiye",
    category: "Culture & history",
    image: "/images/destination-istanbul.jpg",
    alt: "Istanbul's historic skyline at golden hour",
    href: "/products?category=Cultural%20Tours#packages",
    featured: false,
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    category: "Wildlife & wilderness",
    image: "/images/destination-serengeti.jpg",
    alt: "Wildlife on the Serengeti plains",
    href: "/products?category=Adventure#packages",
    featured: false,
  },
  {
    name: "Maldives",
    country: "Maldives",
    category: "Slow island days",
    image: "/images/destination-maldives.jpg",
    alt: "A quiet lagoon in the Maldives",
    href: "/products?category=Beach%20Holidays#packages",
    featured: false,
  },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const heroTour = featuredTours[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-navy-950 py-32 lg:h-[100svh] lg:max-h-[1000px] lg:min-h-[860px]">
        <Image
          src="/images/hero.jpg"
          alt="Turquoise ocean and white sand at a tropical beach"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover object-center"
        />
        <div aria-hidden="true" className="hero-veil absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -right-40 top-32 h-[38rem] w-[38rem] rounded-full border border-white/[0.09]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 top-56 h-[24rem] w-[24rem] rounded-full border border-white/[0.09]"
        />

        <div className="container-page relative z-10">
          <div className="hero-copy max-w-[48rem] pt-6">
            <p className="eyebrow eyebrow-line eyebrow-light">
              Curated journeys · East Africa &amp; beyond
            </p>
            <h1 className="display mt-7 text-[clamp(3.25rem,7.4vw,6.5rem)] leading-[0.95] text-white">
              Dunida La Soo{" "}
              <span className="block italic text-gold">Siham Tours.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1rem] leading-8 text-white/72 sm:text-[1.06rem]">
              Your journey begins here. Explore amazing destinations and create
              unforgettable memories.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="primary" showArrow>
                Sahami Safarada
              </Button>
              <Button href="/contact" variant="outline-light" showArrow>
                Nala Soo Xiriir
              </Button>
            </div>
            <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-[0.67rem] font-semibold uppercase tracking-[0.11em] text-white/48">
              <li className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Tailor-made planning
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Handpicked stays
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Real human support
              </li>
            </ul>
          </div>
        </div>

        {heroTour ? (
          <Link
            href="/products"
            className="group absolute bottom-10 right-6 z-10 hidden w-[19rem] overflow-hidden rounded-[1.6rem] border border-white/20 bg-navy-950/35 p-3 text-white backdrop-blur-xl transition-colors hover:border-white/35 hover:bg-navy-950/50 xl:right-10 xl:block"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-[5.75rem] w-[5.25rem] shrink-0 overflow-hidden rounded-[1.1rem]">
                <Image
                  src={heroTour.image}
                  alt={heroTour.imageAlt}
                  fill
                  sizes="84px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.57rem] font-bold uppercase tracking-[0.2em] text-teal-200/85">
                  Featured escape
                </p>
                <p className="mt-1.5 font-display text-[1.22rem] leading-[1.1] text-white">
                  {heroTour.name}
                </p>
                <p className="mt-2 text-[0.64rem] text-white/55">
                  {heroTour.duration} · from {formatPrice(heroTour.price)}
                </p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="ml-auto h-4 w-4 shrink-0 text-white/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </div>
          </Link>
        ) : null}
      </section>

      {/* Brand statement */}
      <section className="border-b border-navy-900/10 bg-cream">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:py-16">
          <Reveal>
            <p className="eyebrow eyebrow-line">The Siham way</p>
            <h2 className="display mt-4 max-w-md text-[2.15rem] leading-[1.1] text-navy-950 sm:text-[2.55rem]">
              Travel should feel extraordinary — and entirely effortless.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-2xl text-[0.98rem] leading-8 text-navy-900/62">
              We believe the best journeys begin with listening. That&apos;s why
              we take the time to understand how you like to travel, then bring
              together the places, people and details that make a trip feel
              personal. Thoughtful from the first idea. Unforgettable long after
              you return.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/about" className="text-link">
                Meet Siham Tours
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <span className="hidden h-px w-10 bg-gold/60 sm:block" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-navy-900/40">
                Curated, not copied
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured tours */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Featured journeys"
              title="A few places to begin."
              description="Handpicked escapes for curious travelers — each one designed to be adapted around you. These are starting points, not set scripts."
              action={{ label: "View all tours", href: "/products" }}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour, index) => (
              <Reveal key={tour.slug} delay={index * 80}>
                <TourCard tour={tour} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-navy-900/10 bg-sand-50 px-6 py-5 sm:flex-row sm:items-center">
              <p className="flex items-center gap-3 text-sm text-navy-900/60">
                <Sparkles
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-gold"
                />
                Don&apos;t see quite what you had in mind? That&apos;s usually
                where the best journeys start.
              </p>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.13em] text-navy-950"
              >
                Plan something bespoke
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-teal-700 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad overflow-hidden bg-sand-50">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-sand-200 shadow-lift sm:aspect-[5/5]">
              <Image
                src="/images/about.jpg"
                alt="A travel journal, map and camera laid out for planning a journey"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-[1.75rem] italic leading-snug text-white">
                  Every detail, considered.
                </p>
                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                  The art of thoughtful travel
                </p>
              </div>
            </div>

            <div className="absolute -right-3 top-8 hidden max-w-[13.5rem] rounded-2xl border border-white bg-white/95 p-5 shadow-lift backdrop-blur-sm sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <HeartHandshake aria-hidden="true" className="h-4 w-4" />
                </span>
                <p className="text-[0.62rem] font-bold uppercase leading-4 tracking-[0.13em] text-navy-900/45">
                  Planning that
                  <br />
                  feels effortless
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line">Why travel with us</p>
              <h2 className="display mt-4 text-[clamp(2.5rem,4.8vw,4rem)] leading-[1.03] text-navy-950">
                Travel far.
                <br />
                <span className="italic text-teal-700">Feel looked after.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[0.96rem] leading-7 text-navy-900/62">
                A beautiful itinerary is only part of the story. What makes a
                journey memorable is how it feels — the ease, the discoveries
                and the quiet confidence that someone is thinking of the
                details.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-x-7 gap-y-7 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Reveal key={reason.title} delay={index * 70}>
                    <div className="border-t border-navy-900/12 pt-5">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-teal-700"
                        strokeWidth={1.6}
                      />
                      <h3 className="mt-4 text-[0.95rem] font-bold text-navy-950">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-[0.82rem] leading-6 text-navy-900/55">
                        {reason.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={150}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button href="/about" variant="dark" showArrow>
                  Our approach
                </Button>
                <p className="font-display text-lg italic text-navy-900/55">
                  No two journeys should feel the same.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Where to next"
              title="Places that stay with you."
              description="From island stillness to city energy and wide-open wilderness — a few of the places we love to plan around."
              action={{ label: "Browse all journeys", href: "/products" }}
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {destinations.slice(0, 1).map((destination, index) => (
              <Reveal
                key={destination.name}
                delay={index * 70}
                className="lg:col-span-7"
              >
                <Link
                  href={destination.href}
                  className="group relative block min-h-[380px] overflow-hidden rounded-[1.75rem] sm:min-h-[480px] lg:min-h-[575px]"
                >
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="image-zoom object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"
                  />
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-navy-950/25 px-3.5 py-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                    {destination.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.19em] text-gold">
                        {destination.country}
                      </p>
                      <h3 className="display mt-2 text-[2.7rem] leading-none text-white sm:text-[3.4rem]">
                        {destination.name}
                      </h3>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy-950">
                      <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {destinations.slice(1).map((destination, index) => (
                <Reveal key={destination.name} delay={(index + 1) * 70}>
                  <Link
                    href={destination.href}
                    className="group relative block min-h-[178px] overflow-hidden rounded-[1.5rem] sm:min-h-[230px] lg:min-h-[181px]"
                  >
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      fill
                      sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                      className="image-zoom object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/15 to-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 flex w-full items-end justify-between gap-3 p-5">
                      <div>
                        <p className="text-[0.57rem] font-bold uppercase tracking-[0.17em] text-gold">
                          {destination.country}
                        </p>
                        <h3 className="display mt-1.5 text-[1.8rem] leading-none text-white">
                          {destination.name}
                        </h3>
                        <p className="mt-2 text-[0.62rem] uppercase tracking-[0.1em] text-white/55">
                          {destination.category}
                        </p>
                      </div>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy-950">
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traveler stories — intentionally honest until verified reviews exist */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div
          aria-hidden="true"
          className="absolute -left-48 top-1/3 h-[32rem] w-[32rem] rounded-full bg-teal-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-52 -top-52 h-[38rem] w-[38rem] rounded-full border border-white/[0.06]"
        />

        <div className="container-page relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow eyebrow-line eyebrow-light">
              Traveler stories
            </p>
            <h2 className="display mt-5 text-[clamp(2.5rem,4.8vw,4.15rem)] leading-[1.03] text-white">
              Real stories,
              <br />
              <span className="italic text-gold">honestly shared.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-7 text-white/55">
              We don&apos;t write reviews for our guests. As travelers return
              home, their verified stories will appear here — in their own
              words, and only with their permission.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline-light" showArrow>
                Share your experience
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-7 backdrop-blur-sm sm:p-10">
              <Quote
                aria-hidden="true"
                className="h-10 w-10 text-gold/70"
                strokeWidth={1.2}
              />
              <blockquote className="mt-6">
                <p className="font-display text-[1.8rem] italic leading-[1.35] text-white sm:text-[2.15rem]">
                  “The best journeys are the ones that feel entirely your own.”
                </p>
                <footer className="mt-6 flex items-center gap-3 text-[0.63rem] font-bold uppercase tracking-[0.17em] text-white/40">
                  <span className="h-px w-8 bg-gold/60" />
                  The Siham Tours promise
                </footer>
              </blockquote>

              <div className="mt-9 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                {["Verified only", "With permission", "In their words"].map(
                  (item) => (
                    <div key={item}>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-teal-200/70">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
              <p className="mt-5 text-[0.66rem] leading-5 text-white/30">
                Reviews are published only after a guest&apos;s permission and
                verification.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PlanCTA />
    </>
  );
}
