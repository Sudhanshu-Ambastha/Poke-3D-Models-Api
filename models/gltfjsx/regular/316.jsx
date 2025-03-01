/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/316.glb -o models/gltfjsx/regular/316.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gulpin-b22fd43fce044915a68045e188c0d21c
Title: Gulpin
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/316.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials.body_mat} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.eye_mat} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.mo_ex_mat} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.mo_ex_mat} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.eye_mat} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.body_mat} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/316.glb')
