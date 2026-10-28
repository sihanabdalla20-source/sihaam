import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Compass,
  Eye,
  HeartHandshake,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import PlanCTA from "@/components/PlanCTA";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Siham Tours — an independent travel company built around thoughtful planning, local knowledge and genuinely personal journeys.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: Compass,
    number: "01",
    title: "Journeys made around you",
    description:
      "Your interests and pace lead the way. We design from a blank page, never from a fixed script.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Local insight",
    description:
      "We value the people who know a place best, and build journeys that benefit from their knowledge.",
  },
  {
    icon: BedDouble,
    number: "03",
    title: "Stays with soul",
    description:
      "Beautiful, well-located places chosen for their character and the way they make you feel.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Honest advice",
    description:
      "Clear recommendations, realistic expectations and no pressure to add what you don't need.",
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Care beyond the itinerary",
    description:
      "A real person stays close before, during and after your journey — because details matter.",
  },
  {
    icon: Leaf,
    number: "06",
    title: "More thoughtful by design",
    description:
      "We favour respectful, low-impact ways to travel and partnerships that give back to places we love.",
  },
];

const approach = [
  {
    number: "01",
    title: "Listen",
    description:
      "Tell us how you like to travel, what you hope to feel and what matters most. There is no such thing as too much detail.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "We bring together a considered itinerary, beautiful stays and the right local experiences — then refine it with you.",
  },
  {
    number: "03",
    title: "Travel",
    description:
      "Step away from the planning. We stay close in the background so you can be fully present for the journey.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Travel with{" "}
            <span className="italic text-gold">intention.</span>
          </>
        }
        description="Siham Tours is an independent travel company built around a simple belief: the most memorable journeys are the ones that feel personal."
        image="/images/contact.jpg"
        imageAlt="Travelers exploring a scenic mountain landscape"
        currentPage="About"
        imagePosition="center"
      />

      {/* Story */}
      <section className="section-pad bg-cream">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-sand-200">
              <Image
                src="/images/about.jpg"
                alt="Travel planning with maps, a journal and travel essentials"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-5 max-w-[13rem] rounded-2xl border border-navy-900/10 bg-white p-5 shadow-lift sm:-right-6">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-gold" />
              <p className="mt-3 font-display text-xl italic leading-snug text-navy-950">
                The details make the difference.
              </p>
              <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-navy-900/40">
                The Siham approach
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line">Who we are</p>
              <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.05] text-navy-950">
                A travel company built around people, not itineraries.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6 space-y-5 text-[0.96rem] leading-8 text-navy-900/64">
                <p>
                  Siham Tours was created to make exploring the world feel
                  simpler, warmer and more meaningful. We plan each journey
                  around the person taking it — your pace, your curiosity and
                  the moments you hope to bring home.
                </p>
                <p>
                  We work with local guides and handpicked places to stay, and
                  stay close throughout the planning process. No call-centre
                  handovers. No copy-and-paste holidays. Just thoughtful
                  recommendations and a real person helping you along the way.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-gold pl-5">
                <p className="font-display text-[1.55rem] italic leading-snug text-navy-950">
                  “We don&apos;t begin with a destination. We begin with you.”
                </p>
                <footer className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-navy-900/40">
                  The Siham Tours approach
                </footer>
              </blockquote>
              <div className="mt-8">
                <Link href="/contact" className="text-link">
                  Start a conversation
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section-pad bg-sand-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What guides us"
              title="Clear purpose. Open horizons."
              description="Two ideas sit at the heart of every journey we plan — and every decision we make along the way."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal delay={80}>
              <div className="h-full rounded-[2rem] border border-navy-900/8 bg-white p-7 shadow-soft sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <Compass aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-navy-900/35">
                  Our mission
                </p>
                <h3 className="display mt-3 text-[2rem] leading-tight text-navy-950">
                  Remarkable travel, made personal.
                </h3>
                <p className="mt-4 text-[0.9rem] leading-7 text-navy-900/60">
                  To make remarkable travel feel personal, seamless and within
                  reach — designing journeys that reflect each traveler&apos;s
                  curiosity, pace and hopes for the road.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-[2rem] bg-navy-950 p-7 text-white shadow-lift sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-gold">
                  <Eye aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/35">
                  Our vision
                </p>
                <h3 className="display mt-3 text-[2rem] leading-tight text-white">
                  A trusted name in thoughtful travel.
                </h3>
                <p className="mt-4 text-[0.9rem] leading-7 text-white/55">
                  To be known for the care we bring to every journey and the
                  meaningful connections we help create — between travelers,
                  places and the people who call them home.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A considered way to travel."
              description="Simple, collaborative and built around you. From first idea to final memory, the process stays human."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
            {approach.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <div
                  className={`relative h-full px-1 md:px-8 ${
                    index > 0
                      ? "md:border-l md:border-navy-900/12"
                      : "md:pl-0"
                  }`}
                >
                  <span className="font-display text-[3.4rem] leading-none text-sand-300">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.88rem] leading-7 text-navy-900/58">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="More than a booking."
              description="The practical things we do — and the way we do them — are what turn a good itinerary into a journey that stays with you."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-navy-900/8 bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 60}>
                  <div className="group h-full bg-cream p-7 transition-colors duration-300 hover:bg-sand-50 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/10 bg-white text-teal-700 transition-colors duration-300 group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:text-white">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5"
                          strokeWidth={1.6}
                        />
                      </span>
                      <span className="text-[0.6rem] font-bold tracking-[0.15em] text-navy-900/25">
                        {value.number}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[1rem] font-bold text-navy-950">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-[0.84rem] leading-6 text-navy-900/55">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-pad bg-sand-50">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line">Our commitment</p>
              <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.04] text-navy-950">
                Good travel should give more than it takes.
              </h2>
              <p className="mt-6 text-[0.96rem] leading-8 text-navy-900/62">
                We care about the quality of the experience and the impact it
                leaves behind. That means listening carefully, recommending
                honestly and choosing partners who share our respect for people
                and place.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Quality in the details",
                  text: "From the first conversation to the last transfer, we pay attention to the things that make travel feel easy.",
                },
                {
                  title: "People before places",
                  text: "The best memories are made by people. We plan with local hosts and guides in a way that feels genuine and respectful.",
                },
                {
                  title: "Memories that last",
                  text: "We want you to return with stories, not just photos — and with a little more of the world in your heart.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="flex gap-4 border-t border-navy-900/12 pt-5">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-600 text-white">
                      <ArrowRight aria-hidden="true" className="h-3 w-3" />
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-bold text-navy-950">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[0.84rem] leading-6 text-navy-900/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <Button href="/contact" variant="dark" className="mt-8" showArrow>
                Plan your journey
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-sand-200 shadow-lift">
              <Image
                src="/images/launch.jpg"
                alt="Travelers exploring together in a beautiful destination"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
              />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="font-display text-[1.85rem] italic leading-snug text-white">
                  Go further.
                  <br />
                  Come back fuller.
                </p>
                <p className="mt-3 text-[0.61rem] font-bold uppercase tracking-[0.18em] text-white/50">
                  The Siham Tours philosophy
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PlanCTA
        eyebrow="Let's begin"
        title="A better journey starts with a good conversation."
        description="Share your ideas, your dates or simply a place that has always intrigued you. We'll take it from there."
        secondaryHref="/products"
        secondaryLabel="View tour packages"
      />
    </>
  );
}
