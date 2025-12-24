import React, { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
    ({ as = "div", className, children, ...props }, ref) => {
        const Component = as as any;
        return (
            <Component
                ref={ref}
                className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-12", className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
Container.displayName = "Container";

export { Container };
