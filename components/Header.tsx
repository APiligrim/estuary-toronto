import * as THREE from 'three';
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from '@components/Header.module.scss';
import { OrbitControls } from '@react-three/drei';
import Shape from './Shape';
import Footer from './Footer';
import Experience from './Experience';
import Floor from './Floor';
import Marble from './Marble';
import { Debug, Physics } from '@react-three/cannon';
import Blob from './Blob';
import Sphere from './Sphere';
import LogoTag from './SocialTag';
import SocialTag from './SocialTag';

function Header(props: any) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <Canvas
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Physics>
            <Sphere />
            <Blob position={[-2, -0.5, -3]} />
            <Blob position={[-2, 1.5, 2]} />
            <Blob position={[2, 1, 4]} />
            <Blob position={[-2, -0.2, 4]} />
            <Blob position={[2, 1, -2]} />
            <Marble setLoaded={setLoaded} />
            <Floor />
          </Physics>
        </Suspense>

        <gridHelper args={[200, 90, '#83BB59', '#83BB59']} position={[0, -2.27, 0]} />
      </Canvas>
      {loaded && <SocialTag />}
    </div>
  );
}

export default Header;
