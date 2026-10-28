import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        isCenter
          ? "mx-auto max-w-3xl items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      } ${className}`}
    >
      <div className={isCenter ? "flex flex-col items-center" : "max-w-2xl"}>
        <p className={`eyebrow eyebrow-line ${light ? "eyebrow-light" : ""}`}>
          {eyebrow}
        </p>
        <h2
          className={`display mt-4 text-[clamp(2.25rem,4.4vw,3.65rem)] leading-[1.06] ${
            light ? "text-white" : "text-navy-950"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-5 max-w-xl text-[0.98rem] leading-7 ${
              light ? "text-white/65" : "text-navy-900/65"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 text-sm font-semibold ${
            light
              ? "text-white hover:text-teal-200"
              : "text-navy-950 hover:text-teal-700"
          }`}
        >
          {action.label}
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${
              light
                ? "border-white/30 group-hover:border-teal-200"
                : "border-navy-900/15 group-hover:border-teal-600"
            }`}
          >
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      ) : null}
    </div>
  );
}
