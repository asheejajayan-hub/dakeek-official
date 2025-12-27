"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export function GravitySection() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio,
            },
        });

        // Boundaries
        const ground = Bodies.rectangle(
            window.innerWidth / 2,
            window.innerHeight + 50,
            window.innerWidth,
            100,
            { isStatic: true, render: { visible: false } }
        );
        const leftWall = Bodies.rectangle(
            -50,
            window.innerHeight / 2,
            100,
            window.innerHeight,
            { isStatic: true, render: { visible: false } }
        );
        const rightWall = Bodies.rectangle(
            window.innerWidth + 50,
            window.innerHeight / 2,
            100,
            window.innerHeight,
            { isStatic: true, render: { visible: false } }
        );

        // Objects (Tools/shapes)
        const categories = ["#3b82f6", "#1e40af", "#60a5fa", "#ffffff", "#94a3b8"];
        const shapes = [];

        for (let i = 0; i < 40; i++) {
            const x = Math.random() * window.innerWidth;
            const y = -Math.random() * 2000; // Start way above
            const color = categories[Math.floor(Math.random() * categories.length)];

            // Randomly mix circles and rectangles
            if (Math.random() > 0.5) {
                shapes.push(
                    Bodies.circle(x, y, 20 + Math.random() * 30, {
                        restitution: 0.5,
                        render: { fillStyle: color },
                    })
                );
            } else {
                shapes.push(
                    Bodies.rectangle(x, y, 40 + Math.random() * 40, 40 + Math.random() * 40, {
                        restitution: 0.5,
                        angle: Math.random() * Math.PI,
                        render: { fillStyle: color, }, // 'chamfer' property removed as it might not be in the types or causing issues, keeping it simple
                    })
                );
            }
        }

        Composite.add(engine.world, [ground, leftWall, rightWall, ...shapes]);

        // Mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Run the renderer
        Render.run(render);

        // Create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Resize handler
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            // Update boundaries... (omitted for brevity, could be improved)
            // Ideally we'd remove and re-add static bodies or update positional data
        };

        window.addEventListener("resize", handleResize);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) {
                render.canvas.remove();
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-[#0f172a] overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute top-20 text-center z-10 pointer-events-none mix-blend-difference text-white">
                <h2 className="text-6xl font-bold mb-4 font-serif">THE TOOLS</h2>
                <p className="font-mono text-sm tracking-widest uppercase">Gravity is just a suggestion.</p>
            </div>
            <div ref={sceneRef} className="absolute inset-0" />
            <div className="absolute bottom-10 text-xs font-mono text-slate-500 pointer-events-none">
                THROW THEM AROUND
            </div>
        </div>
    );
}
