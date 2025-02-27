/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/285.glb -o models/gltfjsx/regular/285.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shroomish-b3704b77dcac4226a0c45492e6015ebe
Title: Shroomish
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/285.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 1.57, Math.PI / 2]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.KinococoDh} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.KinococoEyeDh} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.KinococoEyebrowDh} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/285.glb')
