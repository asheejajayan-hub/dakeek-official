"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial, Environment } from "@react-three/drei";

import * as THREE from "three";

// --- GLSL SHADERS ---

const LiquidMetalMaterial = shaderMaterial(
    {
        uTime: 0,
        uMouse: new THREE.Vector2(0, 0),
        uResolution: new THREE.Vector2(1, 1),
        uColor1: new THREE.Color("#A18262"), // Default Gold
        uColor2: new THREE.Color("#F0F0F0"), // Default Silver/White
        uEnvironment: null,
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;
    varying vec3 vPosition;

    uniform float uTime;
    uniform vec2 uMouse;

    // Simplex Noise 3D function (Standard substitution)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      vPosition = position;
      // Fluid Distortion Pattern - BALANCED FLOW
      // Visible movement but smooth
      float n = snoise(vec3(position.x * 1.1, position.y * 1.1, uTime * 0.14));
      
      // Final Displacement - BALANCED DEPTH
      // Deep enough to see, smooth enough to look liquid
      float displacement = n * 0.6;
      vDisplacement = displacement;
      
      // Recalculate Normal (Approximation)
      vec3 newPos = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      
      // Pass normal for lighting
      vNormal = normalize(normalMatrix * normal); 
    }
  `,
    // Fragment Shader
    `
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;
    
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uTime;
    
    void main() {
      // 1. Base Metal/Liquid Mix (Light Theme)
      // Clear separation but smooth gradient
      vec3 color = mix(uColor2, uColor1, vDisplacement * 1.25 + 0.15); 
      
      // 2. Shadows/AO approximation
      // Moderate shadowing to define the waves
      color -= vec3(vDisplacement * 0.25); 
      
      // 3. Fake Reflection / Specular highlight (Cheap PBR)
      vec3 lightDir = normalize(vec3(0.5, 1.0, 2.0)); 
      float diff = max(dot(vNormal, lightDir), 0.0);
      
      // 4. Chromatic Aberration - Visible but Clean
      float aberration = vDisplacement * 0.02;
      vec3 r = color * (1.0 + aberration);
      vec3 g = color;
      vec3 b = color * (1.0 - aberration);
      
      // 5. Fresnel Effect (Rim Light)
      // Soft but bright sheen (Power 2.5 for wider falloff)
      float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
      vec3 finalColor = vec3(r.r, g.g, b.b);
      finalColor += vec3(1.0) * fresnel * 0.6; 
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ LiquidMetalMaterial });



function FluidPlane({ color1, color2 }: { color1: string; color2: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const { viewport } = useThree();

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            // Update colors dynamically if props change
            materialRef.current.uniforms.uColor1.value = new THREE.Color(color1);
            materialRef.current.uniforms.uColor2.value = new THREE.Color(color2);
        }


        // Subtle breathing motion for the mesh itself - VERY SLOW
        if (meshRef.current) {
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1.5, 1.5, 128, 128]} /> {/* High poly for smooth ripples */}
            <liquidMetalMaterial ref={materialRef} transparent />
        </mesh>
    );
}

interface HyperHeroProps {
    color1?: string;
    color2?: string;
    initialColor?: string;
}

export default function HyperHero({ color1 = "#A18262", color2 = "#F0F0F0", initialColor }: HyperHeroProps) {
    return (
        <div
            className="absolute inset-0 z-0 w-full h-full transition-colors duration-700"
            style={{ backgroundColor: initialColor || color2 }} // Immediate background color match
        >
            <Canvas
                camera={{ position: [0, 0, 1.5], fov: 75 }}
                dpr={[1, 1.5]} // Reduced from [1, 2] for performance
                gl={{ antialias: false, alpha: true }} // Disabled antialias
            >
                <Suspense fallback={null}>
                    <Environment preset="city" /> {/* For reflections if we add standard materials later */}
                    <FluidPlane color1={color1} color2={color2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                </Suspense>
            </Canvas>
        </div>
    );
}
