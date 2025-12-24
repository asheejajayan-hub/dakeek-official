"use client";

import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function Rates() {
    return (
        <main className="min-h-screen w-full bg-[#FAFAF9] text-[#111] pt-32 pb-20 relative">
            <div className="w-full max-w-6xl mx-auto px-[5vw] lg:px-0">

                {/* Header: Financial Authority */}
                <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-8">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#86868b] mb-4 block">
                            Value Architecture
                        </span>
                        <h1 className="text-6xl font-serif font-light leading-none">
                            Investment<br /><span className="italic">Ledger.</span>
                        </h1>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="block font-mono text-xs text-[#86868b] uppercase tracking-widest mb-1">Currency</span>
                        <span className="block font-mono text-xl">AED (UAE Dirham)</span>
                    </div>
                </header>

                {/* Main Rate Card (Invoice Style) */}
                <section className="bg-white border border-[#E5E5E5] p-12 mb-24 relative overflow-hidden">
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                        <FileText className="w-96 h-96" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="flex-1">
                            <h3 className="font-mono text-lg uppercase tracking-widest border-b border-black pb-4 mb-8">Standard Call-Out</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-6xl font-light">150</span>
                                <span className="font-mono text-sm text-[#86868b]">/ HOUR</span>
                            </div>
                            <p className="text-sm text-[#666] leading-relaxed mb-8 font-mono">
                                REF: TECH-VISIT-STD <br />
                                INCLUDES: Diagnosis, Minor Adjustments, System Health Report.
                            </p>
                            <Link href="/contact" className="inline-block px-8 py-4 bg-[#111] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#333] transition-colors">
                                Book Now
                            </Link>
                        </div>

                        <div className="flex-1 border-l border-[#E5E5E5] pl-0 md:pl-16">
                            <h3 className="font-mono text-xs text-[#86868b] uppercase tracking-widest mb-8">The &quot;Why&quot; (Material Breakdown)</h3>
                            <ul className="space-y-8">
                                <li className="group">
                                    <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-[#E5E5E5] pb-1">
                                        <span className="font-serif italic text-lg">Copper Piping (Muller)</span>
                                        <span className="font-mono text-xs text-[#111]">100% PURE</span>
                                    </div>
                                    <p className="text-xs text-[#666] leading-relaxed">
                                        We reject aluminum alternatives. Copper ensures 20+ year longevity vs 5 years for aluminum.
                                    </p>
                                </li>
                                <li className="group">
                                    <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-[#E5E5E5] pb-1">
                                        <span className="font-serif italic text-lg">Electrical (Schneider)</span>
                                        <span className="font-mono text-xs text-[#111]">ORIGINAL</span>
                                    </div>
                                    <p className="text-xs text-[#666] leading-relaxed">
                                        Fire-safe breakers and contacts. No generic &quot;market&quot; parts that risk overheating.
                                    </p>
                                </li>
                                <li className="group">
                                    <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-[#E5E5E5] pb-1">
                                        <span className="font-serif italic text-lg">Technician Grade</span>
                                        <span className="font-mono text-xs text-[#111]">SENIOR</span>
                                    </div>
                                    <p className="text-xs text-[#666] leading-relaxed">
                                        Minimum 5 years UAE experience. Certified by major brands (Carrier/Daikin).
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Project Table */}
                <section>
                    <h2 className="font-serif italic text-3xl mb-8">Service Menu (Starting Rates)</h2>

                    <div className="w-full border-t border-[#111]">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 py-4 border-b border-[#E5E5E5] font-mono text-xs text-[#86868b] uppercase tracking-widest">
                            <div className="col-span-2">CODE</div>
                            <div className="col-span-6">SERVICE ITEM</div>
                            <div className="col-span-4 text-right">ESTIMATE (AED)</div>
                        </div>

                        {/* Rows */}
                        {[
                            { code: "AC-01", name: "Deep Chemical Coil Cleaning", price: "250.00" },
                            { code: "AC-02", name: "Gas Refill (R410A / USA)", price: "180.00" },
                            { code: "PL-01", name: "Water Tank Cleaning (Villa)", price: "400.00" },
                            { code: "EL-01", name: "Short Circuit Troubleshooting", price: "350.00" },
                            { code: "DK-01", name: "Kitchen Duct Degasing", price: "1,200.00" },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-12 py-6 border-b border-[#E5E5E5] font-mono text-sm hover:bg-white transition-colors cursor-default group">
                                <div className="col-span-2 text-[#86868b]">{row.code}</div>
                                <div className="col-span-6 font-medium group-hover:text-[#A18262] transition-colors">{row.name}</div>
                                <div className="col-span-4 text-right">{row.price}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-xs font-mono text-[#86868b] text-right">* Final quotation provided after site inspection. VAT Exclusive.</p>
                </section>

            </div>
        </main>
    );
}
