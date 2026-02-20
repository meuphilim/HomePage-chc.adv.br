"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, scale }: { position: [number, number, number]; color: number; scale: number }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const rotationSpeed = useRef({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.005
    });

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed.current.x;
            meshRef.current.rotation.y += rotationSpeed.current.y;
            meshRef.current.rotation.z += rotationSpeed.current.z;

            // Floating motion
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.002;
        }
    });

    return (
        <Icosahedron args={[1.5, 0]} position={position} scale={scale} ref={meshRef}>
            <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
        </Icosahedron>
    );
};

const Scene = () => {
    const shapes = Array.from({ length: 5 }).map((_, i) => ({
        key: `shape-${i}`, // Use key instead of id for React
        position: [
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ] as [number, number, number],
        scale: Math.random() * 0.7 + 0.5,
        color: i % 2 === 0 ? 0xd4af37 : 0xaa8c2c // Gold colors
    }));

    return (
        <>
            {shapes.map((shape) => (
                <FloatingShape key={shape.key} position={shape.position} color={shape.color} scale={shape.scale} />
            ))}
        </>
    );
};

const BackgroundCanvas = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ alpha: true, antialias: true }}>
                <Scene />
            </Canvas>
        </div>
    );
};

export default BackgroundCanvas;
