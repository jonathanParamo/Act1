// src/components/Scene.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Stars from './Stars';

const Ring = () => {
  const ringRef = useRef();
  const texture = useTexture('/earth.jpeg');
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.RingGeometry(0.7, 3, 15, 8, 1.9, 4.60);
    const material = new THREE.MeshBasicMaterial({
      color: "#42BFDD",
      map: texture,
      metalness: 1,
      roughness: 0.9,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, material);

    ringRef.current = mesh;
    scene.add(mesh);

    return () => {
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);
};

const CPlanet = () => (
  <div className='h-[calc(100vh-80px)] bg-slate-950 flex justify-center items-center'>
    <Canvas id="myCanvas" className='absolute'>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars  />
      <Ring position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  </div>
);

export default CPlanet;
