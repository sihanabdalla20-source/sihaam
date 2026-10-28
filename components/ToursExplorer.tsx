"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import TourCard from "@/components/TourCard";
import { tourCategories, tours, type TourCategory } from "@/lib/tours";

type ToursExplorerProps = {
  initialCategory?: string;
};

export default function ToursExplorer({ initialCategory }: ToursExplorerProps) {
  const validInitialCategory =
    initialCategory && tourCategories.includes(initialCategory as TourCategory)
      ? (initialCategory as TourCategory)
      : "All";

  const [category, setCategory] = useState<"All" | TourCategory>(
    validInitialCategory,
  );
  const [query, setQuery] = useState("");

  const filteredTours = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tours.filter((tour) => {
      const matchesCategory =
        category === "All" || tour.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          tour.name,
          tour.destination,
          tour.country,
          tour.category,
          tour.summary,
          tour.description,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const hasFilters = category !== "All" || query.trim().length > 0;

  const clearFilters = () => {
    setCategory("All");
    setQuery("");
  };

  return (
    <div id="packages">
      <div className="rounded-[1.75rem] border border-navy-900/[0.07] bg-white p-4 shadow-soft sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <label htmlFor="tour-search" className="sr-only">
              Search tours by destination or name
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-900/35"
            />
            <input
              id="tour-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a destination or tour..."
              className="field !rounded-full !py-3.5 !pl-11 !pr-11"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-navy-900/45 transition hover:bg-navy-900/5 hover:text-navy-900"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-4 lg:justify-end">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-900/45">
              <SlidersHorizontal
                aria-hidden="true"
                className="h-3.5 w-3.5 text-teal-600"
              />
              Filter by style
            </span>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-teal-700 underline decoration-teal-700/30 underline-offset-4 transition hover:text-navy-900"
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {tourCategories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[0.71rem] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
                  active
                    ? "border-navy-900 bg-navy-900 text-white shadow-sm"
                    : "border-navy-900/12 bg-cream/60 text-navy-900/65 hover:border-navy-900/30 hover:text-navy-950"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-navy-900/10 pb-4">
        <p
          role="status"
          aria-live="polite"
          className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-navy-900/45"
        >
          Showing{" "}
          <span className="text-navy-950">{filteredTours.length}</span>{" "}
          {filteredTours.length === 1 ? "journey" : "journeys"}
          {category !== "All" ? (
            <span className="text-navy-900/35"> · {category}</span>
          ) : null}
        </p>
        <p className="text-[0.7rem] text-navy-900/35">
          Every itinerary can be tailored to your dates and pace.
        </p>
      </div>

      {filteredTours.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[1.75rem] border border-dashed border-navy-900/20 bg-white/50 px-6 py-20 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-50 text-teal-700">
            <Search aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="display mt-5 text-2xl text-navy-950">
            No journeys found
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-navy-900/55">
            Try a different destination or choose another travel style. We can
            also design something completely new for you.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="btn-outline mt-6"
          >
            Show all tours
          </button>
        </div>
      )}
    </div>
  );
}
