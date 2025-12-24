"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function PrecisionPart() {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002; // Very slow, heavy rotation
            meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1; // Subtle tilt
        }
    });

    const ceramicMaterial = new THREE.MeshPhysicalMaterial({
        color: "#F5F5F7", // Apple-like off-white
        roughness: 0.2,   // Matte but smooth
        metalness: 0.1,   // Slight metallic feel like coated aluminum
        clearcoat: 0.1,
        clearcoatRoughness: 0.1,
    });

    return (
        <group ref={meshRef} rotation={[0.5, 0, 0]}>
            {/* Abstract "Filter" or "Valve" Shape */}

            {/* Core Cylinder */}
            <mesh material={ceramicMaterial}>
                <cylinderGeometry args={[1.5, 1.5, 1, 64]} />
            </mesh>

            {/* Inner Ring Detail */}
            <mesh position={[0, 0.6, 0]} material={ceramicMaterial}>
                <torusGeometry args={[1.2, 0.1, 16, 100]} />
            </mesh>
            <mesh position={[0, -0.6, 0]} material={ceramicMaterial}>
                <torusGeometry args={[1.2, 0.1, 16, 100]} />
            </mesh>

            {/* Outer Housing Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} material={ceramicMaterial}>
                <torusGeometry args={[2, 0.2, 32, 100]} />
            </mesh>

            {/* Floating Detail Elements to add complexity */}
            <mesh position={[1.8, 0.5, 0]} material={ceramicMaterial}>
                <sphereGeometry args={[0.2, 32, 32]} />
            </mesh>
            <mesh position={[-1.8, -0.5, 0]} material={ceramicMaterial}>
                <sphereGeometry args={[0.2, 32, 32]} />
            </mesh>

        </group>
    );
}

export function ThreeScene() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-60 mix-blend-multiply">
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }}>
                <fog attach="fog" args={['#ffffff', 5, 15]} />
                <ambientLight intensity={0.5} />
                <Environment preset="studio" />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <PrecisionPart />
                </Float>
            </Canvas>
        </div>
    );
}
