import "./App.css";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import Scene from "./Scene";

function App() {
  return (
    <div className="app">
      <div className="canvasFrame">
        <Canvas>
          <ambientLight intensity={0.3} />
          <spotLight intensity={1} position={[5, 20, 20]} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <ContactShadows
            opacity={1}
            width={5}
            height={5}
            blur={1}
            far={5}
            rotation-x={Math.PI / 2}
            resolution={256}
            position={[0, -1, 0]}
          />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
