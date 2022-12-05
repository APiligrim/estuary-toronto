import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { useSphere } from '@react-three/cannon';

export default () => {
  const Sphere = () => {
    const ref = useRef();

    const base = useTexture({ map: 'estuary.png' });

    useFrame(({ clock }) => {
      ref.current.rotation.y += -0.004;
    });

    return (
      <mesh ref={ref} castShadow receiveShadow>
        <sphereBufferGeometry args={[2, 30, 30]} attach="geometry" />
        <meshStandardMaterial {...base} attach="material" roughness={0.5} metalness={0.2} />
      </mesh>
    );
  };

  return (
    <group>
      <Sphere />
      <ambientLight intensity={0.1} />
      <pointLight intensity={0.1} position={[0, 0, 0]} />
    </group>
  );
};
