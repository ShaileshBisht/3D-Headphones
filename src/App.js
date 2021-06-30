import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Scene from "./Scene";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { FcLike } from "react-icons/fc";

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
          <h1>Wireless</h1>
          <h3>Headphones</h3>
          <p>
            Stylish, foldable design with Active Noise Cancellation for Crystal
            clear audio.
          </p>
          <span>Quality that you can feel</span>
          <div className="headphones_img">
            <div className="img_box">
              <img src={img1} alt="" />
            </div>
            <div className="img_box">
              <img src={img2} alt="" />
            </div>
            <div className="img_box">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="Buy_button">
            <p>Buy Now</p>
          </div>
        </div>
        <div className="socail_icons">
          <a
            className="icon"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/"
          >
            <GrGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shailesh-bisht/"
          >
            <GrLinkedin className="icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/crowned_dem0n/"
          >
            <GrInstagram className="icon" />
          </a>
        </div>
        <div className="footer">
          <p>
            Made with <FcLike /> by <span>Shailesh Bisht</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
