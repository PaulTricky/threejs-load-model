import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useTexture } from '@react-three/drei';
import { useEffect } from 'react';
const Model = (props) => {
  const { objSrc, mtlSrc, textureSrc } = props;

  const materials = useLoader(MTLLoader, mtlSrc);

  let obj = useLoader(
    OBJLoader,
    objSrc,
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    },
    onProgress,
    onError
  );

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      const progress = document.querySelector('#data-progress');
      if (progress) {
        progress.textContent = percentComplete.toFixed(2) + '% loaded';
      }
    }
  }

  function onError() {}

  const texture = useTexture(textureSrc);

  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) child.material.map = texture;
    });
  }, [obj]);

  return (
    <>
      <primitive object={obj} {...props}>
        <meshPhysicalMaterial map={texture} />
      </primitive>
    </>
  );
};

export default Model;
