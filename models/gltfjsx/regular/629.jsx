/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/629.glb -o models/gltfjsx/regular/629.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/629.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_0.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_1.geometry} material={materials.Eye} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_2.geometry} material={materials.Fur} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Body} rotation={[Math.PI / 2, 0, 0]} scale={4.477} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/629.glb')
