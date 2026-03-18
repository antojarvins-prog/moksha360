import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  type?: "service" | "testimonial" | "pricing";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, type = "service", ...props }, ref) => {
    const baseStyles = "rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10";
    const types = {
      service: "hover:border-[#3D7500]/50 hover:shadow-[0_0_40px_rgba(61,117,0,0.15)] hover:-translate-y-3 transition-all duration-500",
      testimonial: "hover:border-[#13AFF0]/50 hover:-translate-y-3 transition-all duration-500",
      pricing: "border-[#13AFF0]/30 hover:border-[#13AFF0] hover:shadow-[0_0_40px_rgba(19,175,240,0.2)] transition-all duration-500 hover:-translate-y-3",
    };
    return (
      <div className={cn(baseStyles, types[type], className)} ref={ref} {...props} />
    );
  }
);
Card.displayName = "Card";
export { Card };
