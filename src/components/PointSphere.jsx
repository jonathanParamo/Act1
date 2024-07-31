import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PointsSphere() {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [hoveredColor, setHoveredColor] = useState('red');
  const pointsRef = useRef();
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  const numPoints = 1000;
  const radius = 5;
  const positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  const material = useMemo(() =>
    new THREE.PointsMaterial({ size: 0.1, color: 'white' }), []
  );

  useFrame(({ mouse, camera }) => {
    mouseRef.current.set(mouse.x, mouse.y);
    raycasterRef.current.updateMatrixWorld();
    raycasterRef.current.ray = camera.getWorldDirection(raycasterRef.current.ray);
    raycasterRef.current.ray.origin.copy(camera.position);
    raycasterRef.current.ray.direction.set(mouseRef.current.x, mouseRef.current.y, 1).unproject(camera);
    raycasterRef.current.ray.direction.sub(raycasterRef.current.ray.origin).normalize();

    const intersects = raycasterRef.current.intersectObject(pointsRef.current);
    if (intersects.length > 0) {
      const pointIndex = intersects[0].index;
      setHoveredPoint(pointIndex);
    } else {
      setHoveredPoint(null);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.1}
        color={hoveredPoint !== null ? hoveredColor : 'white'}
        onUpdate={(self) => (self.color = new THREE.Color(hoveredPoint !== null ? hoveredColor : 'white'))}
      />
    </points>
  );
}

export default PointsSphere;
