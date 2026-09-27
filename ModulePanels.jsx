import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import { scrollState } from '../../state/scrollStore.js';
import { VERTICALS, CUSTOM_SOFTWARE } from '../../data/verticals.js';

const PANELS = [...VERTICALS, CUSTOM_SOFTWARE].map((v) => ({
  id: v.id,
  label: v.kicker,
  color: v.color,
  stationIndex: v.index
}));

function Panel({ data, angle, radius }) {
  const group = useRef();
  const mat = useRef();
  const baseColor = useMemo(() => new THREE.Color(data.color), [data.color]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const proximity = 1 - Math.min(1, Math.abs(scrollState.section - data.stationIndex));
    const active = Math.max(0, proximity);
    const liftedRadius = radius - active * 0.9;

    group.current.position.x = Math.cos(angle + state.clock.elapsedTime * 0.05) * liftedRadius;
    group.current.position.z = Math.sin(angle + state.clock.elapsedTime * 0.05) * liftedRadius;
    group.current.position.y = active * 0.35;
    group.current.lookAt(0, group.current.position.y, 0);

    const targetScale = 0.55 + active * 0.55;
    group.current.scale.setScalar(
      THREE.MathUtils.lerp(group.current.scale.x, targetScale, Math.min(1, delta * 4))
    );

    if (mat.current) {
      mat.current.emissiveIntensity = THREE.MathUtils.lerp(
        mat.current.emissiveIntensity,
        0.25 + active * 1.1,
        Math.min(1, delta * 4)
      );
      mat.current.opacity = THREE.MathUtils.lerp(mat.current.opacity, 0.35 + active * 0.55, delta * 4);
    }
  });

  return (
    <group ref={group}>
      <RoundedBox args={[1.15, 0.72, 0.04]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          ref={mat}
          color={baseColor}
          emissive={baseColor}
          emissiveIntensity={0.25}
          transparent
          opacity={0.4}
          roughness={0.3}
          metalness={0.4}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.03]}
        fontSize={0.11}
        color="#f5f7ff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1}
      >
        {data.label}
      </Text>
    </group>
  );
}

export default function ModulePanels() {
  const radius = 3.1;
  return (
    <group>
      {PANELS.map((data, i) => (
        <Panel key={data.id} data={data} angle={(i / PANELS.length) * Math.PI * 2} radius={radius} />
      ))}
    </group>
  );
}
