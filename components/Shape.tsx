import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import texture from '../images/texture.jpg';

export default function Shape() {
  //   const texture = '../images/texture.jpg';
  //   const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach={'geometry'} args={[3, 3, 3]} />
      {/* <meshStandardMaterial map={colorMap} /> */}
      <meshLambertMaterial attach={'material'} color="blue" />
    </mesh>
  );
}
