import styles from '@components/Header.module.scss';
import { Float, MeshReflectorMaterial, OrbitControls, Text, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { InstancedRigidBodies, Physics, RigidBody } from '@react-three/rapier';
import { useEffect, useMemo, useRef, useState } from 'react';
import Blob from './Blob';
import Marble from './Marble';
import Popup from './Popup';
import SocialTag from './SocialTag';
import Sphere from './Sphere';

function Header(props: any) {
  const [loaded, setLoaded] = useState(false);
  // const [timedPopup, setTimedPopup] = useState(false);
  const font = '/Parabole-Regular.wof';

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 7000);
  // }, []);

  const marbles = useRef();
  const marblesCount = 50;

  const marbleTransforms = useMemo(() => {
    const positions = [];
    const rotations = [];
    const scales = [];

    for (let i = 0; i < marblesCount; i++) {
      positions.push([Math.random() - 0.5, Math.random() * 2 + 4, Math.random() - 0.5]);
      rotations.push([1, 1, 1]);

      const scale = 0.2 + Math.random() * 0.8;
      scales.push([scale, scale, scale]);
    }

    return { positions, rotations, scales };
  }, []);

  return (
    <div className={styles.container}>
      <Canvas
        style={{ position: 'absolute' }}
        className={styles.canvas}
        camera={{
          position: [-674.32, 401.86, 878.18],
          near: -10000,
          far: 10000,
          zoom: 1.0 * 100,
        }}
        orthographic
        shadows
      >
        <OrbitControls enableZoom={false} />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.3} />
        <ambientLight intensity={0.3} color="green" />
        <Float>
          <Text color="limegreen" textAlign="center" maxWidth={8} fontSize={0.2} position-y={2.5} font="/Parabole_Regular.json">
            {' '}
            January 24th, 2023 from 7pm - 10pm EST @ CLIO, Toronto
          </Text>
          <Text color="limegreen" textAlign="center" maxWidth={8} fontSize={0.2} position-y={3} font="/Parabole_Regular.json">
            {' '}
            Applications Are Now Closed
          </Text>
        </Float>

        <Physics>
          <Blob position={[-4, -0.5, -3]} />
          <Blob position={[-3, 1.5, -3]} />
          <Blob position={[3, 1, 4]} />
          <Blob position={[-3, 0, 7]} />
          <Blob position={[4, 1, -2]} />

          <InstancedRigidBodies mass={5} colliders="ball" positions={marbleTransforms.positions} rotations={marbleTransforms.rotations} scales={marbleTransforms.scales}>
            <Marble ref={marbles} marblesCount={marblesCount} setLoaded={setLoaded} />
          </InstancedRigidBodies>

          <RigidBody colliders="ball" type="fixed">
            <Sphere />
          </RigidBody>

          <RigidBody type="fixed">
            <mesh receiveShadow position-y={-1.7} rotation-x={-Math.PI * 0.5} scale={500}>
              <planeGeometry />
              <MeshReflectorMaterial mirror={3} color="black" resolution={512} blur={[1000, 1000]} mixBlur={1} />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>

      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup} /> */}
      {loaded && <SocialTag />}
    </div>
  );
}

export default Header;
