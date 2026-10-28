"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = menuRef.current?.querySelector<HTMLElement>("nav a");
    firstLink?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      (previouslyFocused ?? toggleButtonRef.current)?.focus();
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-navy-900/8 bg-cream/95 text-navy-950 shadow-[0_8px_30px_-20px_rgba(7,31,40,0.4)] backdrop-blur-xl"
            : "bg-gradient-to-b from-navy-950/55 to-transparent text-white"
        }`}
      >
        <div className="container-page flex h-[5.25rem] items-center justify-between">
          <Logo variant={solid ? "dark" : "light"} onClick={() => setOpen(false)} />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex xl:gap-10"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isContact = item.href === "/contact";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[0.82rem] font-semibold tracking-[0.025em] transition-colors duration-300 ${
                    isContact
                      ? `ml-1 rounded-full border px-5 py-2.5 ${
                          solid
                            ? "border-navy-900/20 hover:border-teal-600 hover:bg-teal-600 hover:text-white"
                            : "border-white/35 hover:border-white/70 hover:bg-white/10"
                        }`
                      : solid
                        ? "text-navy-800 hover:text-teal-700"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {!isContact ? (
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
              solid
                ? "border-navy-900/15 text-navy-950 hover:bg-navy-900/5"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-cream pt-[5.25rem] lg:hidden"
        >
          <div className="container-page flex min-h-full flex-col pb-10 pt-10">
            <p className="eyebrow eyebrow-line text-navy-900/45">Menu</p>
            <nav aria-label="Mobile navigation" className="mt-7 flex flex-col">
              {navItems.map((item, index) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="group flex items-center justify-between border-b border-navy-900/10 py-5"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] text-navy-900/35">
                        0{index + 1}
                      </span>
                      <span
                        className={`display text-[2.35rem] leading-none ${
                          active ? "text-teal-700" : "text-navy-950"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-navy-900/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-700"
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-12">
              <div className="rounded-3xl bg-navy-950 p-6 text-white">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-teal-200/80">
                  Start a conversation
                </p>
                <a
                  href={siteConfig.contact.email.href}
                  className="mt-4 flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-gold" />
                  {siteConfig.contact.email.display}
                </a>
                <a
                  href={siteConfig.contact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="h-4 w-4 text-gold"
                  />
                  Chat on WhatsApp
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-900/50 transition-colors hover:text-teal-700"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
