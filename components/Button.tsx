import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant =
  | "primary"
  | "dark"
  | "gold"
  | "light"
  | "outline-light"
  | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

const variantClasses: Record<Variant, string> = {
  primary: "btn-primary",
  dark: "btn-dark",
  gold: "btn-gold",
  light: "btn-light",
  "outline-light": "btn-outline-light",
  outline: "btn-outline",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
