"use client";


import { Check, X, Shield, Award, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="bg-[#FAFAF9] min-h-screen text-[#111]">

            {/* 1. HERO */}
            <section className="relative h-[60vh] flex flex-col justify-end px-[8vw] pb-24 border-b border-[#E5E5E5] overflow-hidden bg-[#FAFAF9]">
                <div className="absolute top-0 right-0 w-[50vw] h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply"></div>

                <h1 className="relative z-10 text-[8vw] font-serif italic leading-none mb-4 text-[#111]">
                    The Academy.
                </h1>
                <p className="relative z-10 text-xl font-mono uppercase tracking-widest text-[#A18262]">
                    Masters of Craft
                </p>
            </section>

            {/* 2. THE HOOK (ELI5) */}
            <section className="px-[8vw] py-24 border-b border-[#E5E5E5] bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                        &ldquo;We don&apos;t use freelancers. We train our own masters in our own school. You can trust the person knocking on your door.&rdquo;
                    </h2>
                    <div className="w-24 h-1 bg-[#A18262] mx-auto"></div>
                </div>
            </section>

            {/* 3. VALUES GRID */}
            <section className="px-[8vw] py-32 border-b border-[#E5E5E5]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Safety */}
                    <div className="space-y-6">
                        <Shield className="w-12 h-12 text-[#A18262]" />
                        <h3 className="text-2xl font-serif italic">Safety First</h3>
                        <p className="text-[#86868b] leading-relaxed">
                            Every technician passes a strict police background check. We actively investigate their history so you don&apos;t have to worry about who is in your home.
                        </p>
                    </div>
                    {/* Skill */}
                    <div className="space-y-6">
                        <Award className="w-12 h-12 text-[#A18262]" />
                        <h3 className="text-2xl font-serif italic">The Academy</h3>
                        <p className="text-[#86868b] leading-relaxed">
                            Before they touch your home, they complete 500 hours of training in our private facility. They are tested on real AC units and real pipes.
                        </p>
                    </div>
                    {/* Respect */}
                    <div className="space-y-6">
                        <Heart className="w-12 h-12 text-[#A18262]" />
                        <h3 className="text-2xl font-serif italic">Respect</h3>
                        <p className="text-[#86868b] leading-relaxed">
                            Shoe covers. Clean uniforms. No smoking. We treat your home with more respect than our own. We leave it cleaner than we found it.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. COMPARISON TABLE */}
            <section className="px-[8vw] py-32 bg-[#111] text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-serif italic text-center mb-16">The Difference</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] border border-[#333]">
                        {/* MARKET */}
                        <div className="bg-[#222] p-12 space-y-8">
                            <h3 className="font-mono uppercase tracking-widest text-[#888]">The Market Standards</h3>
                            <ul className="space-y-4 text-[#aaa]">
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Freelancers picked up daily</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Learns on the job (your house)</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>No background checks</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Leaves a mess behind</span>
                                </li>
                            </ul>
                        </div>

                        {/* US */}
                        <div className="bg-[#1a1a1a] p-12 space-y-8 border-l-4 border-[#A18262]">
                            <h3 className="font-mono uppercase tracking-widest text-[#A18262]">The Dakeek Standard</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span>Full-time Employees on Visa</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span>500 hours Academy Training</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span>Strict Criminal Record Checks</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span>Shoe Covers & White Glove cleanup</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-[#A18262] text-white text-center">
                <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Ready to meet the team?</h2>
                <Link href="/contact" className="inline-block border border-white px-12 py-4 text-sm font-mono uppercase tracking-widest hover:bg-white hover:text-[#A18262] transition-colors">
                    Join Our Technicians
                </Link>
            </section>
        </main>
    );
}
