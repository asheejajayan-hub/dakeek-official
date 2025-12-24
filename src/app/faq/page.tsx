"use client";

import Hero2D from "../../components/Hero2D";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQS = [
    {
        q: "How fast do you arrive?",
        a: "For emergency calls, we arrive in 60 minutes or less. For inspection bookings, we arrive within a 1-hour window of your chosen time."
    },
    {
        q: "Is there a callout fee?",
        a: "There is a standard inspection fee of AED 150. However, if you proceed with the repair work, this fee is waived completely."
    },
    {
        q: "Are your technicians insured?",
        a: "Yes, fully. We carry comprehensive liability insurance. If we accidentally break something in your home (which never happens), we pay for it."
    },
    {
        q: "Do you offer a warranty?",
        a: "Yes. All our workmanship is guaranteed for 30 days. If the same problem comes back, we fix it for free. Spare parts carry their own manufacturer warranty (usually 1 year)."
    },
    {
        q: "What areas do you cover?",
        a: "We currently serve all major freehold communities in Dubai, including Emirates Hills, Palm Jumeirah, Arabian Ranches, Jumeirah Park, and Dubai Marina."
    },
    {
        q: "Do you use subcontractors?",
        a: "Never. Every technician is a full-time Dakeek employee, trained in our own academy. We do not use random freelancers."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="bg-[#FAFAF9] min-h-screen text-[#111]">

            {/* 1. HERO */}
            <section className="relative h-[50vh] flex flex-col justify-end px-[8vw] pb-24 border-b border-[#E5E5E5] overflow-hidden">
                <div className="absolute inset-0 opacity-50 pointer-events-none">
                    <Hero2D />
                </div>
                <h1 className="relative z-10 text-[8vw] font-serif italic leading-none mb-4">Questions?</h1>
                <p className="relative z-10 text-xl font-mono uppercase tracking-widest text-[#86868b]">Concierge Desk</p>
            </section>

            {/* 2. THE HOOK (ELI5) */}
            <section className="px-[8vw] py-24 border-b border-[#E5E5E5] bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                        &ldquo;You have questions. We have simple, honest answers. No hidden fees, no fine print.&rdquo;
                    </h2>
                    <div className="w-24 h-1 bg-[#A18262] mx-auto"></div>
                </div>
            </section>

            {/* 3. FAQ LIST */}
            <section className="px-[8vw] py-32 min-h-[60vh]">
                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="border border-[#E5E5E5] bg-white">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-8 text-left hover:bg-[#F5F5F4] transition-colors"
                            >
                                <span className="text-xl font-serif italic">{faq.q}</span>
                                {openIndex === i ? <Minus className="w-5 h-5 text-[#A18262]" /> : <Plus className="w-5 h-5 text-[#86868b]" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="p-8 pt-0 text-[#666] leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
