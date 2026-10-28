"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Users,
  X,
} from "lucide-react";
import type { Tour } from "@/lib/tours";
import { formatPrice } from "@/lib/tours";

type TourDialogProps = {
  tour: Tour;
  open: boolean;
  onClose: () => void;
};

export default function TourDialog({ tour, open, onClose }: TourDialogProps) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-navy-950/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`tour-dialog-title-${tour.slug}`}
        className="modal-in relative max-h-[94dvh] w-full overflow-hidden rounded-t-[2rem] bg-cream shadow-2xl sm:max-w-5xl sm:rounded-[2rem]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close tour details"
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-navy-950 shadow-soft transition hover:bg-white"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        <div className="grid max-h-[94dvh] overflow-y-auto md:max-h-[88vh] md:grid-cols-[0.92fr_1.08fr] md:overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-auto md:min-h-[620px]">
            <Image
              src={tour.image}
              alt={tour.imageAlt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: tour.imagePosition ?? "center" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent md:bg-gradient-to-t md:from-navy-950/75"
            />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-teal-200">
                {tour.category}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-white/75">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                {tour.destination}, {tour.country}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:max-h-[88vh] md:overflow-y-auto lg:p-10">
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.22em] text-teal-700">
              Sample itinerary
            </p>
            <h2
              id={`tour-dialog-title-${tour.slug}`}
              className="display mt-3 max-w-md text-[clamp(2rem,4vw,3rem)] leading-[1.03] text-navy-950"
            >
              {tour.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-navy-900/65">
              {tour.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-navy-900/10 bg-white/65 p-4 text-xs">
              <div className="flex items-start gap-2.5">
                <CalendarDays
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal-700"
                />
                <span>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-navy-900/40">
                    Duration
                  </span>
                  <span className="mt-1 block font-semibold text-navy-900">
                    {tour.duration}
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Users
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal-700"
                />
                <span>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-navy-900/40">
                    Best for
                  </span>
                  <span className="mt-1 block font-semibold leading-5 text-navy-900">
                    {tour.bestFor}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-navy-900/45">
                Journey highlights
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {tour.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-[0.82rem] leading-5 text-navy-900/75"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <h3 className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-navy-900/45">
                What&apos;s included
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {tour.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[0.82rem] leading-5 text-navy-900/75"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-navy-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.17em] text-navy-900/40">
                  From, per person
                </p>
                <p className="display text-3xl text-navy-950">
                  {formatPrice(tour.price)}
                </p>
              </div>
              <Link
                href={`/contact?tour=${tour.slug}`}
                onClick={onClose}
                className="btn-primary"
              >
                Inquire about this tour
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-4 text-[0.66rem] leading-5 text-navy-900/40">
              This is a sample itinerary. Final pricing and inclusions are
              confirmed in your personalised proposal.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
