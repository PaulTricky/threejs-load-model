import { createRoot } from 'react-dom/client';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './index.css';

import Model from './Model';
import Loader from './Loader';
import { Environment, OrbitControls } from '@react-three/drei';

export default () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{
        position: [0, 0, 200],
      }}
    >
      <Suspense fallback={<Loader />}>
        <Model objSrc={'/5.obj'} mtlSrc={'/5.mtl'} textureSrc={'/5_1.jpg'} />
        <OrbitControls />
        <color attach='background' args={['#000']} />
      </Suspense>
    </Canvas>
  );
};
