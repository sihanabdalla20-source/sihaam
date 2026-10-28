import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

type PlanCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function PlanCTA({
  eyebrow = "Start planning",
  title = "Your next journey starts with a conversation.",
  description = "Tell us where you dream of going, and we’ll help shape the rest — thoughtfully, honestly and at your pace.",
  secondaryHref = "/products",
  secondaryLabel = "Explore tours",
}: PlanCTAProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <Image
        src="/images/cta.jpg"
        alt="Mountain lake surrounded by forest at golden hour"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="cta-veil absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full border border-white/10"
      />

      <div className="container-page relative z-10 py-20 sm:py-24 lg:py-28">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-line eyebrow-light">{eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2.45rem,5vw,4.6rem)] leading-[1.02] text-white">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-[0.96rem] leading-7 text-white/65">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="gold" showArrow>
                Contact us
              </Button>
              <Button
                href={secondaryHref}
                variant="outline-light"
                showArrow
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>

          <div className="hidden max-w-[15rem] rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md lg:block">
            <Sparkles aria-hidden="true" className="h-5 w-5 text-gold" />
            <p className="mt-4 font-display text-xl leading-snug text-white">
              Made around you.
            </p>
            <p className="mt-2 text-xs leading-5 text-white/50">
              Your dates, your pace, your kind of unforgettable.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-[0.64rem] font-bold uppercase tracking-[0.15em] text-teal-200 transition hover:text-white"
            >
              Begin an inquiry
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
