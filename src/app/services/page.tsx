"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import ProcessStepper from "@/components/about/ProcessStepper";
import HyperHero from "@/components/hero/HyperHero";
import { serviceData } from "@/data/serviceData";
import Image from "next/image";

// Helper to get the first image from details as the "Cover"
const getServiceImage = (slug: string) => {
    const service = serviceData[slug];
    return service?.details?.[0]?.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80";
};

export default function ServicesPage() {
    // List of services in order
    const serviceKeys = ["ac", "plumbing", "electrical", "cleaning", "gas", "stoves", "handyman", "emergency"];

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] overflow-x-hidden selection:bg-[#A18262] selection:text-white">

            {/* 1. HERO: The Standard - PLATINUM/SILVER */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F3F4F6] border-b border-[#E5E5E5]">
                <HyperHero
                    color1="#D1D5DB" // Platinum
                    color2="#F3F4F6" // Silver Mist
                    initialColor="#F3F4F6"
                />

                <SectionWrapper className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#111] mb-6 block backdrop-blur-sm bg-white/30 inline-block px-4 py-2 rounded-full border border-white/50">
                        The Dakeek Standard
                    </span>
                    <h1 className="text-5xl lg:text-8xl font-serif leading-[1.0] mb-8 text-[#111] tracking-tighter">
                        Excellence is not <br />
                        <span className="italic text-[#666]">an accident.</span>
                    </h1>
                    <p className="text-xl font-light text-[#444] max-w-2xl mx-auto leading-relaxed bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg lg:shadow-none lg:bg-transparent lg:border-none lg:p-0">
                        Every service we offer is backed by 500 hours of training, fully employed technicians, and a cast-iron 30-day guarantee.
                    </p>
                </SectionWrapper>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#111]/30"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* 2. THE PROCESS (Peace of Mind) */}
            <section className="py-24 lg:py-32 px-[5vw] lg:px-[8vw] bg-white border-b border-[#E5E5E5]">
                <div className="max-w-5xl mx-auto">
                    <SectionWrapper className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[#111] mb-4">Peace of mind, standard.</h2>
                        <p className="text-[#666] font-light max-w-lg mx-auto">
                            We engineered a process that removes the anxiety of letting a stranger into your home.
                        </p>
                    </SectionWrapper>

                    <ProcessStepper steps={[
                        { id: 1, label: "You Book a Slot", description: "Choose a time that works for you. No 4-hour windows. Precise arrival times.", icon: Check },
                        { id: 2, label: "We Assign a Master", description: "Our system picks the best technician for your specific problem, not just whoever is free.", icon: ShieldCheck },
                        { id: 3, label: "Identity Verification", description: "You get a photo and name of who is coming before they knock. No surprises.", icon: ShieldCheck },
                        { id: 4, label: "White-Glove Service", description: "Shoe covers on. Floor protection down. We explain everything before we start.", icon: Check },
                        { id: 5, label: "The Follow-up", description: "We don't disappear. We check in to make sure the fix held up.", icon: Check }
                    ]} />
                </div>
            </section>

            {/* 3. RICH CATALOG (Zig-Zag with Alternating Backgrounds) */}
            {/* Removed the single container 'section' in favor of per-service sections */}
            <div className="flex flex-col">
                {serviceKeys.map((slug, index) => {
                    const service = serviceData[slug];
                    const isEven = index % 2 === 0;
                    const coverImage = getServiceImage(slug);

                    // Alternating Backgrounds: White vs Warm Alabaster
                    const bgClass = isEven ? "bg-white" : "bg-[#FAFAF9]";

                    return (
                        <section key={slug} className={`py-24 px-[5vw] lg:px-[8vw] ${bgClass}`}>
                            <div className="max-w-7xl mx-auto">
                                <SectionWrapper delay={0.1}>
                                    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                        {/* VISUAL - CLICKABLE */}
                                        <Link href={`/services/${slug}`} className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 group block cursor-pointer">
                                            <Image
                                                src={coverImage}
                                                alt={service.hero.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                                            {/* Floating Tag */}
                                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#111]">
                                                    {service.id} // {service.hero.tag}
                                                </span>
                                            </div>
                                        </Link>

                                        {/* CONTENT */}
                                        <div className="w-full lg:w-1/2 space-y-8">
                                            <div>
                                                {/* TITLE - CLICKABLE */}
                                                <Link href={`/services/${slug}`} className="block group">
                                                    <h2 className="text-4xl lg:text-5xl font-serif text-[#111] mb-4 group-hover:text-[#A18262] transition-colors">
                                                        {service.hero.title}
                                                    </h2>
                                                </Link>
                                                <p className="text-[#666] text-lg leading-relaxed">
                                                    {service.intro.heading}
                                                </p>
                                            </div>

                                            {/* Feature List (Problem/Solution) */}
                                            <div className="space-y-4 pt-4 border-t border-[#E5E5E5]">
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                                        <span className="text-red-500 text-xs font-bold">!</span>
                                                    </div>
                                                    <p className="text-sm text-[#888]">
                                                        <strong className="text-[#444] uppercase tracking-wider text-xs mr-2">Problem:</strong>
                                                        {slug === 'ac' ? "Leaks, noise, warm air, and high bills." :
                                                            slug === 'plumbing' ? "Hidden leaks, low pressure, blocked drains." :
                                                                slug === 'electrical' ? "Tripping breakers, sparking outlets, hazards." :
                                                                    slug === 'cleaning' ? "Dust, mold, allergens, unhygienic tanks." :
                                                                        slug === 'gas' ? "Gas smell, leaks, safety compliance issues." :
                                                                            slug === 'stoves' ? "Uneven heat, yellow flame, burner failure." :
                                                                                slug === 'emergency' ? "Floods, power outages, AC failure at night." :
                                                                                    "Broken furniture, mounting issues, odd jobs."}
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-green-600" />
                                                    </div>
                                                    <p className="text-sm text-[#888]">
                                                        <strong className="text-[#444] uppercase tracking-wider text-xs mr-2">Solution:</strong>
                                                        {service.hero.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="pt-4">
                                                <Link
                                                    href={`/services/${slug}`}
                                                    className="inline-flex items-center gap-2 text-[#111] font-mono text-xs uppercase tracking-widest border-b border-[#111] pb-1 hover:text-[#A18262] hover:border-[#A18262] transition-all group"
                                                >
                                                    Explore {service.hero.title}
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </SectionWrapper>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* 4. FOOTER CTA */}
            <section className="py-32 bg-[#111] text-white text-center">
                <SectionWrapper>
                    <h2 className="text-4xl lg:text-6xl font-serif italic mb-8">
                        Ready to experience the standard?
                    </h2>
                    <Link href="/contact" className="px-10 py-5 bg-white text-[#111] font-mono text-xs uppercase tracking-widest hover:bg-[#A18262] hover:text-white transition-colors rounded-sm inline-block">
                        Book a Service Now
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
