import { PlaneProps, usePlane } from '@react-three/cannon';
import { MeshReflectorMaterial } from '@react-three/drei';

export default function Floor(props: PlaneProps) {
  return (
    // @ts-ignore
    <mesh scale={100} receiveShadow position={[0, -2, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeBufferGeometry args={[2000, 2000]} />
      <shadowMaterial />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}
