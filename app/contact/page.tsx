import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";
import { getTourBySlug } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Siham Tours. Share your travel plans, ask a question or inquire about a tour package by phone, email, WhatsApp or our contact form.",
  alternates: {
    canonical: "/contact",
  },
};

type ContactPageProps = {
  searchParams: Promise<{ tour?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const tourSlug = Array.isArray(params.tour) ? params.tour[0] : params.tour;
  const selectedTour = tourSlug ? getTourBySlug(tourSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s plan something{" "}
            <span className="italic text-gold">beautiful.</span>
          </>
        }
        description="A question, a date in mind or simply a place you've always wanted to see — we'd love to hear from you."
        image="/images/launch.jpg"
        imageAlt="Travelers exploring a beautiful destination together"
        currentPage="Contact"
        imagePosition="center"
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
            <Reveal className="min-w-0">
              <div className="min-w-0 rounded-[2rem] border border-navy-900/[0.07] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
                <p className="eyebrow eyebrow-line">Send an inquiry</p>
                <h2 className="display mt-4 text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.05] text-navy-950">
                  Tell us about the journey you have in mind.
                </h2>
                <p className="mt-4 max-w-xl text-[0.9rem] leading-7 text-navy-900/58">
                  Share as much or as little as you like. A member of the Siham
                  Tours team will reply with thoughtful next steps.
                </p>

                {selectedTour ? (
                  <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-teal-600/15 bg-teal-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-teal-700">
                        <Sparkles aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-teal-800/60">
                          Inquiring about
                        </p>
                        <p className="mt-1 text-sm font-semibold text-navy-950">
                          {selectedTour.name}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/products"
                      className="inline-flex shrink-0 items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-teal-800 transition-colors hover:text-navy-950"
                    >
                      Change tour
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ) : null}

                <div className="mt-8">
                  <ContactForm initialTour={selectedTour?.name} />
                </div>
              </div>
            </Reveal>

            <div className="min-w-0 space-y-4 lg:sticky lg:top-28">
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-[2rem] bg-navy-950 p-7 text-white shadow-lift sm:p-8">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-teal-200/70">
                    Talk to a real person
                  </p>
                  <h2 className="display mt-3 text-[2rem] leading-tight text-white">
                    We&apos;re here to help.
                  </h2>
                  <p className="mt-3 text-[0.83rem] leading-6 text-white/50">
                    Prefer a conversation? Reach us directly by phone, email or
                    WhatsApp.
                  </p>

                  <div className="mt-7 space-y-1">
                    <a
                      href={siteConfig.contact.phone.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/20 hover:bg-white/5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/8 text-gold">
                        <Phone aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.57rem] font-bold uppercase tracking-[0.16em] text-white/35">
                          Phone
                        </span>
                        <span className="mt-1 block truncate text-sm font-semibold text-white">
                          {siteConfig.contact.phone.display}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="ml-auto h-4 w-4 shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>

                    <a
                      href={siteConfig.contact.email.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/20 hover:bg-white/5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/8 text-gold">
                        <Mail aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.57rem] font-bold uppercase tracking-[0.16em] text-white/35">
                          Email
                        </span>
                        <span className="mt-1 block truncate text-sm font-semibold text-white">
                          {siteConfig.contact.email.display}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="ml-auto h-4 w-4 shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>
                  </div>

                  <a
                    href={siteConfig.contact.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-white text-navy-950 hover:-translate-y-0.5 hover:bg-sand-50 mt-3 w-full"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="h-4 w-4 text-teal-700"
                    />
                    Chat on WhatsApp
                  </a>

                  <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5">
                    <Clock3
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    />
                    <div>
                      <p className="text-[0.57rem] font-bold uppercase tracking-[0.16em] text-white/35">
                        Office hours
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/60">
                        {siteConfig.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="rounded-[1.75rem] border border-navy-900/10 bg-sand-50 p-7">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-teal-700 shadow-sm">
                      <MapPin aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-navy-900/40">
                        Office
                      </p>
                      <address className="mt-2 not-italic text-sm leading-6 text-navy-900/70">
                        {siteConfig.contact.address.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      <a
                        href={siteConfig.map.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-teal-800 transition-colors hover:text-navy-950"
                      >
                        Open map
                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="rounded-[1.75rem] border border-navy-900/10 bg-white p-7">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-navy-900/40">
                    Follow the journeys
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {siteConfig.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/12 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.08em] text-navy-900/65 transition-colors hover:border-navy-900 hover:text-navy-950"
                      >
                        {social.label}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3 w-3"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-end lg:gap-12">
            <Reveal>
              <p className="eyebrow eyebrow-line">Our location</p>
              <h2 className="display mt-4 text-[clamp(2.15rem,4vw,3.25rem)] leading-[1.05] text-navy-950">
                Find us on the map.
              </h2>
              <p className="mt-4 text-[0.88rem] leading-7 text-navy-900/58">
                {siteConfig.map.label}
              </p>
              <a
                href={siteConfig.map.link}
                target="_blank"
                rel="noreferrer"
                className="text-link mt-5"
              >
                Open in maps
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="map-frame relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-navy-900/10 bg-sand-200 shadow-soft sm:aspect-[16/8]">
                <iframe
                  src={siteConfig.map.embedUrl}
                  title={`Map showing ${siteConfig.map.label}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-4 left-4 max-w-[17rem] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-soft backdrop-blur-sm">
                  <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-navy-950">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-teal-700" />
                    {siteConfig.map.label}
                  </p>
                  <p className="mt-2 text-[0.66rem] leading-5 text-navy-900/45">
                    {siteConfig.map.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
