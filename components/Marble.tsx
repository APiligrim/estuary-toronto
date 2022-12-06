import { useLayoutEffect, useState } from 'react';
import { useSphere } from '@react-three/cannon';
import { useTexture } from '@react-three/drei';

export default function Marble({ setLoaded }: { setLoaded: any }) {
  const [number] = useState(50);
  const base = useTexture({ map: 'filecoin.png' });

  const [ref] = useSphere(() => ({
    args: [0.1],
    mass: 1,
    position: [Math.random() - 0.5, Math.random() * 2 + 4, Math.random() - 0.5],
  }));

  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <group>
      <instancedMesh castShadow ref={ref} args={[undefined, undefined, number]}>
        <sphereBufferGeometry args={[0.2, 128, 128]} />

        <meshStandardMaterial {...base} attach="material" roughness={0.5} metalness={0.2} />
      </instancedMesh>
    </group>
  );
}
