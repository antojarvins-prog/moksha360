import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  type?: "service" | "testimonial" | "pricing";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, type = "service", ...props }, ref) => {
    
    const baseStyles = "rounded-xl border bg-white shadow-sm overflow-hidden";
    
    const types = {
      service: "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out border-[#E5E5E5]",
      testimonial: "bg-gray-50 border-none p-6 hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-lg",
      pricing: "border-2 border-[#13AFF0]/20 hover:border-[#13AFF0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out",
    };

    return (
      <div
        className={cn(baseStyles, types[type], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
