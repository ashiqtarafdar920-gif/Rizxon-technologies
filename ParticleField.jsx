import { Sparkles } from '@react-three/drei';
import { scrollState } from '../../state/scrollStore.js';

export default function ParticleField() {
  const count = scrollState.isMobile ? 40 : 140;
  return (
    <Sparkles
      count={count}
      scale={[9, 5, 9]}
      size={2.2}
      speed={0.25}
      opacity={0.5}
      color="#7fa4ff"
      noise={1}
    />
  );
}
