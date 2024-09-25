import { createRoot } from 'react-dom/client';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './index.css';

import Model from './Model';
import Loader from './Loader';
import { OrbitControls } from '@react-three/drei';

export default () => {
  console.log('obj', process.env.REACT_APP_OBJ_SRC);
  console.log('mtl', process.env.REACT_APP_MTL_SRC);
  console.log('texture', process.env.REACT_APP_TEXTURE_SRC);

  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        camera={{
          position: [0, 0, 200],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Model
            // objSrc={process.env.REACT_APP_OBJ_SRC}
            // mtlSrc={process.env.REACT_APP_MTL_SRC}
            // textureSrc={process.env.REACT_APP_TEXTURE_SRC}
            // objSrc={'/3.obj'}
            // mtlSrc={'/3.mtl'}
            // textureSrc={'/3.jpg'}
            // objSrc={'/asd idriss 651.obj'}
            // mtlSrc={'/asd idriss 651.mtl'}
            // textureSrc={'/asd idriss 651.jpg'}
            objSrc={process.env.REACT_APP_OBJ_SRC}
            mtlSrc={process.env.REACT_APP_MTL_SRC}
            textureSrc={process.env.REACT_APP_TEXTURE_SRC}
          />
          <directionalLight />
          <ambientLight intensity={8} />
          <OrbitControls />
          <color attach='background' args={['#000']} />
        </Suspense>
      </Canvas>
    </>
  );
};
