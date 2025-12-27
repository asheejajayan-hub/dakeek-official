"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ServicePageData } from "../../data/serviceData";

interface ServiceNavigationProps {
    prev: { id: string; name: string } | null;
    next: { id: string; name: string } | null;
    theme: ServicePageData['theme'];
}

export default function ServiceNavigation({ prev, next, theme }: ServiceNavigationProps) {
    return (
        <section className={`px-[5vw] py-16 ${theme.secondaryBg} border-t border-black/5`}>
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
                {prev ? (
                    <Link href={`/services/${prev.id}`} className="group flex items-center gap-4 text-left">
                        <ArrowLeft className={`w-6 h-6 ${theme.primaryText} group-hover:-translate-x-2 transition-transform`} />
                        <div>
                            <div className={`text-xs font-mono tracking-widest uppercase mb-1 ${theme.accentText}`}>Previous</div>
                            <div className={`text-xl font-serif italic text-slate-800`}>{prev.name}</div>
                        </div>
                    </Link>
                ) : <div />}

                {next ? (
                    <Link href={`/services/${next.id}`} className="group flex items-center gap-4 text-right">
                        <div>
                            <div className={`text-xs font-mono tracking-widest uppercase mb-1 ${theme.accentText}`}>Next Operation</div>
                            <div className={`text-xl font-serif italic text-slate-800`}>{next.name}</div>
                        </div>
                        <ArrowRight className={`w-6 h-6 ${theme.primaryText} group-hover:translate-x-2 transition-transform`} />
                    </Link>
                ) : <div />}
            </div>
        </section>
    );
}
