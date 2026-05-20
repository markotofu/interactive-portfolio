"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";

export default function Home() {
  const ref = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.position, {
        x: 3,
        y: 1,
        duration: 2,
        repeat:-1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div className="w-screen h-dvh">
      <Canvas
        className="bg-gray-900"
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />

        <mesh ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="green" />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>
  );
}