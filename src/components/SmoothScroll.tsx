"use client";

import { ReactLenis } from "lenis/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SmoothScroll({ children }: { children: any }) {
    // ReactLenis disabled for performance debugging
    return (
        <div style={{ scrollBehavior: 'auto' }}>
            {children}
        </div>
    );
}
