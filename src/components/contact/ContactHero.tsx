"use client";

import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <div className="relative z-10 space-y-6 pt-12 md:pt-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-tight">
                    Let&apos;s Fix It. <br />
                    <span className="text-blue-600">Right Now.</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-600 max-w-md"
            >
                Tell us what is broken, and we will dispatch a verified technician to your doorstep. No hassle. No waiting.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 items-center pt-4"
            >
                <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 overflow-hidden">
                            <span className="scale-125">👤</span>
                        </div>
                    ))}
                </div>
                <div className="text-sm">
                    <span className="font-bold text-slate-900">12+ Techs</span> getting ready.
                </div>
            </motion.div>
        </div>
    );
}
