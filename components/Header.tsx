import * as THREE from 'three';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from '@components/Header.module.scss';
import { OrbitControls } from '@react-three/drei';
import Shape from './Shape';
import Footer from './Footer';

function Header(props: any) {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //   const renderer = new THREE.WebGLRenderer();

  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);
  //   const geometry = new THREE.BoxGeometry(1, 1, 1);
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(geometry, material);

  //   scene.add(cube);

  //   camera.position.z = 5;

  //   function animate() {
  //     requestAnimationFrame(animate);

  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;

  //     renderer.render(scene, camera);
  //   }

  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Shape />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Header;
