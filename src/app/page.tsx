"use client";
// HMR Trigger

import { IconAC, IconDucts, IconKitchen, IconElectrical, IconPlumbing, IconTanks, IconStoves, IconGas, IconHVAC, IconAMC, IconPainting, IconEmergency } from "../components/ServiceIcons";
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero2D from "../components/Hero2D"; // Keeping for fallback/reference if needed
import HyperHero from "../components/HyperHero"; // The 2026 Edition
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
   const container = useRef(null);
   const tl = useRef<gsap.core.Timeline | null>(null);

   gsap.registerPlugin(ScrollTrigger);

   useGSAP(() => {
      // Hero Animation Sequence - Relies on Global Defaults (Slow/Heavy)
      tl.current = gsap.timeline()
         .from(".hero-line-1", { y: 100, opacity: 0, delay: 0.2 })
         .from(".hero-line-2", { y: 100, opacity: 0 }, "-=0.8") // Overlap
         .from(".hero-sub", { y: 30, opacity: 0 }, "-=0.8")
         .from(".hero-cta", { y: 20, opacity: 0 }, "-=0.8");

      // Ticker Animation
      gsap.to(".ticker-track", {
         xPercent: -50,
         ease: "none",
         duration: 30,
         repeat: -1
      });

   }, { scope: container });

   return (
      <main ref={container} className="relative min-h-screen w-full selection:bg-[#A18262] selection:text-white bg-[#FAFAF9] text-[#111] overflow-x-hidden">

         {/* 1. HERO: The Empty Canvas (As Requested) */}
         <section id="hero" className="relative h-screen w-full bg-[#FAFAF9] border-b border-[#E5E5E5]">
            {/* Leaving empty for future redo */}
         </section>

         {/* 2. SOCIAL PROOF: General Trust */}
         <section className="w-full border-b border-[#E5E5E5] bg-white py-6 overflow-hidden flex items-center">
            <div className="ticker-track flex gap-24 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#A18262] opacity-90">
               {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-24">
                     <span className="flex items-center gap-3"><ShieldCheck className="w-4 h-4" /> PRIVACY GUARANTEED</span>
                     <span className="flex items-center gap-3"><Award className="w-4 h-4" /> TRUSTED BY FAMILIES</span>
                     <span className="flex items-center gap-3">RESIDENTIAL SPECIALISTS</span>
                     <span className="flex items-center gap-3">ALWAYS ON TIME</span>
                  </div>
               ))}
            </div>
         </section>

         {/* 3. PHILOSOPHY: The Manifesto (Compact Edition) */}
         <section className="px-[8vw] py-12 border-b border-[#E5E5E5] bg-[#F5F5F4]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
               {/* Left: Label (Vertical on desktop?) or just standard */}
               <span className="shrink-0 font-mono text-xs text-[#A18262] uppercase tracking-[0.2em] pt-2">The Philosophy</span>

               {/* Right: The Text (Tight & Bold) */}
               <h2 className="text-2xl md:text-4xl font-serif leading-[1.2] text-[#111] font-light max-w-4xl">
                  We believe your home is a sanctuary. It is not just about fixing what is broken, but preserving your <span className="italic text-[#A18262]">peace of mind</span>.
               </h2>
            </div>
         </section>

         {/* 4. THE COLLECTION (Formerly Matrix) - Restored from v2.0 */}
         <section id="services" className="w-full px-[8vw] py-16 space-y-16 bg-[#FAFAF9]">
            <div className="flex justify-between items-end border-b border-[#E5E5E5] pb-8">
               <div>
                  <span className="block font-mono text-xs text-[#A18262] uppercase tracking-[0.2em] mb-4">The Scope</span>
                  <h2 className="text-4xl font-serif italic text-[#111]">Our Services</h2>
               </div>
               <Link href="/services" className="text-xs font-mono text-[#86868b] hover:text-[#111] transition-colors uppercase tracking-widest">Full Specifications</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E5E5]">
               {[
                  {
                     title: "AC",
                     href: "/services/ac",
                     icon: IconAC,
                     features: ["Precision Cooling", "Install & Repair", "Split / Central"]
                  },
                  {
                     title: "Plumbing",
                     href: "/services/plumbing",
                     icon: IconPlumbing,
                     features: ["Water Systems", "Leak Detection", "Pumps & Heaters"]
                  },
                  {
                     title: "Electrical",
                     href: "/services/electrical",
                     icon: IconElectrical,
                     features: ["Power Distribution", "Load Balancing", "Safety Systems"]
                  },
                  {
                     title: "Painting",
                     href: "/services/painting",
                     icon: IconPainting,
                     features: ["Surface Finish", "Restoration", "Waterproofing"]
                  },
                  {
                     title: "Ducts",
                     href: "/services/ducts",
                     icon: IconDucts,
                     features: ["Air Quality", "Sanitization", "Flow Optimization"]
                  },
                  {
                     title: "Tanks",
                     href: "/services/tanks",
                     icon: IconTanks,
                     features: ["Hygiene Control", "Sterilization", "Inspection"]
                  },
                  {
                     title: "Stoves",
                     href: "/services/stoves",
                     icon: IconStoves,
                     features: ["Gas Appliances", "Calibration", "Burner Service"]
                  },
                  {
                     title: "Gas",
                     href: "/services/gas",
                     icon: IconGas,
                     features: ["Central Systems", "Safety Valves", "Leak Detection"]
                  },
                  {
                     title: "Kitchen",
                     href: "/services/kitchen",
                     icon: IconKitchen,
                     features: ["Exhaust Degreasing", "Fan Maintenance", "Code Compliance"]
                  },
                  {
                     title: "HVAC",
                     href: "/services/hvac",
                     icon: IconHVAC,
                     features: ["Commercial Chilled Water", "FAHU / AHU", "Tower Systems"]
                  },
                  {
                     title: "AMC",
                     href: "/services/amc",
                     icon: IconAMC,
                     features: ["Annual Contracts", "Priority Service", "Preventative Care"]
                  },
                  {
                     title: "Emergency",
                     href: "/services/emergency",
                     icon: IconEmergency,
                     features: ["Critical Failure", "24/7 Response", "Immediate Dispatch"],
                     variant: "emergency"
                  }
               ].map((service, index) => (
                  <ServiceCard
                     key={index}
                     title={service.title}
                     href={service.href}
                     icon={service.icon}
                     features={service.features}
                     // @ts-expect-error variant string literal check
                     variant={service.variant}
                  />
               ))}
            </div>
         </section>

         {/* 6. HOW IT WORKS (Human Process) - Compact Revamp */}
         <section className="w-full bg-[#FAFAF9] pt-0 pb-16 border-b border-[#E5E5E5] overflow-hidden">
            <div className="px-[8vw] mb-12">
               <span className="block font-mono text-xs text-[#A18262] uppercase tracking-[0.2em] mb-4">How it Works</span>
               <h2 className="text-5xl font-serif text-[#111]">Simplicity Itself.</h2>
            </div>

            <div className="px-[8vw] grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#E5E5E5]">
               {/* Step 01 */}
               <div className="py-10 pr-8 border-b md:border-b-0 md:border-r border-[#E5E5E5] group">
                  <span className="block text-5xl font-serif text-[#E5E5E5] group-hover:text-[#A18262] transition-colors duration-500 mb-4">01</span>
                  <h3 className="text-lg font-bold tracking-tight mb-2">Connect</h3>
                  <p className="text-[#666] text-sm font-light leading-relaxed">
                     Tell us what you need. A dedicated coordinator will listen and arrange everything clearly.
                  </p>
               </div>
               {/* Step 02 */}
               <div className="py-10 px-0 md:px-8 border-b md:border-b-0 md:border-r border-[#E5E5E5] group">
                  <span className="block text-5xl font-serif text-[#E5E5E5] group-hover:text-[#A18262] transition-colors duration-500 mb-4">02</span>
                  <h3 className="text-lg font-bold tracking-tight mb-2">Restore</h3>
                  <p className="text-[#666] text-sm font-light leading-relaxed">
                     We arrive on time, fix the issue quietly, and clean up afterwards.
                  </p>
               </div>
               {/* Step 03 */}
               <div className="py-10 pl-0 md:pl-8 group">
                  <span className="block text-5xl font-serif text-[#E5E5E5] group-hover:text-[#A18262] transition-colors duration-500 mb-4">03</span>
                  <h3 className="text-lg font-bold tracking-tight mb-2">Relax</h3>
                  <p className="text-[#666] text-sm font-light leading-relaxed">
                     Your home is back to normal. We provide a full report so you can have complete peace of mind.
                  </p>
               </div>
            </div>
         </section>

         {/* 5. THE EXPERIENCE (Human/General) - Restored with New Icons */}
         <section className="w-full bg-[#111] text-[#FAFAF9] py-16 px-[8vw] border-b border-[#333]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
               <div>
                  <span className="block font-mono text-xs text-[#A18262] uppercase tracking-[0.2em] mb-6">The Experience</span>
                  <h2 className="text-5xl md:text-7xl font-serif italic font-light mb-12">
                     Simply <br /> Better.
                  </h2>
                  <p className="text-[#888] text-lg leading-relaxed max-w-md">
                     We understand that inviting someone into your home is a matter of trust.
                     That is why we focus on being respectful, clean, and invisible. We fix the problem, and then we disappear.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] border border-[#333]">
                  {/* Respect */}
                  <div className="bg-[#1A1A1A] p-10 space-y-6 hover:bg-[#222] transition-colors">
                     <HeartHandshake className="w-8 h-8 text-[#A18262]" />
                     <div>
                        <h4 className="font-serif italic text-2xl mb-2">Respect</h4>
                        <p className="text-xs font-mono text-[#666] uppercase tracking-widest leading-relaxed">
                           We treat your home <br /> like it is our own.
                        </p>
                     </div>
                  </div>
                  {/* Privacy */}
                  <div className="bg-[#1A1A1A] p-10 space-y-6 hover:bg-[#222] transition-colors">
                     <ShieldCheck className="w-8 h-8 text-[#A18262]" />
                     <div>
                        <h4 className="font-serif italic text-2xl mb-2">Privacy</h4>
                        <p className="text-xs font-mono text-[#666] uppercase tracking-widest leading-relaxed">
                           Discreet service <br /> that respects your space.
                        </p>
                     </div>
                  </div>
                  {/* Cleanliness */}
                  <div className="bg-[#1A1A1A] p-10 space-y-6 hover:bg-[#222] transition-colors">
                     <Sparkles className="w-8 h-8 text-[#A18262]" />
                     <div>
                        <h4 className="font-serif italic text-2xl mb-2">Cleanliness</h4>
                        <p className="text-xs font-mono text-[#666] uppercase tracking-widest leading-relaxed">
                           We leave your home <br /> cleaner than we found it.
                        </p>
                     </div>
                  </div>
                  {/* Quality */}
                  <div className="bg-[#1A1A1A] p-10 space-y-6 hover:bg-[#222] transition-colors">
                     <Award className="w-8 h-8 text-[#A18262]" />
                     <div>
                        <h4 className="font-serif italic text-2xl mb-2">Quality</h4>
                        <p className="text-xs font-mono text-[#666] uppercase tracking-widest leading-relaxed">
                           Done right the first time. <br /> No shortcuts.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 7. THE PROMISE (Guarantee) & CTA */}
         <section className="w-full bg-[#FAFAF9] px-[8vw] pt-16 pb-4 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-serif italic mb-6">The Dakeek Promise.</h2>
               <p className="text-xl font-light text-[#555] mb-8">
                  If the issue returns within 30 days, so do we. <br />
                  <span className="text-[#A18262] font-medium">Free of charge.</span> No questions asked.
               </p>
            </div>

            <Link href="/contact" className="group relative px-16 py-8 bg-[#111] text-white overflow-hidden rounded-sm transition-all hover:scale-105 active:scale-95 shadow-2xl">
               <span className="relative z-10 font-mono text-sm uppercase tracking-[0.2em]">Restore Order</span>
               <div className="absolute inset-0 bg-[#A18262] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            </Link>
         </section>


      </main>
   );
}
