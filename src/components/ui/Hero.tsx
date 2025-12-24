"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { H1, Text, Label } from "./Typography";
import { cn } from "./Button"; // using shared cn utility

interface HeroProps {
    label: string;
    headline: React.ReactNode;
    subheadline: string;
    align?: "center" | "left";
    children?: React.ReactNode;
}

export function Hero({ label, headline, subheadline, align = "center", children }: HeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Layer - Pure CSS Performance */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-100/40 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-50/50 blur-[100px]" />
            </div>

            <Container className="relative z-10 flex flex-col justify-center h-full">
                <div className={cn("max-w-4xl", align === "center" ? "mx-auto text-center" : "")}>

                    {/* Label Reveal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={cn(
                            "inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm",
                            align === "center" && "mx-auto"
                        )}>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                            <Label className="text-[10px] tracking-[0.25em]">{label}</Label>
                        </div>
                    </motion.div>

                    {/* Headline Reveal (Staggered) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8"
                    >
                        <H1>{headline}</H1>
                    </motion.div>

                    {/* Subheadline Reveal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Text size="xl" className="max-w-2xl mx-auto text-balance">
                            {subheadline}
                        </Text>
                    </motion.div>

                    {/* Optional Children (CTA) */}
                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10"
                        >
                            {children}
                        </motion.div>
                    )}

                </div>
            </Container>
        </section>
    );
}
