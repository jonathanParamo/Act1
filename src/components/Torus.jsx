import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Stars from './Stars';

const TorusGeometry = () => {
  const ringRef = useRef();
  const texture = useTexture('/galaxia.jpeg');
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.TorusGeometry(1.8, 0.9, 15, 200, 6.283185);
    const material = new THREE.MeshBasicMaterial({
      color: "#5C9AFF",
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

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.01;
    }
  });
};

const Torus = () => (
  <div className='h-[calc(100vh-80px)] bg-[#000500] p-3'>
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <TorusGeometry />
      <OrbitControls />
    </Canvas>
  </div>
);

export default Torus;
