import React, { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- H1 ---
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    contrast?: "high" | "medium";
}

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, contrast = "high", children, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={cn(
                    "font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]",
                    contrast === "high" ? "text-text-primary" : "text-text-secondary",
                    className
                )}
                {...props}
            >
                {children}
            </h1>
        );
    }
);
H1.displayName = "H1";

// --- H2 ---
export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, contrast = "high", children, ...props }, ref) => {
        return (
            <h2
                ref={ref}
                className={cn(
                    "font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight",
                    contrast === "high" ? "text-text-primary" : "text-text-secondary",
                    className
                )}
                {...props}
            >
                {children}
            </h2>
        );
    }
);
H2.displayName = "H2";

// --- Text ---
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: "sm" | "base" | "lg" | "xl";
    variant?: "primary" | "secondary" | "tertiary";
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size = "base", variant = "secondary", children, ...props }, ref) => {
        const sizes = {
            sm: "text-sm leading-relaxed",
            base: "text-base leading-relaxed",
            lg: "text-lg md:text-xl leading-relaxed font-light",
            xl: "text-xl md:text-2xl leading-relaxed font-light",
        };

        const variants = {
            primary: "text-text-primary",
            secondary: "text-text-secondary",
            tertiary: "text-text-tertiary",
        };

        return (
            <p
                ref={ref}
                className={cn("font-sans", sizes[size], variants[variant], className)}
                {...props}
            >
                {children}
            </p>
        );
    }
);
Text.displayName = "Text";

// --- Label (Mono) ---
export const Label = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn(
                    "font-mono text-xs uppercase tracking-[0.2em] text-accent-primary",
                    className
                )}
                {...props}
            >
                {children}
            </p>
        );
    }
);
Label.displayName = "Label";
