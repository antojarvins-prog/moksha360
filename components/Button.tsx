import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-all duration-500 focus-visible:outline-none disabled:opacity-50 font-poppins active:scale-95 tracking-wide";
    const variants = {
      primary: "bg-gradient-to-r from-[#3D7500] to-[#2b5200] text-white shadow-[0_0_20px_rgba(61,117,0,0.4)] hover:shadow-[0_0_40px_rgba(61,117,0,0.7)] hover:from-[#498f00] hover:to-[#3D7500] border border-white/10",
      secondary: "bg-black/50 backdrop-blur-md border border-[#13AFF0]/50 text-[#13AFF0] shadow-[0_0_15px_rgba(19,175,240,0.2)] hover:bg-[#13AFF0]/10 hover:shadow-[0_0_30px_rgba(19,175,240,0.4)] hover:border-[#13AFF0]",
      ghost: "hover:bg-white/5 text-gray-300 hover:text-white",
    };
    const sizes = {
      sm: "h-10 px-6 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-16 px-12 text-lg",
    };
    return <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
export { Button };
