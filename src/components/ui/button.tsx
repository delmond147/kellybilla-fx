"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "accent" | "glass" | "solid";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
        // Determine static classes based on variant & size
        const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 font-sans";

        const variants = {
            primary: "bg-[#1E65F3] text-white hover:bg-[#8BB4F9] hover:text-black",
            secondary: "bg-secondary text-foreground border border-border hover:bg-secondary/80",
            accent: "bg-[#E40914] text-white hover:brightness-110",
            glass: "glass text-foreground hover:bg-foreground/10",
            solid: "bg-foreground text-background hover:bg-foreground/90 transition-colors",
        };

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 px-4",
            lg: "h-14 px-8 text-lg font-semibold tracking-wide",
            icon: "h-11 w-11",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseClasses, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
