import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollState } from '../../state/scrollStore.js';

const target = new THREE.Vector3();
const lookAt = new THREE.Vector3();

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const parallax = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    const s = scrollState.section;

    // Base cinematic path: the camera slowly orbits and dollies in as the
    // page progresses, settling closer and lower by the contact section.
    const angle = -Math.PI / 2 + s * 0.42;
    const radius = 6.4 - s * 0.28;
    const height = 1.6 - Math.sin(s * 0.6) * 0.4 + s * 0.05;

    target.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);

    if (!scrollState.isMobile && !scrollState.reducedMotion) {
      parallax.current.x = THREE.MathUtils.lerp(parallax.current.x, pointer.x * 0.4, 0.05);
      parallax.current.y = THREE.MathUtils.lerp(parallax.current.y, pointer.y * 0.25, 0.05);
      target.x += parallax.current.x;
      target.y += parallax.current.y;
    }

    camera.position.lerp(target, Math.min(1, delta * 1.6));

    lookAt.set(0, Math.sin(s * 0.6) * 0.2, 0);
    camera.lookAt(lookAt);
  });

  return null;
}
