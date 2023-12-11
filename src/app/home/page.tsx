"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "react-three-fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Loader from "../components/Loader";
import { Section } from "../components/Section";

const CameraControls: React.FC = () => {
  const { camera, gl } = useThree();

  return (
    <OrbitControls
      args={[camera, gl.domElement]}
      enableZoom={false}
      autoRotate
      enableRotate={false}
    />
  );
};

interface ModelProps {
  groupProps?: JSX.IntrinsicElements["group"];
  url: string;
}

export const Model: React.FC<ModelProps> = (props) => {
  const { nodes, materials } = useGLTF(props.url) as unknown as {
    nodes: {
      [key: string]: {
        geometry: THREE.BufferGeometry;
      };
    };
    materials: any; // Adjust this to match your actual material types
  };

  useGLTF.preload(props.url);

  return (
    <group {...props.groupProps}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
        position={[180.509, 1151.676, 5904.325]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
        position={[3492.547, 1112.371, 3620.925]}
        rotation={[-1.38, 0.112, -0.022]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
        position={[3541.67, 1110.094, 3568.021]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.041}
      />
    </group>
  );
};

const Page = () => {
  const modelRef = useRef<any>(null);

  const handleButtonClick = () => {
    // Trigger the animation by setting the state to true
    if (modelRef.current) {
      modelRef.current.setAnimating(true);
    }
  };

  const handleModelReachedFixedPoint = () => {
    // Change the page or perform any other action
    console.log("Model reached the fixed point. Changing the page...");
  };

  return (
    <section className="w-full h-screen relative">
      <Section delay={1}>
        <div className="absolute top-24 left-0 right-0 z-10 flex items-center justify-center">
          <h1 className="sm:text-xl sm:leading-snug text-center bg-blue-400 py-4 px-8 text-white mx-5 rounded-lg">
            Hi, I am
            <span className="font-semibold mx-2 text-white">
              Johannes Bekele
            </span>
            👋
            <br />A Software Engineer from Ethiopia 🇪🇹
          </h1>
        </div>
      </Section>

      <Canvas
        className={`w-full h-screen bg-blue-400 bg-opacity-30`}
        camera={{ near: 1, far: 1000, position: [100, 100, 100] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight groundColor="#000000" intensity={1} />

          <CameraControls />
          <Model url={"volcano_island_lowpoly.glb"} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Page;
