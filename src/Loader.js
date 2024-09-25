import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress, loaded, total } = useProgress();
  console.log('progress', progress, loaded, total);
  return <Html center>{progress} % loaded</Html>;
}
export default Loader;
