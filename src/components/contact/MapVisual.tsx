"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MapVisual() {
    const [activeTechs, setActiveTechs] = useState([
        { id: 1, x: 20, y: 30 },
        { id: 2, x: 45, y: 60 },
        { id: 3, x: 70, y: 40 },
    ]);

    // Simulate movement
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTechs(prev => prev.map(tech => ({
                ...tech,
                x: tech.x + (Math.random() - 0.5) * 5,
                y: tech.y + (Math.random() - 0.5) * 5
            })));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-[#e5e5e5] border border-white/20 shadow-2xl">
            {/* Map Placeholder (Stylized) */}
            <div className="absolute inset-0 bg-slate-200 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center grayscale contrast-50 blur-[1px]"></div>

            {/* Radar Sweep Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent animate-spin-slow w-[200%] h-[200%] -left-1/2 -top-1/2 pointer-events-none"></div>

            {/* Active Techs Markers */}
            {activeTechs.map((tech) => (
                <motion.div
                    key={tech.id}
                    className="absolute w-4 h-4"
                    animate={{ left: `${tech.x}%`, top: `${tech.y}%` }}
                    transition={{ duration: 3, ease: "linear" }}
                >
                    <div className="relative flex items-center justify-center w-full h-full">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 border border-white"></span>

                        {/* Tooltip on hover */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Tech #{tech.id} (Available)
                        </div>
                    </div>
                </motion.div>
            ))}

            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-600">Live Coverage: Dubai</span>
            </div>
        </div>
    );
}
