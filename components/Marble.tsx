import { useTexture } from '@react-three/drei';
import { useLayoutEffect } from 'react';

export default function Marble({ setLoaded, marblesCount, ref }: { setLoaded: any, marblesCount: any, ref: any }) {
  const base = useTexture({ map: 'filecoingreen.png' });

  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <instancedMesh mass={4} castShadow receiveShadow ref={ref} args={[null, null, marblesCount]}>
      <sphereBufferGeometry args={[0.2, 128, 128]} />
      <meshStandardMaterial {...base} attach="material" roughness={0.5} metalness={0.2} />
    </instancedMesh>
  );
}
