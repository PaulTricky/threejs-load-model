import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useEffect } from 'react';

const Model = (props) => {
  const { objSrc, mtlSrc, textureSrc } = props;

  const materials = useLoader(MTLLoader, mtlSrc);

  let obj = useLoader(OBJLoader, objSrc, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [textureSrc]
  );

  return (
    <primitive object={obj} {...props}>
      <ambientLight intensity={7} />
      <directionalLight />
      <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </primitive>
  );
};

export default Model;
