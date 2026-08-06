import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_28px_rgba(8,26,82,0.16)] hover:-translate-y-0.5 hover:bg-[#0a2264] hover:shadow-[0_18px_36px_rgba(8,26,82,0.22)]",
  secondary:
    "bg-accent text-primary shadow-[0_14px_28px_rgba(199,162,74,0.18)] hover:-translate-y-0.5 hover:bg-[#d7b35a] hover:shadow-[0_18px_36px_rgba(199,162,74,0.24)]",
  outline:
    "border border-primary/14 bg-white text-primary shadow-[0_10px_24px_rgba(8,26,82,0.06)] hover:-translate-y-0.5 hover:border-[#d7b35a]/55 hover:bg-[#fffaf1] hover:shadow-[0_16px_32px_rgba(199,162,74,0.14)]",
  whatsapp:
    "border border-black/10 bg-[#68cf67] text-white shadow-[0_14px_28px_rgba(32,186,90,0.18)] hover:-translate-y-0.5 hover:bg-[#20BA5A] hover:shadow-[0_18px_34px_rgba(32,186,90,0.24)]",
} as const;

const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-12 px-6 text-sm sm:h-14 sm:px-8 sm:text-lg",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: keyof typeof buttonSizes;
  variant?: keyof typeof buttonVariants;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-[1rem] font-medium tracking-[0.02em] transition-all duration-200 ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
