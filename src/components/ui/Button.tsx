"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "lucide-react";

// Utility for class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {

        const variants: Record<string, string> = {
            primary: "bg-text-primary text-bg-primary hover:bg-black/90 active:scale-[0.98]",
            secondary: "bg-bg-secondary text-text-primary border border-stone-200 hover:border-stone-400 active:scale-[0.98]",
            outline: "bg-transparent text-text-primary border border-text-primary/10 hover:border-text-primary active:scale-[0.98]",
            ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-stone-100/50",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs tracking-wider",
            md: "h-12 px-6 text-sm tracking-widest",
            lg: "h-14 px-8 text-sm tracking-widest",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "group relative inline-flex items-center justify-center whitespace-nowrap rounded-none font-mono uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children as React.ReactNode}
                    {withArrow && (
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                </span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, cn };
