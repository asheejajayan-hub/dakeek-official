"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Plus, Wrench } from "lucide-react";

export default function Services() {
    const services = [
        {
            id: "01",
            title: "AC & HVAC",
            tagline: "Climate Calibration",
            problem: "Blowing warm air, unusual noise, water dropping, or high DEWA bills.",
            solution: "We do not just clean filters. We calibrate the entire thermodynamic cycle.",
            specs: [
                { label: "Gas Pressure", value: "R410A / R22 Check" },
                { label: "Airflow", value: "Anemometer Test" },
                { label: "Coil Status", value: "Chemical Wash" },
            ],
            tools: "Fluke 117 Multimeter, Testo 550 Digital Manifold"
        },
        {
            id: "02",
            title: "Plumbing",
            tagline: "Fluid Generative Flow",
            problem: "Hidden leaks, low water pressure, blocked drains, or water hammer noises.",
            solution: "Hydraulic balancing and leak detection using ultrasonic sensors.",
            specs: [
                { label: "Pump Pressure", value: "Bar Config" },
                { label: "Heater", value: "Element Check" },
                { label: "Drainage", value: "Snake & Cam" },
            ],
            tools: "Ridgid Snake, Flir Thermal Camera"
        },
        {
            id: "03",
            title: "Electrical",
            tagline: "Power Distribution",
            problem: "Tripping breakers, flickering lights, burning smell, or sparking outlets.",
            solution: "Load balancing and thermal scanning of distribution boards.",
            specs: [
                { label: "Load", value: "Amperage Test" },
                { label: "Safety", value: "ELCB Trip Test" },
                { label: "Wiring", value: "Insulation Check" },
            ],
            tools: "Megger Insulation Tester, Flir C5"
        },
        {
            id: "04",
            title: "Duct Cleaning",
            tagline: "Air Quality Control",
            problem: "Dust accumulation, moldy smells, increased allergies/asthma triggers.",
            solution: "Rotary brush extraction and organic disinfection fogging.",
            specs: [
                { label: "Method", value: "Rotary Brush" },
                { label: "Chemical", value: "Municipality Approved" },
                { label: "Result", value: "99.9% Clean" },
            ],
            tools: "Rotomax Duct Machine, Fogger"
        },
        {
            id: "05",
            title: "Gas Systems",
            tagline: "Hydrocarbon Safety",
            problem: "Gas smell, stove clicking but not lighting, or low flame intensity.",
            solution: "Certified pressure testing and solenoid valve replacement.",
            specs: [
                { label: "Leak Test", value: "Soap & Digital" },
                { label: "Parts", value: "LPG Certified" },
                { label: "Compliance", value: "Civil Defense" },
            ],
            tools: "Gas Sniffer, Manometer"
        },
        {
            id: "06",
            title: "Stove Repair",
            tagline: "Thermal Precision",
            problem: "Oven not heating evenly, burner malfunctions, or glass door issues.",
            solution: "Thermocouple calibration and burner nozzle deep cleaning.",
            specs: [
                { label: "Ignition", value: "Spark Test" },
                { label: "Flame", value: "Blue/Stable" },
                { label: "Safety", value: "Shut-off Check" },
            ],
            tools: "Multimeter, Wrenches"
        },
        {
            id: "07",
            title: "Water Tanks",
            tagline: "Purity Assurance",
            problem: "Discolored water, bad taste, or sediment buildup in taps.",
            solution: "Drain, scrub, and sterilize using municipality-grade chlorine tabs.",
            specs: [
                { label: "Sediment", value: "Removed" },
                { label: "Bacteria", value: "Eliminated" },
                { label: "System", value: "Flushed" },
            ],
            tools: "High-Pressure Washer, Wet Vac"
        },
        {
            id: "08",
            title: "Kitchen Equipment",
            tagline: "Culinary Uptime",
            problem: "Commercial fridge warm, dishwasher leaking, or hood fan stopped.",
            solution: "Component-level repair for industrial and high-end home appliances.",
            specs: [
                { label: "Compressor", value: "Amp Draw" },
                { label: "Seals", value: "Vacuum Test" },
                { label: "Motor", value: "RPM Check" },
            ],
            tools: "Refrigeration Guages, Electrical Tester"
        },
        {
            id: "09",
            title: "Painting",
            tagline: "Surface Restoration",
            problem: "Cracked walls, peeling paint, water damage stains, or faded exterior.",
            solution: "Surface preparation, priming, and multi-coat application.",
            specs: [
                { label: "Finish", value: "Matte/Silk" },
                { label: "Edges", value: "Laser Sharp" },
                { label: "Durability", value: "Washable" },
            ],
            tools: "Airless Sprayer, Rollers"
        },
        {
            id: "10",
            title: "Handyman",
            tagline: "Precision Mounting",
            problem: "Curtain rails falling, crooked TV mounting, or furniture assembly.",
            solution: "Laser-leveled drilling and heavy-duty anchoring systems.",
            specs: [
                { label: "Level", value: "Digital Laser" },
                { label: "Anchor", value: "Load Rated" },
                { label: "Mess", value: "Zero Dust" },
            ],
            tools: "Hammer Drill, Laser Level"
        },
        {
            id: "11",
            title: "Emergency 24/7",
            tagline: "Rapid Response",
            problem: "power outage, burst pipe, major gas leak, or AC failure in summer.",
            solution: "Priority dispatch motorcycle unit for sub-45 minute arrival.",
            specs: [
                { label: "Time", value: "< 45 Mins" },
                { label: "Availability", value: "24/7/365" },
                { label: "Type", value: "Critical" },
            ],
            tools: "Rapid Response Kit"
        },
        {
            id: "12",
            title: "Custom Projects",
            tagline: "Bespoke Solutions",
            problem: "Renovations, weird noises, home automation, or custom fabrication.",
            solution: "Turnkey project management from design to execution.",
            specs: [
                { label: "Scope", value: "Unlimited" },
                { label: "Design", value: "In-House" },
                { label: "Quality", value: "Premium" },
            ],
            tools: "Workshop, CAD Station"
        }
    ];

    return (
        <main className="min-h-screen w-full bg-[#FAFAF9] text-[#111] pt-32 pb-20 relative">
            <div className="fixed top-32 left-[5vw] w-fit z-10 hidden lg:block">
                <Link href="/" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#86868b] hover:text-[#111] transition-colors mb-12">
                    <ArrowLeft className="w-3 h-3" /> Back
                </Link>
                <div className="space-y-4">
                    {services.map(s => (
                        <Link key={s.id} href={`#svc-${s.id}`} className="block text-xs font-mono text-[#86868b] hover:text-[#A18262] transition-colors">{s.id} {'//'} {s.title}</Link>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto px-[5vw] lg:px-0">
                <header className="mb-32 border-b border-[#E5E5E5] pb-12">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#86868b] mb-4 block">
                        Technical Specifications
                    </span>
                    <h1 className="text-6xl font-serif font-light mb-8">
                        The Manual.
                    </h1>
                    <p className="text-lg font-light text-[#444] max-w-xl leading-relaxed">
                        We don&apos;t guess. We measure. Below are the standard operating procedures for our core interventions.
                    </p>
                </header>

                <div className="space-y-48">
                    {services.map((svc) => (
                        <section key={svc.id} id={`svc-${svc.id}`} className="scroll-mt-32 relative group">
                            {/* Decorative ID */}
                            <span className="absolute -left-12 top-0 text-8xl font-serif font-bold text-[#E5E5E5] -z-10 select-none opacity-50 group-hover:text-[#F0F0F0] transition-colors">
                                {svc.id}
                            </span>

                            <div className="mb-8">
                                <h2 className="text-4xl font-serif italic mb-2">{svc.title}</h2>
                                <span className="font-mono text-xs text-[#A18262] uppercase tracking-widest">{svc.tagline}</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Plus className="w-3 h-3 text-red-400" /> The Problem
                                    </h4>
                                    <p className="text-sm text-[#666] leading-relaxed">{svc.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Check className="w-3 h-3 text-emerald-500" /> Our Solution
                                    </h4>
                                    <p className="text-sm text-[#111] leading-relaxed">{svc.solution}</p>
                                </div>
                            </div>

                            {/* Specs Table */}
                            <div className="bg-white border border-[#E5E5E5] p-8 mb-8">
                                <h4 className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-6 border-b border-[#E5E5E5] pb-2">Technical Data</h4>
                                <div className="grid grid-cols-3 gap-8">
                                    {svc.specs.map((spec, i) => (
                                        <div key={i}>
                                            <span className="block text-xs text-[#86868b] mb-1">{spec.label}</span>
                                            <span className="block text-sm font-medium">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="flex items-center gap-4 text-xs font-mono text-[#86868b] bg-[#F5F5F7] p-4 w-fit rounded-full">
                                <Wrench className="w-3 h-3" />
                                <span>EQUIPMENT: {svc.tools}</span>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
