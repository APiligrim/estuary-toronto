import Blob from './Blob';
import Sphere from './Sphere';

export default function Experience() {
  return (
    <mesh castShadow receiveShadow>
      <ambientLight intensity={0.1} />
      <Blob position={[-2, -0.5, -3]} />
      <Blob position={[-2, 1.5, 2]} />
      <Blob position={[2, 1, 4]} />
      <Blob position={[-2, -0.2, 4]} />
      <Blob position={[2, 1, -2]} />
      <Sphere />
    </mesh>
  );
}
