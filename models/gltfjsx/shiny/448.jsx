/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/shiny/448.glb -o models/gltfjsx/shiny/448.jsx 
Author: arkaroy013 (https://sketchfab.com/arkaroy013)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shiny-lucario-82583666b2ca46e9ac5ccd0c9d701034
Title: Shiny Lucario
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/shiny/448.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={8.43}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.096, 0, 0.019]} rotation={[0, -0.384, 0]} scale={0.001}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.material} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.material_1} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.material_2} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.material_3} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.material_4} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.material_5} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.material_6} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_36.geometry} material={materials.material_7} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.material_8} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
            <mesh geometry={nodes.Object_44.geometry} material={materials.material_9} position={[0, -138.024, 256]} rotation={[-Math.PI / 2, 0, -0.178]} scale={[148.779, 148.778, 148.779]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/shiny/448.glb')
