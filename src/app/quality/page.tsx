"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Award, Zap } from "lucide-react";

export default function Quality() {
    const [activeCheck, setActiveCheck] = useState<number | null>(null);

    return (
        <main className="min-h-screen w-full bg-[#FAFAF9] text-[#111] pt-32 pb-20 relative">

            <header className="px-[5vw] mb-32 text-center max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#86868b] mb-8 block">
                    The Dakeek Standard
                </span>
                <h1 className="text-6xl md:text-8xl font-serif font-light mb-8">
                    Engineered for <br />
                    <span className="italic text-[#86868b]">Silence.</span>
                </h1>
                <p className="text-xl font-light text-[#444] leading-relaxed">
                    Quality is not just durability. It is the absence of noise, vibration, and inefficiency.
                    If you can hear your AC, it is not calibrated.
                </p>
            </header>

            {/* THE CHECKLIST INTERFACE */}
            <section className="px-[5vw] max-w-5xl mx-auto mb-32">
                <div className="bg-white border border-[#E5E5E5] p-12 shadow-sm rounded-sm">
                    <div className="flex justify-between items-center mb-12 border-b border-[#E5E5E5] pb-6">
                        <h2 className="text-2xl font-serif italic">40-Point Inspection Protocol</h2>
                        <span className="font-mono text-xs text-[#A18262] uppercase tracking-widest bg-[#FAFAF9] px-4 py-2 rounded-full border border-[#E5E5E5]">
                            ISO 9001:2015 Verified
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            { id: 1, label: "Vibration Analysis (dBA check)" },
                            { id: 2, label: "Gas Leak Pressure Test" },
                            { id: 3, label: "Condenser Fin Straightening" },
                            { id: 4, label: "Electrical Load Balancing" },
                            { id: 5, label: "Duct Airflow Velocity (CFM)" },
                            { id: 6, label: "Thermostat Calibration" },
                            { id: 7, label: "Water Strainer Cleaning" },
                            { id: 8, label: "Anti-Bacterial Fogging" },
                            { id: 9, label: "Compressor Amperage Check" },
                            { id: 10, label: "Final Site Cleanup & Polish" },
                        ].map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveCheck(item.id)}
                                onMouseLeave={() => setActiveCheck(null)}
                                className={`flex items-center gap-4 p-4 border rounded-sm transition-all duration-300 cursor-default ${activeCheck === item.id ? "border-[#A18262] bg-[#FAFAF9]" : "border-transparent hover:bg-[#F5F5F7]"}`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${activeCheck === item.id ? "bg-[#A18262] border-[#A18262] text-white" : "border-[#E5E5E5] text-transparent"}`}>
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className={`font-mono text-sm uppercase tracking-wide transition-colors ${activeCheck === item.id ? "text-[#111]" : "text-[#86868b]"}`}>
                                    {item.id.toString().padStart(2, '0')}. {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE CERTIFICATIONS */}
            <section className="bg-[#111] text-[#FAFAF9] py-32 px-[5vw]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                    <div className="text-center group">
                        <ShieldCheck className="w-16 h-16 text-[#444] mx-auto mb-6 group-hover:text-[#A18262] transition-colors duration-500" />
                        <h3 className="text-2xl font-serif italic mb-4">Civil Defense</h3>
                        <p className="text-sm text-[#888] font-mono leading-relaxed px-8">
                            Fully compliant with Dubai Civil Defense regulations for gas and fire safety systems.
                        </p>
                    </div>
                    <div className="text-center group">
                        <Award className="w-16 h-16 text-[#444] mx-auto mb-6 group-hover:text-[#A18262] transition-colors duration-500" />
                        <h3 className="text-2xl font-serif italic mb-4">ISO 9001:2015</h3>
                        <p className="text-sm text-[#888] font-mono leading-relaxed px-8">
                            Certified Quality Management Systems. Every process is documented and audited.
                        </p>
                    </div>
                    <div className="text-center group">
                        <Zap className="w-16 h-16 text-[#444] mx-auto mb-6 group-hover:text-[#A18262] transition-colors duration-500" />
                        <h3 className="text-2xl font-serif italic mb-4">Manufacturer Approved</h3>
                        <p className="text-sm text-[#888] font-mono leading-relaxed px-8">
                            Authorized service partners for Carrier, O General, Daikin, and York.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
