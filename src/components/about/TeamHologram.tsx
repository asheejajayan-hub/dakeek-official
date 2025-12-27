"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function HologramCard({ name, role }: { name: string; role: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm cursor-pointer group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-black/50 shadow-lg"
            >
                <div className="text-center p-4">
                    <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Avatar */}
                        <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                    <p className="text-sm text-blue-400 font-mono uppercase tracking-wider">{role}</p>
                </div>
            </div>

            {/* Holographic clean */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
        </motion.div>
    );
}

export function TeamHologram() {
    const team = [
        { name: "Ahmed Al-Dakeek", role: "Chief Engineer" },
        { name: "Sarah Tech", role: "Head of Design" },
        { name: "Mike Fixit", role: "Lead Technician" },
    ];

    return (
        <section className="py-32 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
            <div className="text-center mb-20 z-10">
                <h2 className="text-5xl font-serif text-white mb-4">The Architects</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto" />
            </div>

            <div className="flex flex-wrap gap-10 justify-center perspective-[1000px] w-full px-4">
                {team.map((member, i) => (
                    <HologramCard key={i} {...member} />
                ))}
            </div>
        </section>
    );
}
