/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/491.glb -o models/gltfjsx/regular/491.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/491.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, -0.007, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_10.geometry} material={materials['assets_textures_pm0491_00_Eye1-material-material']} skeleton={nodes.Object_10.skeleton} />
          <skinnedMesh geometry={nodes.Object_6.geometry} material={materials['assets_textures_pm0491_00_BodyB1-material-material']} skeleton={nodes.Object_6.skeleton} />
          <skinnedMesh geometry={nodes.Object_8.geometry} material={materials['assets_textures_pm0491_00_BodyA1-material-material']} skeleton={nodes.Object_8.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/491.glb')
