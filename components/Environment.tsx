import { BackSide } from 'three';

export default function Environment() {
  return (
    <mesh>
      <sphereBufferGeometry args={[6, 10, 10]} attach="geometry" />
      <meshStandardMaterial color={'#000'} attach="material" side={BackSide} metalness={0.1} />
    </mesh>
  );
}
