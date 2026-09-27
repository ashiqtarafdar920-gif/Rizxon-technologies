import { Suspense, lazy, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { scrollState } from '../../state/scrollStore.js';

const Scene = lazy(() => import('./Scene.jsx'));

export default function CanvasRoot() {
  const [dpr, setDpr] = useState(scrollState.isMobile ? 1 : 1.5);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer the WebGL context creation a tick so the first paint of the
    // hero's DOM content is never blocked by shader/geometry setup.
    const hasIdle = typeof window.requestIdleCallback === 'function';
    const id = hasIdle
      ? window.requestIdleCallback(() => setReady(true))
      : window.setTimeout(() => setReady(true), 50);
    return () => {
      if (hasIdle) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, []);

  if (!ready) return <div className="canvas-root canvas-root--placeholder" aria-hidden="true" />;

  return (
    <div className="canvas-root" aria-hidden="true">
      <Canvas
        dpr={dpr}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: false }}
        camera={{ position: [0, 1.6, 6.4], fov: 42, near: 0.1, far: 30 }}
        onCreated={({ gl }) => gl.setClearColor('#05060d', 1)}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(scrollState.isMobile ? 1 : 1.5)} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
