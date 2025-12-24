"use client";

import React from "react";
import Link from "next/link";

export default function Blog() {
    const articles = [
        {
            id: 1,
            title: "The Invisible Hazard: Why AC Duct Cleaning is Non-Negotiable in Dubai",
            date: "OCT 12, 2025",
            cat: "AIR QUALITY",
            excerpt: "Accumulated dust and mold in cooling systems are the primary cause of indoor respiratory issues. Here is the technical breakdown."
        },
        {
            id: 2,
            title: "Load Balancing: Preventing Electrical Failures in Summer",
            date: "SEP 28, 2025",
            cat: "ELECTRICAL",
            excerpt: "As temperatures rise, DB boards overheat. Proper load distribution optimization can save your property from blackouts."
        },
        {
            id: 3,
            title: "Restaurant Compliance: Kitchen Exhaust Regulations 2025",
            date: "AUG 15, 2025",
            cat: "COMMERCIAL",
            excerpt: "Civil Defense updates regarding grease trap maintenance and hood cleaning frequencies for F&B outlets."
        }
    ];

    return (
        <main className="min-h-screen w-full bg-[#FAFAF9] text-[#111] pt-32 pb-20 px-[5vw] relative">
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <header className="mb-20 max-w-4xl border-b border-[#00000010] pb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#888] mb-4 block">Technical Journal</span>
                <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Insights & Standards.</h1>
            </header>

            <div className="grid grid-cols-1 gap-16 max-w-5xl">
                {articles.map((art) => (
                    <article key={art.id} className="group cursor-pointer">
                        <div className="flex flex-col md:flex-row gap-8 items-baseline">
                            <span className="font-mono text-xs text-[#888] w-32 shrink-0">{art.date}</span>
                            <div className="flex-1">
                                <span className="text-xs font-mono text-[#A18262] uppercase tracking-widest mb-2 block">{art.cat}</span>
                                <h2 className="text-3xl font-serif italic mb-4 group-hover:text-[#666] transition-colors">{art.title}</h2>
                                <p className="text-[#444] leading-relaxed max-w-2xl">{art.excerpt}</p>
                                <Link href={`/blog/${art.id}`} className="inline-block mt-4 text-xs font-bold uppercase underline decoration-[#00000020] hover:decoration-[#111] underline-offset-4">
                                    Read Analysis
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
