import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
    id: string;
    title: string;
    tagline: string;
    desc: string;
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceHero({ id, title, tagline, desc }: ServiceHeroProps) {
    return (
        <section className="relative h-[80vh] w-full flex flex-col justify-end px-[5vw] pb-20 overflow-hidden border-b border-structure bg-canvas">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Nav Back */}
            <Link href="/" className="absolute top-8 left-[5vw] flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-titanium hover:text-ink transition-colors z-20">
                <ArrowLeft className="w-3 h-3" /> Index
            </Link>

            {/* Giant Background ID */}
            <div className="absolute top-0 right-0 text-[30vw] leading-[0.8] font-serif font-bold text-structure opacity-30 select-none pointer-events-none mix-blend-darken">
                {id}
            </div>

            <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[1px] bg-bronze"></span>
                    <span className="font-mono text-xs text-bronze uppercase tracking-[0.2em]">{tagline}</span>
                </div>

                <h1 className="text-[8vw] leading-[0.9] font-serif italic text-ink mb-12">
                    {title}
                </h1>

                <p className="text-xl md:text-2xl text-titanium font-light max-w-2xl leading-relaxed">
                    {desc}
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-[5vw] text-xs font-mono text-titanium animate-bounce flex flex-col items-center gap-2">
                SCROLL
                <ArrowRight className="w-3 h-3 rotate-90" />
            </div>
        </section>
    );
}
