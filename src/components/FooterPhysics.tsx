"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";

interface FooterPhysicsProps {
    onDragStart?: () => void;
    onDragEnd?: () => void;
    color?: string;
}

export default function FooterPhysics({ onDragStart, onDragEnd, color = "#E5E5E5" }: FooterPhysicsProps) {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);
    const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
    const lettersRef = useRef<Matter.Body[]>([]);
    const isDraggingRef = useRef(false);

    // SMART INTERACTION STATE
    const [interactionMode, setInteractionMode] = useState<'auto' | 'none'>('none');

    // 1. SHARED FORCE DROP (Component Level)
    const forceDrop = useCallback(() => {
        const mc = mouseConstraintRef.current;
        if (mc && mc.body) {
            mc.body = null as unknown as Matter.Body;
            mc.constraint.bodyB = null as unknown as Matter.Body;
            mc.constraint.pointA = null as unknown as Matter.Vector;
            // Reset mouse button to prevent immediate re-grab
            if (mc.mouse) mc.mouse.button = -1;

            isDraggingRef.current = false;
            if (onDragEnd) onDragEnd();
        }
    }, [onDragEnd]);

    useEffect(() => {
        if (!sceneRef.current) return;

        // 2. ENGINE SETUP
        const engine = Matter.Engine.create({
            positionIterations: 50,
            velocityIterations: 50,
            gravity: { x: 0, y: 1, scale: 0.002 }
        });
        const world = engine.world;
        engineRef.current = engine;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const render = Matter.Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                pixelRatio: 1
            }
        });
        renderRef.current = render;

        // 3. BOUNDARIES
        const wallThickness = 200;
        const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.8 };

        const floor = Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, wallOptions);
        const ceiling = Matter.Bodies.rectangle(width / 2, -wallThickness * 10, width * 2, wallThickness, wallOptions);
        const leftWall = Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 4, wallOptions);
        const rightWall = Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 4, wallOptions);

        Matter.Composite.add(world, [floor, ceiling, leftWall, rightWall]);

        // 4. LETTERS
        const letterString = "DAKEEK";
        const letterBodies: Matter.Body[] = [];
        const isMobile = width < 768;
        const visualTextSize = width * (isMobile ? 0.23 : 0.135);

        const measureCanvas = document.createElement('canvas');
        const measureCtx = measureCanvas.getContext('2d');
        if (measureCtx) measureCtx.font = `bold ${visualTextSize}px sans-serif`;

        let totalWidth = 0;
        const spacing = visualTextSize * 0.02;
        const chars = letterString.split('').map(char => {
            const w = measureCtx ? measureCtx.measureText(char).width : visualTextSize * 0.6;
            totalWidth += w + spacing;
            return { char, w };
        });
        totalWidth -= spacing;

        let currentX = (width - totalWidth) / 2;

        chars.forEach(({ char, w }, index) => {
            const centerX = currentX + w / 2;
            const startY = -400 - (index * 150);
            const physicsW = w * 0.95;
            const physicsH = visualTextSize * 0.75;

            const body = Matter.Bodies.rectangle(centerX, startY, physicsW, physicsH, {
                chamfer: { radius: 0 },
                restitution: 0.1,
                friction: 0.8,
                frictionAir: 0.005,
                density: 20.0,
                render: { fillStyle: 'transparent' },
                label: char
            });

            letterBodies.push(body);
            currentX += w + spacing;
        });

        lettersRef.current = letterBodies;
        Matter.Composite.add(world, letterBodies);

        // 5. INTERACTION
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.9,
                damping: 0,
                render: { visible: false }
            }
        });
        mouseConstraintRef.current = mouseConstraint;

        Matter.Composite.add(world, mouseConstraint);

        Matter.Events.on(mouseConstraint, 'startdrag', () => {
            isDraggingRef.current = true;
            setInteractionMode('auto');
            if (onDragStart) onDragStart();
        });
        Matter.Events.on(mouseConstraint, 'enddrag', () => {
            isDraggingRef.current = false;
            if (onDragEnd) onDragEnd();
        });

        // 6. RENDER LOOP
        Matter.Events.on(render, 'afterRender', () => {
            const ctx = render.context;
            ctx.font = `bold ${visualTextSize}px sans-serif`;
            ctx.fillStyle = color;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";


            letterBodies.forEach((body) => {
                const { x, y } = body.position;
                const angle = body.angle;
                const char = body.label;

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);
                const yOffset = visualTextSize * 0.05;
                ctx.fillText(char, 0, yOffset);
                ctx.restore();
            });
        });

        // 7. ENGINE LEVEL CHECK (Backup)
        Matter.Events.on(engine, 'beforeUpdate', () => {
            if (isDraggingRef.current) {
                const mPos = mouse.position;
                // Wide bounds check (allow some wiggle room in engine, strict in DOM)
                if (mPos.x < -50 || mPos.x > width + 50 || mPos.y < -50 || mPos.y > height + 50) {
                    forceDrop();
                }
            }
        });

        Matter.Render.run(render);
        const runner = Matter.Runner.create();
        runnerRef.current = runner;
        Matter.Runner.run(runner, engine);

        // 8. GLOBAL LISTENER LOGIC
        const handleResize = () => {
            if (sceneRef.current) {
                const newW = sceneRef.current.clientWidth;
                const newH = sceneRef.current.clientHeight;
                render.canvas.width = newW;
                render.canvas.height = newH;
                Matter.Body.setPosition(floor, { x: newW / 2, y: newH + wallThickness / 2 });
                Matter.Body.setPosition(rightWall, { x: newW + wallThickness / 2, y: newH / 2 });
            }
        };

        const handleGlobalMouseMove = (e: MouseEvent) => {
            // A. AUTO-DROP (Strict DOM Bounds)
            if (isDraggingRef.current && render.canvas) {
                const rect = render.canvas.getBoundingClientRect();
                // Add a small buffer (50px) so it doesn't drop immediately at the edge
                const buffer = 50;
                const isOutside =
                    e.clientX < rect.left - buffer ||
                    e.clientX > rect.right + buffer ||
                    e.clientY < rect.top - buffer ||
                    e.clientY > rect.bottom + buffer;

                if (isOutside) {
                    forceDrop();
                    return;
                }
            }

            // B. SMART INTERACTION
            if (isDraggingRef.current) {
                setInteractionMode('auto');
                return;
            }

            if (render.canvas) {
                const rect = render.canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                // Only enable pointer events if directly OVER a letter
                const matches = Matter.Query.point(lettersRef.current, { x: mouseX, y: mouseY });
                setInteractionMode(matches.length > 0 ? 'auto' : 'none');
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('mouseup', forceDrop);
        window.addEventListener('blur', forceDrop);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mouseup', forceDrop);
            window.removeEventListener('blur', forceDrop);

            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            Matter.World.clear(world, false);
            Matter.Engine.clear(engine);
        };
    }, [onDragStart, onDragEnd, forceDrop, color]); // Empty dependency array, forceDrop is stable via useCallback if deps are


    return (
        <div
            ref={sceneRef}
            className="absolute inset-0 w-full h-full z-50 overflow-hidden cursor-grab active:cursor-grabbing touch-none select-none"
            aria-hidden="true"
            style={{ pointerEvents: interactionMode }}
            // Redundant React-level safety
            onMouseLeave={() => { if (isDraggingRef.current) forceDrop(); }}
        />
    );
}
