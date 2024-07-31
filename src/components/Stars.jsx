import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Stars = () => {
  const starGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  const starMaterial = useMemo(() => new THREE.PointsMaterial({ color: '#00aaff' }), []);
  // <meshStandardMaterial color="#42BFDD" emissive="#00aaff" emissiveIntensity={0.9} />

  const stars = useMemo(() => {
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      positions.set([x, y, z], i * 3);
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return new THREE.Points(starGeometry, starMaterial);
  }, [starGeometry, starMaterial]);

  useFrame(() => {
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.0005;
  });

  return <primitive object={stars} />;
};

export default Stars;