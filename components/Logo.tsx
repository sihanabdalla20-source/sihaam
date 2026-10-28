import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  onClick?: () => void;
};

export default function Logo({ variant = "dark", onClick }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Siham Tours — home"
      className="group inline-flex items-center gap-3"
    >
      <span
        className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
          isLight
            ? "border-white/35 text-white"
            : "border-navy-900/20 text-navy-900"
        }`}
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          aria-hidden="true"
          className="h-9 w-9"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
          <circle cx="22" cy="15.5" r="3.4" fill="#c6a15b" />
          <path
            d="M8.5 25.3c4.5-3.4 8.3-3.4 12.6 0 4.4 3.5 8.2 3.5 14.4 0"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M8.5 31.2c4.5-3.4 8.3-3.4 12.6 0 4.4 3.5 8.2 3.5 14.4 0"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans text-[1.02rem] font-extrabold uppercase tracking-[0.24em] ${
            isLight ? "text-white" : "text-navy-950"
          }`}
        >
          Siham
        </span>
        <span
          className={`mt-1.5 font-sans text-[0.52rem] font-semibold uppercase tracking-[0.47em] ${
            isLight ? "text-white/60" : "text-navy-900/55"
          }`}
        >
          Tours
        </span>
      </span>
    </Link>
  );
}
