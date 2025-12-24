"use client";

import Hero2D from "../../components/Hero2D";
import { Briefcase, FileText, Wrench, ShieldAlert } from "lucide-react";

export default function CareersPage() {
    return (
        <main className="bg-[#FAFAF9] min-h-screen text-[#111]">

            {/* 1. HERO */}
            <section className="relative h-[60vh] flex flex-col justify-end px-[8vw] pb-24 border-b border-[#E5E5E5] overflow-hidden">
                <div className="absolute inset-0 opacity-50 pointer-events-none">
                    <Hero2D />
                </div>
                <h1 className="relative z-10 text-[8vw] font-serif italic leading-none mb-4">Join the Elite.</h1>
                <p className="relative z-10 text-xl font-mono uppercase tracking-widest text-[#86868b]">Careers at Dakeek</p>
            </section>

            {/* 2. THE HOOK (ELI5) */}
            <section className="px-[8vw] py-24 border-b border-[#E5E5E5] bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                        &ldquo;We are the hardest maintenance company to get hired by. We reject 99% of applicants so our clients only get the top 1% in their homes.&rdquo;
                    </h2>
                    <div className="w-24 h-1 bg-[#A18262] mx-auto"></div>
                </div>
            </section>

            {/* 3. THE GAUNTLET */}
            <section className="px-[8vw] py-32 border-b border-[#E5E5E5]">
                <h2 className="text-4xl font-serif italic text-center mb-16">The Selection Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Step 1 */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-[#111] text-white flex items-center justify-center rounded-full">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-serif italic">1. The Exam</h3>
                        <p className="text-[#86868b] leading-relaxed">
                            A rigorous written test covering physics, electrical circuits, and fluid dynamics. If you don&apos;t understand the science, you don&apos;t pass.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-[#111] text-white flex items-center justify-center rounded-full">
                            <Wrench className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-serif italic">2. The Practical</h3>
                        <p className="text-[#86868b] leading-relaxed">
                            We sabotage a unit with three hidden faults. You have 30 minutes to diagnose and fix all of them perfectly.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-[#111] text-white flex items-center justify-center rounded-full">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-serif italic">3. The Vetting</h3>
                        <p className="text-[#86868b] leading-relaxed">
                            A deep background check of your employment history, criminal record, and references. We trust you with people&apos;s homes.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. OPEN ROLES */}
            <section className="px-[8vw] py-32 bg-[#F5F5F4]">
                <h2 className="text-4xl font-serif italic text-center mb-16">Open Positions</h2>
                <div className="max-w-4xl mx-auto space-y-4">

                    {[
                        { title: "Senior HVAC Technician", req: "5+ Years Exp", desc: "Must be able to diagnose by ear." },
                        { title: "Master Plumber", req: "7+ Years Exp", desc: "Understanding of complex hydro-dynamics." },
                        { title: "Operations Manager", req: "Logistics Expert", desc: "Obsessed with punctuality and efficiency." },
                    ].map((role, i) => (
                        <div key={i} className="bg-white p-8 border border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-[#111] transition-colors">
                            <div className="flex items-start gap-4">
                                <Briefcase className="w-6 h-6 text-[#A18262] mt-1" />
                                <div>
                                    <h3 className="text-xl font-serif italic">{role.title}</h3>
                                    <p className="text-sm font-mono text-[#86868b] uppercase tracking-wide mt-1">{role.req}</p>
                                    <p className="text-[#666] mt-2">{role.desc}</p>
                                </div>
                            </div>
                            <button className="px-8 py-3 bg-[#FAFAF9] text-[#111] font-mono text-xs uppercase tracking-widest border border-[#E5E5E5] group-hover:bg-[#111] group-hover:text-white transition-colors">
                                Apply
                            </button>
                        </div>
                    ))}

                </div>
            </section>

        </main>
    );
}
