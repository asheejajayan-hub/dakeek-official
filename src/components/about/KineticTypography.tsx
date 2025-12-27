"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function KineticTypography() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    return (
        <section ref={containerRef} className="bg-white text-black py-40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <p className="text-sm font-mono uppercase tracking-widest mb-4">Our Philosophy</p>
                <h3 className="text-4xl font-light leading-relaxed max-w-2xl">
                    We believe that <span className="font-bold underline decoration-blue-500 underline-offset-4">motion</span> creates emotion.
                    Static is boring. Dynamic is life.
                </h3>
            </div>

            <div className="flex flex-col gap-4 opacity-10">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap text-[15vw] font-black leading-none uppercase tracking-tighter">
                    PRECISION • SPEED • QUALITY •
                </motion.div>
                <motion.div style={{ x: x2 }} className="whitespace-nowrap text-[15vw] font-black leading-none uppercase tracking-tighter text-blue-600">
                    ENGINEERING • DESIGN • FUTURE •
                </motion.div>
                <motion.div style={{ x: x1 }} className="whitespace-nowrap text-[15vw] font-black leading-none uppercase tracking-tighter">
                    DAKEEK • STANDARD • ELITE •
                </motion.div>
            </div>
        </section>
    );
}
