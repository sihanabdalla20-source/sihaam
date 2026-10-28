import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Logo from "@/components/Logo";
import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 h-[34rem] w-[34rem] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 h-[22rem] w-[22rem] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.45fr_0.65fr_1fr_0.7fr] lg:gap-10 lg:py-20">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-7 text-white/55">
              Thoughtfully planned journeys to remarkable places — with local
              knowledge, beautiful stays and care in every detail.
            </p>
            <p className="display mt-8 text-2xl italic leading-snug text-gold">
              Journeys made personal.
            </p>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-teal-200/75">
              Explore
            </h2>
            <ul className="mt-5 space-y-3.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-teal-200/75">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li>
                <a
                  href={siteConfig.contact.phone.href}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  />
                  {siteConfig.contact.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.email.href}
                  className="flex items-start gap-3 break-all transition-colors hover:text-white"
                >
                  <Mail
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  />
                  {siteConfig.contact.email.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                />
                <span>
                  {siteConfig.contact.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-teal-200 transition-colors hover:text-white"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Message us on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-teal-200/75">
              Follow
            </h2>
            <ul className="mt-5 space-y-3">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {social.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-[0.68rem] leading-5 text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Photo credits:{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/60"
            >
              Unsplash
            </a>
            {" · "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Hot_air_balloons_over_valleys_near_G%C3%B6reme,_Cappadocia_at_dawn.JPG"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/60"
            >
              MusikAnimal, CC BY-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
