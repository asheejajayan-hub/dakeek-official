"use client";

import { motion } from "framer-motion";
import { Wrench, Thermometer, Wind, CheckCircle2 } from "lucide-react";

const services = [
    {
        id: "installation",
        title: "Installation",
        subtitle: "The Perfect Start",
        description: "A flawless installation is the foundation of a decade of comfort. We calculate load, optimize placement, and calibrate airflow for maximum efficiency from day one.",
        icon: Wind,
        details: [
            "Load Calculation & Sizing",
            "Ductwork Design & Modification",
            "Energy Efficiency Audits",
            "Smart Thermostat Integration"
        ],
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: "maintenance",
        title: "Maintenance",
        subtitle: "Peak Performance",
        description: "Silence the noise and lower the bills. Our comprehensive tune-up restores your unit to factory specs, preventing breakdowns before they happen.",
        icon: Thermometer,
        details: [
            "Coil Cleaning & Sanitization",
            "Refrigerant Level Check",
            "Electrical Component Inspection",
            "Drain Line Flushing"
        ],
        image: "/images/ac/maintenance_new.png"
    },
    {
        id: "repair",
        title: "Repair",
        subtitle: "Rapid Response",
        description: "When the heat rises, we drop it. Our emergency repair team identifies the root cause instantly—no guesswork, just solutions.",
        icon: Wrench,
        details: [
            "Compressor Diagnostics",
            "Leak Detection & Repair",
            "Circuit Board Replacement",
            "Emergency 24/7 Service"
        ],
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
    }
];

function ServiceSection({ service, index }: { service: typeof services[0], index: number }) {
    const isEven = index % 2 === 0;

    return (
        <section className="min-h-[auto] lg:min-h-[80vh] flex items-center justify-center py-20 md:py-32 relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
                {/* Content - Subtle Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                    <div className="flex items-center gap-4">
                        <span className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                            <service.icon className="w-8 h-8" />
                        </span>
                        <span className="font-mono text-sm tracking-widest text-blue-300 uppercase">
                            {service.subtitle}
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
                        {service.title}
                    </h2>

                    <p className="text-xl text-blue-100/60 font-light leading-relaxed max-w-xl">
                        {service.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-blue-100">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span className="font-light">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Visual - Static & Clean */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative h-[600px] w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-blue-900/20 border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent mix-blend-overlay z-10" />
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 border border-white/10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ACServices() {
    return (
        <div className="bg-blue-950 text-white">
            {/* Title Section */}
            <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
                <p className="font-mono text-xs md:text-sm text-blue-400 uppercase tracking-[0.3em] mb-6">
                    Our Approach
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                    What We Do & How We Do It
                </h2>
                <p className="text-lg text-blue-100/60 font-light max-w-2xl mx-auto">
                    Every service is designed around precision, transparency, and long-term performance.
                </p>
            </div>

            {/* Service Cards */}
            {services.map((service, index) => (
                <ServiceSection key={service.id} service={service} index={index} />
            ))}
        </div>
    );
}
