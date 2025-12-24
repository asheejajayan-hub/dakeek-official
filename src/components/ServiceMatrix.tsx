"use client";

import Link from "next/link";
import {
    Wind, Droplets, Zap, Paintbrush,
    Fan, Cylinder, Flame, Gauge,
    ChefHat, ThermometerSnowflake, CalendarClock, ShieldAlert
} from "lucide-react";
import { useState } from "react";

const services = [
    { id: "ac", name: "AC Services", icon: Wind, desc: "The Lungs" },
    { id: "plumbing", name: "Plumbing", icon: Droplets, desc: "The Arteries" },
    { id: "electrical", name: "Electrical", icon: Zap, desc: "The Nerves" },
    { id: "painting", name: "Painting", icon: Paintbrush, desc: "The Skin" },
    { id: "ducts", name: "Duct Cleaning", icon: Fan, desc: "The Breath" },
    { id: "tanks", name: "Water Tanks", icon: Cylinder, desc: "The Reservoir" },
    { id: "stoves", name: "Stoves", icon: Flame, desc: "The Hearth" },
    { id: "gas", name: "Gas Systems", icon: Gauge, desc: "The Veins" },
    { id: "kitchen", name: "Kitchen", icon: ChefHat, desc: "The Heart" },
    { id: "hvac", name: "HVAC", icon: ThermometerSnowflake, desc: "The Climate" },
    { id: "amc", name: "AMC", icon: CalendarClock, desc: "The Guardian" },
    { id: "emergency", name: "Emergency", icon: ShieldAlert, desc: "The Red Button" },
];

export default function ServiceMatrix() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="w-full py-32 px-[5vw] bg-canvas">
            <div className="mb-20">
                <h2 className="text-4xl font-serif italic text-ink mb-4">Capability Matrix</h2>
                <p className="text-titanium font-mono text-xs uppercase tracking-widest">Select a System Protocol</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-structure border border-structure">
                {services.map((s) => (
                    <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        className={`
              group relative bg-white p-10 h-64 flex flex-col justify-between
              transition-all duration-500 ease-out
              hover:z-10 hover:shadow-2xl hover:scale-[1.02]
              ${hovered && hovered !== s.id ? "opacity-30 blur-[1px] scale-95" : "opacity-100"}
            `}
                        onMouseEnter={() => setHovered(s.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="flex justify-between items-start">
                            <s.icon className="w-8 h-8 text-titanium group-hover:text-bronze transition-colors" />
                            <span className="font-mono text-[10px] text-structure group-hover:text-bronze transition-colors">
                                ID: {s.id.toUpperCase()}
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-serif text-ink mb-2 group-hover:translate-x-2 transition-transform">
                                {s.name}
                            </h3>
                            <p className="text-xs font-mono text-titanium uppercase tracking-widest group-hover:text-bronze transition-colors">
                                {s.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
