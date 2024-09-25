import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { loaded, total } = useProgress();

  if (loaded === total) {
    return null;
  }

  return (
    <Html center>
      <div style={{ whiteSpace: 'nowrap' }} id='data-progress'></div>
    </Html>
  );
}
export default Loader;
