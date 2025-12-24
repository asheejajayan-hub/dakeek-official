import React, { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing = "lg", children, ...props }, ref) => {

        const spacings = {
            none: "py-0",
            sm: "py-12 md:py-16",
            md: "py-16 md:py-24",
            lg: "py-24 md:py-32",
            xl: "py-32 md:py-40",
        };

        return (
            <section
                ref={ref}
                className={cn("relative w-full overflow-hidden", spacings[spacing], className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
