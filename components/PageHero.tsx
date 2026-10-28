import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  currentPage: string;
  imagePosition?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  currentPage,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-navy-950 pb-16 pt-36 sm:min-h-[600px] sm:pb-20 lg:min-h-[640px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div aria-hidden="true" className="page-veil absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-48 top-24 h-[32rem] w-[32rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-48 h-[20rem] w-[20rem] rounded-full border border-white/10"
      />

      <div className="container-page relative z-10">
        <nav
          aria-label="Breadcrumb"
          className="hero-copy mb-10 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/45"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="h-3 w-3" />
          <span aria-current="page" className="text-white/75">
            {currentPage}
          </span>
        </nav>

        <div className="hero-copy max-w-4xl">
          <p className="eyebrow eyebrow-line eyebrow-light">{eyebrow}</p>
          <h1 className="display mt-5 text-[clamp(2.85rem,6vw,5.6rem)] leading-[0.99] text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-white/70">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
