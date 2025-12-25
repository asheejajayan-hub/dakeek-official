"use client";

import React, { useRef } from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface KineticTextProps extends HTMLMotionProps<"h1"> {
    children: string;
    className?: string;
    as?: React.ElementType;
}

export default function KineticText({ children, className, as: Component = "h1", ...props }: KineticTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Split text into words
    const words = children.split(" ");

    // Cast Component to any to avoid strict polymorphic type issues with refs and children
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Tag = Component as any;



    return (
        <Tag ref={ref} className={cn("flex flex-wrap gap-x-[0.3em]", className)} {...props}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden inline-flex">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1], // Kinetic ease
                            delay: i * 0.1,
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}
