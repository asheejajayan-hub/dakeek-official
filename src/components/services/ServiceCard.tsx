"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";


interface ServiceCardProps {
  title: string;
  href: string;
  icon: React.ElementType<{ className?: string }>;
  features: string[];
  variant?: "default" | "emergency";
}

export default function ServiceCard({
  title,
  href,
  icon: Icon,
  features,
  variant = "default",
}: ServiceCardProps) {
  const isEmergency = variant === "emergency";

  if (isEmergency) {
    return (
      <Link
        href={href}
        className="group relative block p-10 h-[420px] flex flex-col justify-between items-center text-center overflow-hidden bg-[#050505] text-white rounded-none border border-white/5 hover:border-red-900/50 transition-colors duration-500"
      >
        {/* Emergency Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 w-full flex flex-col items-center pt-4">
          <div className="flex flex-col items-center gap-6 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-red-500/80 border border-red-500/20 px-3 py-1 rounded-full">Priority 01</span>
            <div className="relative">
              <Icon className="w-14 h-14 text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse" />
            </div>
          </div>
          <h3 className="text-4xl font-serif italic text-white mb-2 leading-none">Emergency</h3>
          <p className="font-mono text-[10px] text-[#666] uppercase tracking-[0.2em]">60 Minute Response</p>
        </div>

        <ul className="relative z-10 space-y-4 border-t border-white/10 pt-8 w-full flex flex-col items-center">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-light text-[#a3a3a3]">
              <span className="w-1 h-1 rounded-full bg-red-600 shadow-[0_0_8px_red]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Emergency Interaction Hint */}
        <div className="absolute bottom-6 animate-pulse">
          <ArrowRight className="w-5 h-5 text-white/50" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative block p-10 h-[420px] bg-white border border-[#E5E5E5] flex flex-col justify-between items-center text-center transition-all duration-500 hover:border-[#D6D3D1] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1"
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAF9] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Hover Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#A18262] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />

      <div className="relative z-10 w-full flex flex-col items-center pt-2">
        <div className="mb-8 relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
          <div className="absolute inset-0 bg-[#A18262]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="relative z-10 w-12 h-12 text-[#444] group-hover:text-[#A18262] transition-colors duration-500" />
        </div>

        <h3 className="text-3xl font-serif font-medium text-[#111] mb-2 group-hover:text-[#A18262] group-hover:italic transition-all duration-300">
          {title}
        </h3>
        {/* Decorative short line */}
        <div className="w-8 h-[1px] bg-[#E5E5E5] my-4 group-hover:w-16 group-hover:bg-[#A18262]/30 transition-all duration-500" />
      </div>

      <ul className="relative z-10 space-y-3 flex flex-col items-center w-full mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="font-mono text-[10px] text-[#86868b] uppercase tracking-[0.15em] flex items-center justify-center gap-2 group-hover:text-[#444] transition-colors"
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* Interaction Hint */}
      <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <ArrowRight className="w-5 h-5 text-[#A18262]" />
      </div>

      {/* Bottom corner accent ?? Maybe too much. Keeping it clean. */}
    </Link>
  );
}
