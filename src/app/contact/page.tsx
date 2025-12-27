"use client";

import { ContactHero } from "@/components/contact/ContactHero";
import { SmartForm } from "@/components/contact/SmartForm";
import { MapVisual } from "@/components/contact/MapVisual";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FAFAF9] text-[#111] overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-multiply"></div>

            <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">

                {/* Left Column: Context & Visuals */}
                <div className="relative h-full flex flex-col justify-between p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#E5E5E5] bg-white lg:bg-transparent">
                    <div className="space-y-12">
                        {/* Hero Text */}
                        <ContactHero />

                        {/* Map Visual (Desktop Only) */}
                        <div className="hidden lg:block pt-8">
                            <MapVisual />
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="hidden lg:block space-y-2 text-sm text-slate-500 font-mono pt-12">
                        <p>DUBAI HEADQUARTERS</p>
                        <p>AL QUOZ INDUSTRIAL AREA 4</p>
                        <p>LICENSE NO. 827192</p>
                    </div>
                </div>

                {/* Right Column: Interaction */}
                <div className="relative h-full bg-[#f4f4f5] flex items-center justify-center p-6 lg:p-16">
                    {/* Background Pattern for Right Side */}
                    <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="w-full max-w-xl relative z-10">
                        <SmartForm />
                    </div>
                </div>

            </div>
        </main>
    );
}

