"use client";

import { useEffect, useRef } from "react";

/**
 * Hero2D: "The Data Grid (V5)"
 * Requested: "JUST GRAPH AND FULL NUMBERS"
 * - Zero Lag focus.
 * - Visuals: Only Grid Lines + Text (Numbers/Hex).
 * - No complex graphics (No Atoms, No Pulses).
 * - Single Font (Monospace) for max performance.
 */
export default function Hero2D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // --- Number Library (Pure Data) ---
        // Hex, Decimals, Binary, Integers.
        const pool: string[] = [];

        // 1. Hex Codes
        for (let i = 0; i < 50; i++) pool.push(`0x${Math.floor(Math.random() * 255).toString(16).toUpperCase().padStart(2, '0')}`);
        // 2. Floats
        for (let i = 0; i < 50; i++) pool.push((Math.random() * 100).toFixed(2));
        // 3. Integers
        for (let i = 0; i < 50; i++) pool.push(Math.floor(Math.random() * 9999).toString().padStart(4, '0'));
        // 4. Binary
        for (let i = 0; i < 20; i++) pool.push(Math.random() > 0.5 ? "1010" : "0101");

        let poolIndex = 0;
        const shuffledPool = [...pool, ...pool, ...pool].sort(() => Math.random() - 0.5); // 3x repeats to fill screen

        const getNextContent = () => {
            if (poolIndex >= shuffledPool.length) poolIndex = 0;
            return shuffledPool[poolIndex++];
        };

        // --- Configuration ---
        const gridSize = 100;
        const items: DataItem[] = [];

        // Interaction State
        // Keep hybrid (it was liked before lag issues), but ultra simple logic.
        let time = 0;
        const mouse = { x: width / 2, y: height / 2, active: false };
        const cursor = { x: width / 2, y: height / 2 };
        let lastMouseMove = 0;
        const IDLE_TIMEOUT = 1000;

        interface DataItem {
            x: number;
            y: number;
            content: string;
            opacity: number;
            scale: number;
        }

        // --- Procedural Generation ---
        const initBoard = () => {
            items.length = 0;
            poolIndex = 0;

            const cols = Math.ceil(width / gridSize);
            const rows = Math.ceil(height / gridSize);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * gridSize + (Math.random() - 0.5) * 60;
                    const y = j * gridSize + (Math.random() - 0.5) * 60;

                    items.push({
                        x,
                        y,
                        content: getNextContent(),
                        opacity: 0.1,
                        scale: 0.8 + Math.random() * 0.2
                    });
                }
            }
        };

        // --- Optimized Rendering ---

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initBoard();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
            lastMouseMove = Date.now();
        };

        let animationFrameId: number;

        const render = () => {
            time++;
            // Background - Opaque fill is fastest
            ctx.fillStyle = "#FAFAF9";
            ctx.fillRect(0, 0, width, height);

            // 1. Grid (The "Graph")
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(0,0,0,0.04)";
            ctx.beginPath();
            for (let x = 0; x <= width; x += gridSize) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
            for (let y = 0; y <= height; y += gridSize) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
            ctx.stroke();

            // 2. Interaction Logic
            const isIdle = Date.now() - lastMouseMove > IDLE_TIMEOUT;
            let tx, ty;
            if (isIdle) {
                const t = time * 0.005;
                tx = (width / 2) + Math.sin(t) * (width * 0.4);
                ty = (height / 2) + Math.cos(t * 1.3) * (height * 0.3);
            } else {
                tx = mouse.x;
                ty = mouse.y;
            }
            cursor.x += (tx - cursor.x) * 0.15;
            cursor.y += (ty - cursor.y) * 0.15;
            const cx = cursor.x;
            const cy = cursor.y;

            // 3. Draw Numbers (Batch)
            // Single Font Setup = Max Performance
            ctx.font = "11px monospace";
            ctx.fillStyle = "rgba(17, 17, 17, 1)";

            // Loop once, calculate opacity, draw.
            // Avoid save/restore or complex state changes inside loop.
            items.forEach(item => {
                const dx = item.x - cx;
                const dy = item.y - cy;
                const distSq = dx * dx + dy * dy;

                // Simple distance check
                if (distSq > 350 * 350) {
                    // Too far, draw faint? Or skip?
                    // Drawing faint is better for "full" look.
                    ctx.globalAlpha = 0.08;
                } else {
                    const dist = Math.sqrt(distSq);
                    const boost = (1 - (dist / 350));
                    // Quadratic boost for sharper focus
                    ctx.globalAlpha = 0.08 + (boost * boost) * 0.8;
                }

                ctx.fillText(item.content, item.x, item.y);
            });
            ctx.globalAlpha = 1.0;

            // 4. Reticle
            const r = 25;
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(161, 130, 98, 0.6)";

            ctx.beginPath();
            // Simple brackets
            ctx.moveTo(cx - r, cy - r + 8); ctx.lineTo(cx - r, cy - r); ctx.lineTo(cx - r + 8, cy - r);
            ctx.moveTo(cx + r - 8, cy - r); ctx.lineTo(cx + r, cy - r); ctx.lineTo(cx + r, cy - r + 8);
            ctx.moveTo(cx + r, cy + r - 8); ctx.lineTo(cx + r, cy + r); ctx.lineTo(cx + r - 8, cy + r);
            ctx.moveTo(cx - r + 8, cy + r); ctx.lineTo(cx - r, cy + r); ctx.lineTo(cx - r, cy + r - 8);
            ctx.stroke();

            // Center
            ctx.fillStyle = "#A18262";
            ctx.beginPath(); ctx.arc(cx, cy, 2, 0, Math.PI * 2); ctx.fill();

            // Coord
            if (!isIdle) {
                ctx.fillText(`[${Math.floor(cx)},${Math.floor(cy)}]`, cx + r + 4, cy + r + 14);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        initBoard();
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60 mix-blend-multiply"
        />
    );
}
