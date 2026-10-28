import type { Metadata } from "next";
import { Compass, Info, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import PlanCTA from "@/components/PlanCTA";
import Reveal from "@/components/Reveal";
import ToursExplorer from "@/components/ToursExplorer";

export const metadata: Metadata = {
  title: "Our Tour Packages",
  description:
    "Explore Siham Tours' sample tour packages — from island escapes and cultural journeys to safaris and family holidays. Filter by travel style and find your next journey.",
  alternates: {
    canonical: "/products",
  },
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  return (
    <>
      <PageHero
        eyebrow="Find your next journey"
        title={
          <>
            Our Tour <span className="italic text-gold">Packages</span>
          </>
        }
        description="Thoughtfully composed starting points for every kind of traveler. Explore, compare and then let us shape the journey around you."
        image="/images/istanbul.jpg"
        imageAlt="Historic waterfront architecture in Istanbul at sunset"
        currentPage="Products"
        imagePosition="center"
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="grid gap-8 pb-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
            <Reveal>
              <p className="eyebrow eyebrow-line">The collection</p>
              <h2 className="display mt-4 max-w-2xl text-[clamp(2.35rem,4.6vw,3.85rem)] leading-[1.04] text-navy-950">
                Journeys with room to become yours.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-[0.94rem] leading-7 text-navy-900/60">
                Filter by travel style, search for a destination, or open any
                journey to see the details. Every package is a sample itinerary
                — a thoughtful starting point we can tailor to your dates,
                interests and budget.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-navy-900/45">
                <span className="inline-flex items-center gap-2">
                  <Compass aria-hidden="true" className="h-3.5 w-3.5 text-teal-700" />
                  Made to be adapted
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                  Handpicked stays
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ToursExplorer initialCategory={categoryParam} />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 grid gap-5 rounded-[1.75rem] border border-navy-900/10 bg-sand-50 p-6 sm:grid-cols-[auto_1fr] sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-teal-700 shadow-sm">
                <Info aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[0.95rem] font-bold text-navy-950">
                  A note on pricing
                </h2>
                <p className="mt-2 max-w-3xl text-[0.82rem] leading-6 text-navy-900/55">
                  Prices shown are indicative sample starting prices per person,
                  based on two travelers sharing. Final pricing depends on your
                  travel dates, chosen accommodation, group size and inclusions.
                  We&apos;ll always confirm everything clearly before you book.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PlanCTA
        eyebrow="Make it yours"
        title="Found a starting point? Let's shape the rest together."
        description="Tell us which journey caught your eye, or describe the trip you have in mind. We'll come back with thoughtful options and honest advice."
        secondaryHref="/about"
        secondaryLabel="How we work"
      />
    </>
  );
}
