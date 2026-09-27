import { Grid } from '@react-three/drei';
import CRMCore from './CRMCore.jsx';
import ModulePanels from './ModulePanels.jsx';
import ParticleField from './ParticleField.jsx';
import CameraRig from './CameraRig.jsx';
import { scrollState } from '../../state/scrollStore.js';

export default function Scene() {
  return (
    <>
      <color attach="background" args={['#05060d']} />
      <fog attach="fog" args={['#05060d', 6, 15]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={0.6} color="#8fb2ff" />

      <CRMCore />
      <ModulePanels />
      <ParticleField />
      <CameraRig />

      {!scrollState.isMobile && (
        <Grid
          position={[0, -1.6, 0]}
          args={[20, 20]}
          cellColor="#141a2e"
          sectionColor="#22305c"
          cellSize={0.6}
          sectionSize={3}
          fadeDistance={14}
          fadeStrength={2}
          infiniteGrid
        />
      )}
    </>
  );
}
