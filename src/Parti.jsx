// Particle.jsx
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 100;
const PARTICLE_SIZE = 1;
const ROTATION_ANGLE = Math.PI / 60;

function Particle() {
  const particlesRef = useRef();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Inicializar partículas
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const distance = Math.random() * 5000;
      const angle = Math.random() * Math.PI * 2;
      return {
        x: distance * Math.cos(angle),
        y: distance * Math.sin(angle),
        z: Math.random() * 1000 - 500,
        color: new THREE.Color(Math.random(), Math.random(), Math.random()),
      };
    });
    setParticles(newParticles);
  }, []);

  useFrame(() => {
    // Rotar partículas
    if (particlesRef.current) {
      particlesRef.current.rotation.y += ROTATION_ANGLE;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[PARTICLE_SIZE, 16, 16]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </group>
  );
}

export default Particle;
