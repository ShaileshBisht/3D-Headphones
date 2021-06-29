import "./App.css";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import Scene from "./Scene";

function App() {
  return (
    <div className="app">
      <div className="canvasFrame">
        <Canvas camera={{ position: [0, 4, 4] }}>
          <ambientLight intensity={0.3} />
          <spotLight intensity={1} position={[50, 20, 20]} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <ContactShadows
            opacity={1}
            width={10}
            height={10}
            blur={1}
            far={5}
            rotation-x={Math.PI / 2}
            resolution={256}
            position={[1, -1.7, 0]}
          />
          {/* <OrbitControls
            autoRotate={true}
            enablePan={true}
            enableDamping={true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            //minPolarAngle={Math.PI / 2}
          /> */}
        </Canvas>
        <div className="canvas_text">
          <h1>Headphones</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
