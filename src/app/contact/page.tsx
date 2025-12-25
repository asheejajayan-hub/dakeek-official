"use client";


import { ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-[#FAFAF9] min-h-screen text-[#111]">

            {/* 1. HERO - Renamed to Contact */}
            <section className="relative h-[40vh] flex flex-col justify-end px-[8vw] pb-16 border-b border-[#E5E5E5] overflow-hidden bg-[#FAFAF9]">
                <div className="absolute top-0 right-0 w-[50vw] h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply"></div>

                <h1 className="relative z-10 text-[8vw] font-serif italic leading-none mb-4 text-[#111]">Contact.</h1>
                <p className="relative z-10 text-xl font-mono uppercase tracking-widest text-[#A18262]">The Handshake</p>
            </section>

            {/* 2. THE HOOK (ELI5) */}
            <section className="px-[8vw] py-16 border-b border-[#E5E5E5] bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                        &ldquo;Booking a technician should be as easy as ordering a taxi. Tell us what&apos;s wrong, tell us where you are, and we&apos;ll be there.&rdquo;
                    </h2>
                </div>
            </section>

            {/* 3. SMART FORM */}
            <section className="px-[8vw] py-24 min-h-screen bg-[#FAFAF9] flex justify-center">
                <form className="w-full max-w-2xl space-y-12">

                    {/* Step 1: Service */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif italic">1. What needs fixing?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["AC Maintenance", "Plumbing", "Electrical", "Painting", "Water Tanks", "Deep Cleaning", "Gas", "HVAC"].map(s => (
                                <label key={s} className="flex items-center gap-3 p-4 bg-white border border-[#E5E5E5] cursor-pointer hover:border-[#111] transition-colors">
                                    <input type="radio" name="service" value={s} className="accent-[#111]" />
                                    <span className="font-mono text-sm uppercase tracking-wide">{s}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Location */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif italic">2. Where are you?</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <input type="text" placeholder="Area / Community (e.g. Meadows 9)" className="w-full p-4 bg-white border border-[#E5E5E5] focus:border-[#111] outline-none font-sans" />
                            <input type="text" placeholder="Villa / Apartment Number" className="w-full p-4 bg-white border border-[#E5E5E5] focus:border-[#111] outline-none font-sans" />
                        </div>
                    </div>

                    {/* Step 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif italic">3. How do we reach you?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full p-4 bg-white border border-[#E5E5E5] focus:border-[#111] outline-none font-sans" />
                            <input type="tel" placeholder="Phone Number (WhatsApp)" className="w-full p-4 bg-white border border-[#E5E5E5] focus:border-[#111] outline-none font-sans" />
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-8">
                        <button type="button" className="w-full bg-[#111] text-white py-6 flex items-center justify-center gap-4 hover:bg-[#A18262] transition-colors">
                            <span className="font-mono uppercase tracking-widest">Confirm Booking</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-center text-xs text-[#86868b] mt-4 font-mono uppercase">No payment required until job is done.</p>
                    </div>

                </form>
            </section>

        </main>
    );
}
