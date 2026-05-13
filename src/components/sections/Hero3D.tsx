"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;

            // Floating effect tied to hover
            const targetScale = hovered ? 1.1 : 1;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                castShadow
                receiveShadow
            >
                <octahedronGeometry args={[1.5, 0]} />
                <meshPhysicalMaterial
                    color="#1E65F3"
                    emissive="#b89327"
                    emissiveIntensity={hovered ? 0.6 : 0.2}
                    roughness={0.1}
                    metalness={0.8}
                    transmission={0.9} // glass-like
                    thickness={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    ior={1.5}
                />
            </mesh>
        </Float>
    );
}

export function Hero3D() {
    return (
        <div className="relative h-[600px] w-full lg:h-[700px]">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                    <AbstractShape />

                    <Environment preset="city" />
                    <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                </Canvas>
            </div>

            {/* Decorative gradients */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#1E65F3]/10 blur-[120px]" />
            <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E40914]/10 blur-[120px]" />
        </div>
    );
}
