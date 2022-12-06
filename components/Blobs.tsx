import React, { useRef } from 'react';
import { map } from 'lodash';
import { useFrame } from 'react-three-fiber';

import Cube from './Cube';
import Blob from './Blob';

export default function Blobs() {
  const group = useRef();

  useFrame(() => {
    // @ts-ignore
    group.current.rotation.y += 0.005;
  });

  const nodesCubes = map(new Array(10), (el, i) => {
    return <Blob key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
}
