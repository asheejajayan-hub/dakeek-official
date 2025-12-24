"use client";

import Hero2D from "../../components/Hero2D";

export default function LegalPage() {
    return (
        <main className="bg-[#FAFAF9] min-h-screen text-[#111]">

            {/* 1. HERO */}
            <section className="relative h-[40vh] flex flex-col justify-end px-[8vw] pb-16 border-b border-[#E5E5E5] overflow-hidden">
                <div className="absolute inset-0 opacity-50 pointer-events-none">
                    <Hero2D />
                </div>
                <h1 className="relative z-10 text-[8vw] font-serif italic leading-none mb-4">Legal.</h1>
                <p className="relative z-10 text-xl font-mono uppercase tracking-widest text-[#86868b]">The Fine Print</p>
            </section>

            {/* 2. CONTENT */}
            <section className="px-[8vw] py-24 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* TERMS */}
                    <article className="space-y-6">
                        <h2 className="text-3xl font-serif italic">Terms of Service</h2>
                        <div className="space-y-4 text-[#666] leading-relaxed">
                            <p>
                                <strong className="text-[#111]">1. Callout Fees:</strong> A standard inspection fee of AED 150 applies to all visits. This fee is waived if you proceed with the recommended repairs or maintenance services during the same visit.
                            </p>
                            <p>
                                <strong className="text-[#111]">2. Cancellations:</strong> Cancellations made less than 4 hours before the scheduled appointment time may incur a fee of AED 100.
                            </p>
                            <p>
                                <strong className="text-[#111]">3. Access:</strong> The client must ensure that the technician has safe and clear access to the work area. Any delays caused by lack of access may be charged at an hourly rate.
                            </p>
                        </div>
                    </article>

                    {/* PRIVACY */}
                    <article className="space-y-6">
                        <h2 className="text-3xl font-serif italic">Privacy Policy</h2>
                        <div className="space-y-4 text-[#666] leading-relaxed">
                            <p>
                                <strong className="text-[#111]">1. Data Collection:</strong> We collect your name, address, and phone number solely for the purpose of scheduling and executing your service.
                            </p>
                            <p>
                                <strong className="text-[#111]">2. Data Sharing:</strong> We do not sell, trade, or share your personal data with any third parties. Your data remains strictly within Dakeek systems.
                            </p>
                            <p>
                                <strong className="text-[#111]">3. Security:</strong> All client data is encrypted and stored on secure servers compliant with UAE data protection regulations.
                            </p>
                        </div>
                    </article>

                    {/* REFUNDS */}
                    <article className="space-y-6">
                        <h2 className="text-3xl font-serif italic">Refunds & Warranty</h2>
                        <div className="space-y-4 text-[#666] leading-relaxed">
                            <p>
                                <strong className="text-[#111]">1. Workmanship Guarantee:</strong> We offer a 30-day guarantee on all labor. If the issue persists or reoccurs within 30 days due to our error, we will rectify it free of charge.
                            </p>
                            <p>
                                <strong className="text-[#111]">2. Spare Parts:</strong> Spare parts are subject to the manufacturer&apos;s warranty terms, which typically range from 6 to 12 months. Labor charges may apply for replacing parts under warranty if the diagnosis requires a new visit.
                            </p>
                        </div>
                    </article>

                </div>
            </section>

        </main>
    );
}
