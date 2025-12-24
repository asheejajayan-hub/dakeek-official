"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { ArrowDown } from "lucide-react";

function FluidSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
            <MeshDistortMaterial
                color="#E5E5E5"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.4}
                metalness={0.1}
            />
        </Sphere>
    );
}

export default function HomeHero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-canvas text-ink flex flex-col justify-center items-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
                <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <FluidSphere />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
                <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-titanium">
                        Live Status: 12 Teams Deployed
                    </span>
                </div>

                <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif italic text-ink mb-8 tracking-tighter mix-blend-darken">
                    The Concierge <br /> For Your Home.
                </h1>

                <p className="text-xl md:text-2xl text-titanium font-light max-w-2xl mx-auto mb-12">
                    Everything your home needs, in one tap. <br />
                    We handle the mess so you don&apos;t have to.
                </p>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-12 text-xs font-mono text-titanium animate-bounce flex flex-col items-center gap-2 z-20">
                SCROLL
                <ArrowDown className="w-4 h-4" />
            </div>
        </section>
    );
}
