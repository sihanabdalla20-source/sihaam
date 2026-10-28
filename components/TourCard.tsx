"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import TourDialog from "@/components/TourDialog";
import { formatPrice, type Tour } from "@/lib/tours";

type TourCardProps = {
  tour: Tour;
  priority?: boolean;
};

export default function TourCard({ tour, priority = false }: TourCardProps) {
  const [open, setOpen] = useState(false);
  const closeDialog = useCallback(() => setOpen(false), []);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-navy-900/[0.06] bg-white shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            className="image-zoom object-cover"
            style={{ objectPosition: tour.imagePosition ?? "center" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent opacity-70"
          />
          <span className="pill absolute left-4 top-4 border-white/30 bg-navy-950/55 text-[0.63rem] text-white">
            {tour.category}
          </span>
          <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-navy-950 shadow-soft backdrop-blur-sm">
            From {formatPrice(tour.price)}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-navy-900/45">
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-teal-600" />
              {tour.destination}, {tour.country}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
              {tour.duration}
            </span>
          </div>

          <h3 className="display mt-4 text-[1.65rem] leading-[1.12] text-navy-950">
            {tour.name}
          </h3>
          <p className="mt-3 line-clamp-2 text-[0.86rem] leading-6 text-navy-900/60">
            {tour.summary}
          </p>

          <div className="mt-auto pt-5">
            <div className="mb-4 flex items-end justify-between border-t border-navy-900/10 pt-4">
              <div>
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.17em] text-navy-900/40">
                  From, per person
                </p>
                <p className="display mt-1 text-[1.65rem] leading-none text-navy-950">
                  {formatPrice(tour.price)}
                </p>
              </div>
              <span className="mb-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-teal-700">
                Tailor-made
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-haspopup="dialog"
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-navy-900/15 px-3 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                View details
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </button>
              <Link
                href={`/contact?tour=${tour.slug}`}
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-3 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-teal-600"
              >
                Inquire now
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <TourDialog tour={tour} open={open} onClose={closeDialog} />
    </>
  );
}
