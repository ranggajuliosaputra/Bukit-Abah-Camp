import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default:
    "bg-forest text-cream shadow-lg shadow-forest/20 hover:bg-forest-2 hover:-translate-y-0.5",
  sand: "bg-sand text-forest shadow-lg shadow-black/20 hover:bg-cream hover:-translate-y-0.5",
  outline:
    "border border-forest/25 bg-transparent text-forest hover:bg-forest hover:text-cream",
  ghostLight:
    "border border-cream/30 bg-cream/5 text-cream backdrop-blur hover:bg-cream/15",
  link: "text-forest underline-offset-4 hover:underline",
} as const;

const sizes = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-13 px-8 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    className
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
