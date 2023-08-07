import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import "./styles.css";

function Foo() {
  const get = useThree((state) => state.get);

  console.log(get);
}

export default function App() {
  return (
    <div className="App">
      
      <Canvas>
        <Foo />

        {/* <ambientLight intensity={1} color="white" />
        <directionalLight color="red" position={[0,1,3]} intensity={2} /> 
         <pointLight position={[0, 1, 3]} intensity={4}/>
        <mesh position={[2, 1, 1]}  >
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh position={[0, 0, 1]}>
          <octahedronGeometry />
          <meshToonMaterial color="white" />
        </mesh> */}

        {/* <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
  <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
 </directionalLight>
 <mesh visible userData={{ hello: 'world' }} position={[0, 0, 0]} rotation={[Math.PI / 666, 0, 0]} >
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial color="hotpink"  />
</mesh> */}
      </Canvas>
    </div>
  );
}
