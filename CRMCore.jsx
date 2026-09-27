import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { scrollState } from '../../state/scrollStore.js';
import { STATIONS } from '../../data/verticals.js';

const stationColors = STATIONS.map((s) => new THREE.Color(s.color));

function colorForSection(section) {
  const i = Math.max(0, Math.min(stationColors.length - 1, Math.floor(section)));
  const j = Math.min(stationColors.length - 1, i + 1);
  const t = section - i;
  return stationColors[i].clone().lerp(stationColors[j], t);
}

export default function CRMCore() {
  const coreRef = useRef();
  const shellRef = useRef();
  const lightRef = useRef();
  const color = useMemo(() => new THREE.Color('#3d5afe'), []);

  useFrame((_, delta) => {
    const target = colorForSection(scrollState.section);
    color.lerp(target, Math.min(1, delta * 2.2));

    if (coreRef.current) {
      coreRef.current.material.color.copy(color);
      coreRef.current.material.emissive.copy(color);
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.x = Math.sin(scrollState.section * 0.6) * 0.15;

      // Gentle "breathing" distortion — subtler once the user stops scrolling
      const restlessness = 0.35 + Math.min(0.5, Math.abs(scrollState.velocity)) * 0.4;
      coreRef.current.material.distort = scrollState.reducedMotion ? 0.12 : restlessness;
    }

    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.08;
      shellRef.current.rotation.z += delta * 0.03;
      shellRef.current.material.color.copy(color);
    }

    if (lightRef.current) {
      lightRef.current.color.copy(color);
    }
  });

  return (
    <group>
      <pointLight ref={lightRef} position={[0, 0, 0]} intensity={6} distance={9} decay={2} />

      <Sphere ref={coreRef} args={[1.05, 64, 64]}>
        <MeshDistortMaterial
          color="#3d5afe"
          emissive="#3d5afe"
          emissiveIntensity={0.55}
          distort={0.35}
          speed={1.4}
          roughness={0.15}
          metalness={0.6}
        />
      </Sphere>

      <Icosahedron ref={shellRef} args={[1.85, 1]}>
        <meshStandardMaterial
          color="#3d5afe"
          wireframe
          transparent
          opacity={0.35}
          roughness={1}
        />
      </Icosahedron>
    </group>
  );
}
