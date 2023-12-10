"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

export function Model(props: {
  groupProps?: JSX.IntrinsicElements["group"];
  url: string;
}) {
  const { nodes, materials } = useGLTF(props.url);
  console.log("Nodes", JSON.stringify(nodes));
  console.log("materials", materials);
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
}

const page = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"></div>

      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 1, far: 2000, position: [0, 1, 400] }}
      >
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />

        <Model url={"volcano_island_lowpoly.glb"} />
      </Canvas>
    </section>
  );
};

export default page;
