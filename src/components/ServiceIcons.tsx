import React from 'react';

// Common SVG Props


// 01. AC: Split Unit with Airflow (More technical)
export const IconAC = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M18 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" strokeOpacity="0.5" />
        <path d="M4 10h16" strokeOpacity="0.5" />
        <path d="M14 17l-2 3-2-3" /> {/* Airflow arrow */}
        <path d="M12 14v4" />
        <path d="M16 16l-1 2" />
        <path d="M8 16l1 2" />
    </svg>
);

// 02. Plumbing: Wrench and Pipe Joint
export const IconPlumbing = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Pipe Corner */}
        <path d="M4 22V8a4 4 0 0 1 4-4h14" />
        <path d="M4 15h3" />
        <path d="M21 4v3" />
        {/* Drop */}
        <path d="M14 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
        <path d="M14 14l-1.5-2.5" />
        <path d="M14 14l1.5-2.5" />
    </svg>
);

// 03. Electrical: Circuit & Lightning Bolt (Professional)
export const IconElectrical = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M12 2v5" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 14l2-2" />
        <path d="M12 14l-2 2" />
        <path d="M6 7v-2" />
        <path d="M18 7v-2" />
    </svg>
);

// 04. Painting: Roller with Paint Trail
export const IconPainting = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="3" width="14" height="6" rx="1" />
        <path d="M19 5h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
        <path d="M12 9v4" />
        <path d="M12 13a4 4 0 0 0-4 4v5" />
        <rect x="2" y="19" width="6" height="3" rx="1" /> {/* Handle grip */}
    </svg>
);

// 05. Ducts: Fan / Ventilation Symbol
export const IconDucts = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12L7 9" />
        <path d="M12 12l5-3" />
        <path d="M12 12l0 6" />
        <path d="M12 3v2" />
        <path d="M21 12h-2" />
        <path d="M3 12h2" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

// 06. Tanks: Water Silo / Container
export const IconTanks = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
        <ellipse cx="12" cy="8" rx="8" ry="3" />
        <path d="M4 8c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        <path d="M12 3v5" />
    </svg>
);

// 07. Stoves: Burner Flame
export const IconStoves = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3" />
        <path d="M12 22v-6" opacity="0.5" />
    </svg>
);

// 08. Gas: Piping Schematic
export const IconGas = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="10" width="20" height="4" rx="2" />
        <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        <circle cx="12" cy="12" r="1" />
    </svg>
);

// 09. Kitchen (Exhaust): Hood Outline
export const IconKitchen = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 14l2-8h12l2 8" />
        <rect x="2" y="14" width="20" height="6" rx="1" />
        <path d="M12 14v6" />
        <path d="M9 17h6" opacity="0.5" />
    </svg>
);

// 10. HVAC: Industrial Cooler (Chiller)
export const IconHVAC = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 10h18" />
        <path d="M7 4v16" />
        <path d="M17 4v16" />
        <path d="M7 14h4" />
        <path d="M13 14h4" />
    </svg>
);

// 11. AMC: Document / Contract
export const IconAMC = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
    </svg>
);

// 12. Emergency: Siren / Warning
export const IconEmergency = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
        <path d="M4.93 4.93l14.14 14.14" opacity="0.2" /> {/* Hazard line */}
    </svg>
);

// 13. Handyman: Drill / Mounting
export const IconHandyman = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14 9l-2 2" />
        <path d="M10 13l-2.5 2.5a2.121 2.121 0 0 1-3-3L7 10" />
        <path d="M13 10l4-4a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828l-4 4" />
        <path d="M7 16l-4 4" />
        <path d="M17 10l1 1" />
    </svg>
);

// 14. Custom: Blueprint / Ruler
export const IconCustom = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <path d="M9 9l5 5" opacity="0.5" />
        <path d="M14 9l-5 5" opacity="0.5" />
    </svg>
);
