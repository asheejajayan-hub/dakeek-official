"use client";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SmoothScroll({ children }: { children: React.ReactNode }) {

    // ReactLenis disabled for performance debugging
    return (
        <div style={{ scrollBehavior: 'auto' }}>
            {children}
        </div>
    );
}
